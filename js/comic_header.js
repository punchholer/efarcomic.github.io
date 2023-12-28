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
        mobileMenuIcon.classList.remove('rotate'); // Add this line to remove the rotation class
      }
    });
  });
});

document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index"><img src="./img/logo.png" alt="logo" /></a> 

        <div id="container">
            <div id="headerArea" class="desktop-nav">
                <div id="header"></div>
                <nav id="nav">
                    <ul>
                        <li><a href="index">INDEX</a></li>
                        <li><a href="read?pg=1#showComic">READ</a></li>
                        <li><a href="archive">ARCHIVE</a></li>
                        <li><a href="about">ABOUT</a></li>
                        <li><a href="characters">CHARACTERS</a></li>
                        <li><a href="explore">EXPLORE</a></li>
                        <li><a href="https://www.redbubble.com/people/Punchyholery/shop?asc=u">SHOP</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
`;
