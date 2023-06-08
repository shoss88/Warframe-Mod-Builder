function saveWarframeInfo(){
    let boxes = document.getElementsByClassName("warframe-box");
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("click", saveName)
    }
}
saveWarframeInfo();

function saveName(obj){
    let box = obj.currentTarget;
    let text = box.firstElementChild.lastElementChild.innerText;
    let pic = box.firstElementChild.firstElementChild.getAttribute("src");
    console.log(pic);
    localStorage.setItem("warframe", text);
    localStorage.setItem("warframe-pic", pic);
}