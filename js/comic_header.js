document.addEventListener('DOMContentLoaded', function () {
  var headerArea = document.getElementById('headerArea');
  var nav = document.getElementById('nav');
  var mobileMenuIcon = document.getElementById('mobile-menu-icon');

  // Toggle the 'active' class on headerArea when the mobile icon is clicked
  mobileMenuIcon.addEventListener('click', function () {
    headerArea.classList.toggle('active');
  });

  // Close the menu when a link is clicked
  var navLinks = document.querySelectorAll('#nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Check if the window width is less than or equal to 600 pixels (mobile view)
      if (window.innerWidth <= 600) {
        // Close the menu
        headerArea.classList.remove('active');
      }
    });
  });
});

document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="archive.html"><img src="./img/logo.png" alt="" /></a> 

        <div id="container">
            <div id="headerArea" class="desktop-nav">
                <div id="header"></div>
                <nav id="nav">
                    <ul>
                        <li><a href="home.html">HOME</a></li>
                        <li><a href="index.html?pg=1#showComic">READ</a></li>
                        <li><a href="archive.html">ARCHIVE</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="characters.html">CHARACTERS</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
`;