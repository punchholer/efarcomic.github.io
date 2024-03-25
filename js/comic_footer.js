document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <div id="social-icons">
        <a href="https://ko-fi.com/punchyholery" target="_blank"><img src="img/icons/kofi.svg" alt="kofi" width="32" height="32"></a>

            <a href="https://tapas.io/series/EFAR/info" target="_blank"><img src="img/icons/tapas.svg" alt="tapas" width="32" height="32"></a>
            <a href="https://discord.gg/Vdje2EwuBD" target="_blank"><img src="img/icons/discord.svg" alt="discord" width="32" height="32"></a>
            <a href="https://twitter.com/efarcomic" target="_blank"><img src="img/icons/twitter.svg" alt="twitter" width="32" height="32"></a>
            <a href="https://www.youtube.com/channel/UCq02sauux-1yqpIly8wI7Nw" target="_blank"><img src="img/icons/youtube.svg" alt="youtube" width="32" height="32"></a>
            <a href="https://www.tumblr.com/efarcomic" target="_blank"><img src="img/icons/tumblr.svg" alt="tumblr" width="32" height="32"></a>
            <a href="https://efarcomic.com/rss.xml" target="_blank"><img src="img/icons/rss.svg" alt="rss" width="32" height="32"></a>
            <!-- Add more social media icons as needed -->   
        </div>
        <p>© 2017 - 2024 Punch-Holer | Powered by <a href="https://rarebit.neocities.org">Rarebit</a></p>
    </footer>
`;

document.styleSheets[0].insertRule('.social-icons-container a { margin-right: 15px; }', 0);