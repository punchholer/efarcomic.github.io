document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <div id="social-icons">
            <a href="https://ko-fi.com/punchyholery" target="_blank"><img src = "img/icons/kofi.svg" alt="kofi"></a>
            <a href="https://tapas.io/series/EFAR/info" target="_blank"><img src="img/icons/tapas.svg" alt="Tapastic" style="width: 32;"></a>
            <a href="https://discord.gg/vnvMKxREHN" target="_blank"><img src="img/icons/discord.svg" alt="Discord" style="width: 32;"></a>
            <a href="https://twitter.com/efarcomic" target="_blank"><img src="img/icons/twitter.svg" alt="Twitter" style="width: 32;"></a>
            <a href="https://www.youtube.com/channel/UCq02sauux-1yqpIly8wI7Nw" target="_blank"><img src="img/icons/youtube.png" alt="Youtube" style="width: 32;"></a>
            <a href="https://www.tumblr.com/efarcomic" target="_blank"><img src="img/icons/tumblr.png" alt="Tumblr" style="width: 32;"></a>
            <a href="https://efarcomic.com/rss.xml" target="_blank"><img src="img/icons/rss.png" alt="RSS" style="width: 32;"></a>
            <!-- Add more social media icons as needed -->   
        </div>
        <p>© 2017 - 2024 Punch-Holer | Powered by <a href="https://rarebit.neocities.org">Rarebit</a> | This website uses <a href="https://www.goatcounter.com/">GoatCounter</a></p>
    </footer>
`;

document.styleSheets[0].insertRule('.social-icons-container a { margin-right: 15px; }', 0);