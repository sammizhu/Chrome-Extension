//credits to Jaishree Bala's Youtube Tutorial Video
//https://www.youtube.com/watch?v=4RzPjLbFYl0&t=1433s
//https://github.com/Jaishreebala/Invert.io

(function () {
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
    })
})();