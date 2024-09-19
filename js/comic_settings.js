//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.
const maxpg = 94;
// your value for maxpg
//the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page


let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const videoId = "youtubeVideo";
const gifPath = "img/comics";
const image = "EFAR"; //what you'll name all your comic pages
const imgPart = "." //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First", "Previous", "Next", "Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) { pg = maxpg; } //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Chapter 1 Cover", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2017, 9, 5), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        chapter: 1,
        imageFiles: 1, //how many image files this page is split into
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 2, //what page number it is
        title: "Chapter 1 Page 01", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2017, 9, 5), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        chapter: 1,
        imageFiles: 3, //how many image files this page is split into
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 3,
        title: "Chapter 1 Page 02",
        date: writeDate(2017, 9, 7),
        chapter: 1,
        imageFiles: 4,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 4,
        title: "Chapter 1 Page 03",
        date: writeDate(2017, 9, 7),
        chapter: 1,
        imageFiles: 3,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 5,
        title: "Chapter 1 Page 04*",
        date: writeDate(2017, 9, 20),
        chapter: 1,
        imageFiles: 4,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 6,
        title: "Chapter 1 Page 05",
        date: writeDate(2017, 9, 28),
        chapter: 1,
        imageFiles: 4,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 7,
        title: `Chapter 1 Page 06*`,
        date: writeDate(2017, 10, 5),
        chapter: 1,
        imageFiles: 4,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 8,
        title: `Chapter 1 Page 07`,
        date: writeDate(2017, 10, 13),
        chapter: 1,
        imageFiles: 5,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 9,
        title: `Chapter 1 Page 08`,
        date: writeDate(2017, 10, 22),
        chapter: 1,
        imageFiles: 4,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 10,
        title: `Chapter 1 Page 09`,
        date: writeDate(2017, 11, 5),
        chapter: 1,
        imageFiles: 5,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 11,
        title: `Chapter 1 Page 10*`,
        date: writeDate(2017, 11, 12),
        chapter: 1,
        imageFiles: 5,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 12,
        title: `Chapter 1 Page 11`,
        date: writeDate(2017, 11, 19),
        chapter: 1,
        imageFiles: 7,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 13,
        title: `Chapter 1 Page 12`,
        date: writeDate(2017, 12, 2),
        chapter: 1,
        imageFiles: 3,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 14,
        title: `Chapter 1 Page 13`,
        date: writeDate(2017, 12, 10),
        chapter: 1,
        imageFiles: 5,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 15,
        title: `Chapter 1 Page 14 [VIDEO]`,
        date: writeDate(2018, 1, 7),
        chapter: 1,
        imageFiles: 0,
        videoId: "ajP3rNKVZWw",
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 16,
        title: `Chapter 1 Page 15`,
        date: writeDate(2018, 1, 17),
        chapter: 1,
        imageFiles: 6,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    {
        pgNum: 17,
        title: `Chapter 1 Page 16`,
        date: writeDate(2018, 1, 31),
        chapter: 1,
        imageFiles: 5,
        altText: "",
        authorNotes: `
            <p>TBA</p>
            `,
    },
    //CHAPTER 2
    {
        pgNum: 18,
        title: `Chapter 2 Cover`,
        date: writeDate(2018, 2, 4),
        chapter: 2,
        imageFiles: 1,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 19,
        title: `Chapter 2 Page 17*`,
        date: writeDate(2018, 3, 1),
        chapter: 2,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 20,
        title: `Chapter 2 Page 18*`,
        date: writeDate(2018, 3, 18),
        chapter: 2,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 21,
        title: `Chapter 2 Page 19`,
        date: writeDate(2018, 4, 2),
        chapter: 2,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 22,
        title: `Chapter 2 Page 20`,
        date: writeDate(2018, 4, 23),
        chapter: 2,
        imageFiles: 5,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 23,
        title: `Chapter 2 Page 21`,
        date: writeDate(2018, 4, 30),
        chapter: 2,
        imageFiles: 6,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 24,
        title: `Chapter 2 Page 22`,
        date: writeDate(2018, 5, 14),
        chapter: 2,
        imageFiles: 5,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 25,
        title: `Chapter 2 Page 23`,
        date: writeDate(2018, 5, 28),
        chapter: 2,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 26,
        title: `Chapter 2 Page 24`,
        date: writeDate(2018, 6, 11),
        chapter: 2,
        imageFiles: 4,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 27,
        title: `Chapter 2 Page 25`,
        date: writeDate(2018, 6, 25),
        chapter: 2,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 28,
        title: `Chapter 2 Page 26`,
        date: writeDate(2018, 7, 13),
        chapter: 2,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 29,
        title: `Chapter 2 Page 27`,
        date: writeDate(2018, 8, 13),
        chapter: 2,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 30,
        title: `Chapter 2 Page 28*`,
        date: writeDate(2018, 8, 27),
        chapter: 2,
        imageFiles: 9,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 31,
        title: `Chapter 2 Page 29`,
        date: writeDate(2019, 1, 18),
        chapter: 2,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 32,
        title: `Chapter 2 Page 30`,
        date: writeDate(2019, 4, 28),
        chapter: 2,
        imageFiles: 4,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 33,
        title: `Chapter 2 Page 31`,
        date: writeDate(2019, 5, 6),
        chapter: 2,
        imageFiles: 5,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 34,
        title: `Chapter 2 Page 32*`,
        date: writeDate(2019, 5, 27),
        chapter: 2,
        imageFiles: 6,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 35,
        title: `Chapter 2 Page 33`,
        date: writeDate(2019, 6, 30),
        chapter: 2,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 36,
        title: `Chapter 2 Page 34`,
        date: writeDate(2019, 7, 18),
        chapter: 2,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    //CHAPTER 3
    {
        pgNum: 37,
        title: `Chapter 3 Cover`,
        date: writeDate(2019, 8, 19),
        chapter: 3,
        imageFiles: 2,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 38,
        title: `Chapter 3 Page 35`,
        date: writeDate(2019, 10, 20),
        chapter: 3,
        imageFiles: 4,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 39,
        title: `Chapter 3 Page 36`,
        date: writeDate(2019, 12, 11),
        chapter: 3,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 40,
        title: `Chapter 3 Page 37`,
        date: writeDate(2020, 5, 28),
        chapter: 3,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 41,
        title: `Chapter 3 Page 38`,
        date: writeDate(2020, 8, 27),
        chapter: 3,
        imageFiles: 11,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 42,
        title: `Chapter 3 Page 39`,
        date: writeDate(2020, 9, 5),
        chapter: 3,
        imageFiles: 9,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 43,
        title: `Chapter 3 Page 40*`,
        date: writeDate(2020, 9, 20),
        chapter: 3,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 44,
        title: `Chapter 3 Page 41`,
        date: writeDate(2020, 10, 11),
        chapter: 3,
        imageFiles: 11,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 45,
        title: `Chapter 3 Page 42`,
        date: writeDate(2020, 11, 7),
        chapter: 3,
        imageFiles: 6,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 46,
        title: `Chapter 3 Page 43`,
        date: writeDate(2021, 1, 2),
        chapter: 3,
        imageFiles: 9,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 47,
        title: `Chapter 3 Page 44`,
        date: writeDate(2021, 2, 7),
        chapter: 3,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 48,
        title: `Chapter 3 Page 45*`,
        date: writeDate(2021, 3, 1),
        chapter: 3,
        imageFiles: 5,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 49,
        title: `Chapter 3 Page 46a`,
        date: writeDate(2021, 5, 3),
        chapter: 3,
        imageFiles: 0,
        gifPath: "img/comics/EFAR49.gif",
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 50,
        title: `Chapter 3 Page 46b`,
        date: writeDate(2021, 5, 3),
        chapter: 3,
        imageFiles: 0,
        gifPath: "img/comics/EFAR50.gif",
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 51,
        title: `Chapter 3 Page 46c`,
        date: writeDate(2021, 5, 3),
        chapter: 3,
        imageFiles: 0,
        gifPath: "img/comics/EFAR51.gif",
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 52,
        title: `Chapter 3 Page 46d`,
        date: writeDate(2021, 5, 3),
        chapter: 3,
        imageFiles: 0,
        gifPath: "img/comics/EFAR52.gif",
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 53,
        title: `Chapter 3 Page 46e`,
        date: writeDate(2021, 5, 3),
        chapter: 3,
        imageFiles: 0,
        gifPath: "img/comics/EFAR53.gif",
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 54,
        title: `Chapter 3 Page 46f`,
        date: writeDate(2021, 5, 3),
        chapter: 3,
        imageFiles: 1,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 55,
        title: `Chapter 3 Page 47`,
        date: writeDate(2021, 5, 24),
        chapter: 3,
        imageFiles: 3,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 56,
        title: `Chapter 3 Page 48`,
        date: writeDate(2021, 6, 28),
        chapter: 3,
        imageFiles: 5,
        altText: "",
        authorNotes: `
           <p>test</p>
            `,
    },
    {
        pgNum: 57,
        title: `Chapter 3 Page 49`,
        date: writeDate(2021, 8, 1),
        chapter: 3,
        imageFiles: 4,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 58,
        title: `Chapter 3 Page 50`,
        date: writeDate(2021, 9, 19),
        chapter: 3,
        imageFiles: 6,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 59,
        title: `Chapter 3 Page 51`,
        date: writeDate(2022, 2, 6),
        chapter: 3,
        imageFiles: 3,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 60,
        title: `Chapter 3 Page 52`,
        date: writeDate(2022, 4, 2),
        chapter: 3,
        imageFiles: 4,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 61,
        title: `Chapter 3 Page 53`,
        date: writeDate(2022, 11, 3),
        chapter: 3,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 62,
        title: `Chapter 3 Page 54`,
        date: writeDate(2022, 12, 11),
        chapter: 3,
        imageFiles: 9,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 63,
        title: `Chapter 3 Page 55`,
        date: writeDate(2022, 12, 26),
        chapter: 3,
        imageFiles: 9,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 64,
        title: `Chapter 3 Page 56`,
        date: writeDate(2023, 1, 8),
        chapter: 3,
        imageFiles: 6,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 65,
        title: `Chapter 3 Page 57`,
        date: writeDate(2023, 1, 21),
        chapter: 3,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 66,
        title: `Chapter 3 Page 58`,
        date: writeDate(2023, 2, 5),
        chapter: 3,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 67,
        title: `Chapter 3 Page 59`,
        date: writeDate(2023, 2, 19),
        chapter: 3,
        imageFiles: 7,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 68,
        title: `Chapter 3 Page 60`,
        date: writeDate(2023, 3, 5),
        chapter: 3,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 69,
        title: `Chapter 3 Page 61`,
        date: writeDate(2023, 3, 19),
        chapter: 3,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 70,
        title: `Chapter 3 Page 62`,
        date: writeDate(2023, 4, 2),
        chapter: 3,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 71,
        title: `Chapter 3 Page 63`,
        date: writeDate(2023, 4, 16),
        chapter: 3,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 72,
        title: `Chapter 3 Page 64`,
        date: writeDate(2023, 4, 30),
        chapter: 3,
        imageFiles: 12,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },

    {
        pgNum: 73,
        title: `Chapter 3 Page 65`,
        date: writeDate(2023, 5, 14),
        chapter: 3,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },


    {
        pgNum: 74,
        title: `Chapter 3 Page 66`,
        date: writeDate(2023, 5, 28),
        chapter: 3,
        imageFiles: 9,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },


    {
        pgNum: 75,
        title: `Chapter 3 Page 67*`,
        date: writeDate(2023, 6, 11),
        chapter: 3,
        imageFiles: 11,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },


    {
        pgNum: 76,
        title: `Chapter 3 Page 68`,
        date: writeDate(2023, 6, 26),
        chapter: 3,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },


    {
        pgNum: 77,
        title: `Chapter 3 Page 69`,
        date: writeDate(2023, 7, 24),
        chapter: 3,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },

    {
        pgNum: 78,
        title: `Chapter 3 Page 70`,
        date: writeDate(2023, 8, 28),
        chapter: 3,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },

    {
        pgNum: 79,
        title: `Chapter 3 Page 71 [VIDEO]`,
        date: writeDate(2023, 10, 31),
        chapter: 3,
        imageFiles: 0,
        altText: "",
        videoId: "7VfXUeOK-yc",
        authorNotes: `
           <p>TBA</p>
            `,
    },

    {
        pgNum: 80,
        title: `Chapter 3 Page 72*`,
        date: writeDate(2023, 11, 13),
        chapter: 3,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },

    {
        pgNum: 81,
        title: `Chapter 3 Page 73`,
        date: writeDate(2023, 11, 27),
        chapter: 3,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },

    {
        pgNum: 82,
        title: `Chapter 3 Page 74`,
        date: writeDate(2023, 12, 18),
        chapter: 3,
        imageFiles: 11,
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 83,
        title: `Chapter 4 Cover`,
        date: writeDate(2024, 2, 4),
        chapter: 4,
        imageFiles: 1,
        altText: "",
        authorNotes: `
           <p>Let's see how the blue team fares with their own adventure, having to piece all the broken memories together.</p>
            `,
    },
    {
        pgNum: 84,
        title: `Chapter 4 Page 75`,
        date: writeDate(2024, 2, 18),
        chapter: 4,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>I wonder what's inside that <a href="diary.html">diary</a>.</p>
            `,
    },
    {
        pgNum: 85,
        title: `Chapter 4 Page 76`,
        date: writeDate(2024, 3, 4),
        chapter: 4,
        imageFiles: 11,
        altText: "",
        authorNotes: `
           <p>Trust me, it's a lot more difficult to roll on the ground while carrying a stack of books.</p>
            `,
    },
    {
        pgNum: 86,
        title: `Chapter 4 Page 77`,
        date: writeDate(2024, 4, 1),
        chapter: 4,
        imageFiles: 9,
        altText: "",
        authorNotes: `
           <p>Blue team keeps April fooling around, and eventually, they will find out.</p>
            `,
    },
    {
        pgNum: 87,
        title: `Chapter 4 Page 78*`,
        date: writeDate(2024, 4, 14),
        chapter: 4,
        imageFiles: 10,
        altText: "",
        authorNotes: `
           <p><a
           href="https://forms.gle/2sfdMa5P1t9vzKd68">SQUIGGLY: TAKE THE A.R.M?</a></p>
            `,
    },
    {
        pgNum: 88,
        title: `Chapter 4 Page 79`,
        date: writeDate(2024, 4, 29),
        chapter: 4,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>Looks like they found out.</p>`,
    },
    {
        pgNum: 89,
        title: `Chapter 4 Page 80a`,
        date: writeDate(2024, 5, 20),
        chapter: 4,
        imageFiles: 0,
        gifPath: "img/comics/EFAR89.gif",
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 90,
        title: `Chapter 4 Page 80b`,
        date: writeDate(2024, 5, 20),
        chapter: 4,
        imageFiles: 0,
        gifPath: "img/comics/EFAR90.gif",
        altText: "",
        authorNotes: `
           <p>TBA</p>
            `,
    },
    {
        pgNum: 91,
        title: `Chapter 4 Page 80c`,
        date: writeDate(2024, 5, 20),
        chapter: 4,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>It's really been a while Snake Oil had spoken the blue team, all the way back in chapter 1!</p>`,
    },
    {
        pgNum: 92,
        title: `Chapter 4 Page 81`,
        date: writeDate(2024, 6, 24),
        chapter: 4,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>What a dark episode.</p>`,
    },
    {
        pgNum: 93,
        title: `Chapter 4 Page 82`,
        date: writeDate(2024, 7, 20),
        chapter: 4,
        imageFiles: 8,
        altText: "",
        authorNotes: `
           <p>I don't know how to drive a car.</p>`,
    },
    {
        pgNum: 94,
        title: `Chapter 4 Page 83`,
        date: writeDate(2024, 9, 19),
        chapter: 4,
        imageFiles: 6,
        altText: "",
        authorNotes: `
           <p>This page stakes place after The Bucket's explosion, and before Snake Oil was contacted by Amulet in chapter 3.</p>`,
    },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
        tmp = [];
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year, month, day) { //write date of comic page
    const date = new Date(year, month - 1, day)
        .toDateString() //format date as Day Month Date Year
        .toString() //convert it to a string
        .slice(4) //remove the Day
    return date



}

