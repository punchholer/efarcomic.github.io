document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        
       <div id="social-icons">
            <a href="https://ko-fi.com/punchyholery" target="_blank"><img src="img/icons/kofi.png" alt="Ko-Fi" height="16" style="width:75%;"></a>
            <a href="https://tapas.io/series/EFAR/info" target="_blank"><img src="img/icons/tapas.png" alt="Tapastic" height="16" style="width:75%;"></a>
            <a href="https://discord.gg/vnvMKxREHN" target="_blank"><img src="img/icons/discord.png" alt="Discord" height="16" style="width:75%;"></a>
            <a href="https://twitter.com/efarcomic" target="_blank"><img src="img/icons/twitter.png" alt="Twitter" height="16" style="width:75%;"></a>
            <a href="https://www.youtube.com/channel/UCq02sauux-1yqpIly8wI7Nw" target="_blank"><img src="img/icons/youtube.png" alt="Youtube" height="16" style="width:75%;"></a>
            <a href="https://www.tumblr.com/efarcomic" target="_blank"><img src="img/icons/tumblr.png" alt="Tumblr" height="16" style="width:75%;"></a>
            <a href="https://efarcomic.com/rss.xml" target="_blank"><img src="img/icons/rss-icon.png" alt="RSS" height="16" style="width:75%;"></a>
            <!-- Add more social media icons as needed -->   
    </div>
            <p>© 2017 - 2024 Punch-Holer | Powered by <a href="https://rarebit.neocities.org">Rarebit</a> | This website uses <a href="https://www.goatcounter.com/">GoatCounter</a></p>
    </div>
    </footer>
`;
document.styleSheets[0].insertRule('.social-icons-container a { margin-right: 5px; }', 0);