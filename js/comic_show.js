//comic_show.js was created by geno7, with much needed assistance from Dannarchy


writeNav(true); //show navigation for comic pages. to toggle either images or text for nav, set this to true or false.

//debug
console.log(pg)

writePageTitle(".writePageTitle", true, " - "); //write title of page. true/false

writePageClickable(".writePageClickable", true); //show the current page. to toggle whether pages can be clicked to move to the next one, set this to true or false.

writeAuthorNotes(".writeAuthorNotes");

//keyNav(); //enables navigation through the comic with the arrow keys and WSAD. It doesn't need a div with a class name, it automatically works. delete or comment out (add // at the beginning) here to disable.

// below this point is more under-the-hood type stuff that we only encourage messing with if you're more familiar with js, 
// but it's still commented as extensively as possible anyway just in case

//SHOW COMIC PAGE, with clickable link
function writePageClickable(div, clickable) {
  let path; // Declare path outside the if block

  if (!clickable) {
    path = (folder != "" ? folder + "/" : "") + image + pg + "." + ext;
    document.querySelector(div).innerHTML = `<div class="comicPage">${writePage()}</div>`;
  } else if (pg < maxpg) {
    path = (folder != "" ? folder + "/" : "") + image + pg + "." + ext;
    document.querySelector(div).innerHTML = `<div class="comicPage"><a href="?pg=${pg + 1}${navScrollTo}"/>${writePage()}</a></div>`;
  } else {
    path = (folder != "" ? folder + "/" : "") + image + pg + "." + ext;
    document.querySelector(div).innerHTML = `<div class="comicPage">${writePage()}</div>`;
  }
}

function writePageTitle(div, toggleNum, char) {
  if (pgData.length >= pg) {
    //display title of current page
    document.querySelector(div).innerHTML = `<h3>${pgData[pg - 1].title}</h3>` + `<p>${pgData[pg - 1].date}</p>`;
  }
}

function writeAuthorNotes(div) { //display author notes
  if (pgData.length >= pg) {
    return document.querySelector(div).innerHTML = `${pgData[pg - 1].authorNotes}`
  }
}

//function used to split pages into multiple images if needed, and add alt text
function writePage() {
  let partExtension = ""; //part extension to add to the URL if the image is split into multiple parts
  let altText = ""; //variable for alt text
  let path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext; //path for your comics made out of variables strung together
  let page = ``;

  if (pgData.length < pg) { //if the array is blank or not long enough to have an entry for this page
    //debug
    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);
    //
    page = `<img alt="${altText}" title="${altText}" src="${path}" />`;
    return page;
  } else if (pgData.length >= pg) { //if the array is not blank, and if it's at least long enough to have an entry for the current page

    altText = pgData[pg - 1].altText; //set alt text to the text defined in the array

    if (pgData[pg - 1].videoId) {
      // Display YouTube video on the specified page
      page = `<iframe src="https://archive.org/embed/${pgData[pg - 1].videoId}" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>`;
    } else if (pgData[pg - 1].imageFiles > 1) { //if there's more than one page segment (e.g., for a multi-part image)
      for (let i = 1; i <= pgData[pg - 1].imageFiles; i++) { //for loop to put all the parts of the image on the webpage
        partExtension = imgPart + i.toString();
        path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext; //reinitialize path (there has to be a less dumb way to do this)
        if (i > 1) {
          page += `<br/>`; //add line break
        }
        page += `<img alt="${altText}" title="${altText}" src="${path}" />`; //add page segment
      }
    } else if (pgData[pg - 1].gifPath) {
      // If there's a GIF path specified in your data
      page = `<img alt="${altText}" title="${altText}" src="${pgData[pg - 1].gifPath}" />`;

    } else {
      // For a single image
      page = `<img alt="${altText}" title="${altText}" src="${path}" />`;
    }

    //debug
    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);
    //
    return page;
  }
}

//debug
console.log("array blank/not long enough? " + (pgData.length < pg));
console.log("array length - " + pgData.length);
console.log("current page - " + pg);
console.log("number of page segments - " + pgData[pg - 1].imageFiles);
console.log("alt text - " + `"` + pgData[pg - 1].altText + `"`);

console.log("nav text - " + navText);
console.log("nav image file extension - " + navExt);

function imgOrText(setImg, navTextSet) { //function that writes the indicated nav button as either an image or text

  if (setImg) { //if its an image
    return `<img src="` + navFolder + `/nav_` + navText[navTextSet].toLowerCase() + `.` + navExt + `" alt="` + navText[navTextSet] + `" />`;
  } else {
    return navText[navTextSet];
  }
}

function writeNav(imageToggle) {
  let writeNavDiv = document.querySelectorAll(".writeNav");
  writeNavDiv.forEach(function (element) {
    element.innerHTML = `<div class="comicNav">
        ${firstButton()}
        ${divider()}
        ${prevButton()}
        ${divider()}
        ${nextButton()}
        ${divider()}
        ${lastButton()}
        </div>
        `;
  })

  function firstButton() {
    //FIRST BUTTON
    if (pg > 1) {
      //wait until page 2 to make button active
      return `<a href="?pg=` + 1 + navScrollTo + `"/>` + imgOrText(imageToggle, 0) + `</a>`;
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 0);
      } else {
        return `<img src="img/comicnav/nav_firstgrey.png"/>`;
      }
    }
  }

  function divider() {
    //divider
    if (!imageToggle) {
      return ` | `;
    }
    return ``;
  }

  function prevButton() {
    //PREV BUTTON
    if (pg > 1) {
      //wait until page 2 to make button active
      return `<a href="?pg=` + (pg - 1) + navScrollTo + `"/>` + imgOrText(imageToggle, 1) + `</a>`;
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 1);
      } else {
        return `<img src="img/comicnav/nav_previousgrey.png"/>`;
      }
    }
  }

  function nextButton() {
    //NEXT BUTTON
    if (pg < maxpg) {
      //only make active if not on the last page
      return `<a href="?pg=` + (pg + 1) + navScrollTo + `"/>` + imgOrText(imageToggle, 2) + `</a>`;
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 2);
      } else {
        return `<img src="img/comicnav/nav_nextgrey.png"/>`;
      }
    }
  }

  function lastButton() {
    //LAST BUTTON
    if (pg < maxpg) {
      //only make active if not on last page
      return `<a href="?pg=` + maxpg + navScrollTo + `"/>` + imgOrText(imageToggle, 3) + `</a>`;
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 3);
      } else {
        return `<img src="img/comicnav/nav_lastgrey.png"/>`;
      }
    }
  }
}

//KEYBOARD NAVIGATION
function keyNav() {
  document.addEventListener("keydown", (e) => {
    if ((e.key == 'ArrowRight' || e.key.toLowerCase() == 'd') && pg < maxpg) { //right arrow or D goes to next page
      window.location.href = "?pg=" + (pg + 1) + navScrollTo;
    } else if ((e.key == "ArrowLeft" || e.key.toLowerCase() == "a") && pg > 1) { //left arrow or A goes to previous page
      window.location.href = "?pg=" + (pg - 1) + navScrollTo;
    } else if (e.key.toLowerCase() == "w") { //W scrolls up
      window.scrollBy({ top: -30 });
    } else if (e.key.toLowerCase() == "s") { //S scrolls down
      window.scrollBy({ top: 30 });
    }



  });
};
