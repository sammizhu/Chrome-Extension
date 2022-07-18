//credits to Jaishree Bala's Youtube Tutorial Video (edited to be compatible w/ manifest version 3)
//https://www.youtube.com/watch?v=4RzPjLbFYl0&t=1433s
//https://github.com/Jaishreebala/Invert.io

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

if (document.querySelector(".button")) {
    const button = document.querySelector(".button");
    let buttonOn = false;
    function invert() {
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })
}
button.addEventListener("click", async () => {
    let tab = await getCurrentTab();

    if (!buttonOn) {
        buttonOn = true;
        chrome.scripting.executeScript({
            target: {tabId : tab.id},
            files: ['appOn.js']
        });
        }
    else{
        buttonOn = false;
        chrome.scripting.executeScript({
            target: {tabId : tab.id},
            files: ['appOff.js']
        })
    };
})
}








