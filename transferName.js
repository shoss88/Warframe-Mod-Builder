/**
 * saveWarframeInfo:
 * Adds a click event listener to every warframe box
 * @return {void} Nothing
 */
function saveWarframeInfo(){
    let boxes = document.getElementsByClassName("warframe-box");
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("click", saveName)
    }
}
saveWarframeInfo();
/**
 * saveName:
 * Save the name and the element that was clicked to local storage.
 * @param {event} obj - the event object
 * @return {void} Nothing
 */
function saveName(obj){
    let box = obj.currentTarget;
    let text = box.firstElementChild.lastElementChild.innerText;
    let pic = box.firstElementChild.firstElementChild.getAttribute("src");
    console.log(pic);
    localStorage.setItem("warframe", text);
    localStorage.setItem("warframe-pic", pic);
}