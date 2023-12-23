document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        
       <div id="social-icons">
            <a href="https://ko-fi.com/punchyholery" target="_blank"><img src="img/icons/kofi-icon.png" alt="Ko-Fi"></a>
            <a href="https://tapas.io/series/EFAR/info" target="_blank"><img src="img/icons/tapas-icon.png" alt="Tapastic"></a>
            <a href="https://discord.gg/vnvMKxREHN" target="_blank"><img src="img/icons/discord-icon.png" alt="Discord"></a>
            <a href="https://twitter.com/efarcomic" target="_blank"><img src="img/icons/twitter-icon.png" alt="Twitter"></a>
            <a href="https://www.youtube.com/channel/UCq02sauux-1yqpIly8wI7Nw"><img src="img/icons/youtube-icon.png" alt="Youtube"></a>
            <!-- Add more social media icons as needed -->   
    </div>
            <p>© 2017 - 2024 Punch-Holer | Powered by <a href="https://rarebit.neocities.org">Rarebit</a> | This website uses <a href="https://www.goatcounter.com/">GoatCounter</a></p>
    </div>
    </footer>
`;
document.styleSheets[0].insertRule('.social-icons-container a { margin-right: 5px; }', 0);