let buttons = document.getElementsByClassName("current-polarity");
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", openDropdown);
}
function openDropdown(obj){
    let dropdown = obj.currentTarget.nextElementSibling; 
    if (dropdown.style.display === "flex"){
        dropdown.style.display = "none";
    }
    else{
        dropdown.style.display = "flex";
    }
}

let polarities = document.getElementsByClassName("polarity");
for (let i = 0; i < polarities.length; i++){
    polarities[i].addEventListener("click", changeCurrentPolarity);
}
function changeCurrentPolarity(obj){
    let polarity = obj.currentTarget;
    let polarityImage = polarity.firstElementChild.src;
    let dropdown = polarity.parentElement;
    let currentPolarity = dropdown.previousElementSibling;
    console.log(currentPolarity.innerText);
    if (polarityImage === undefined){
        if (currentPolarity.innerText !== "--"){
            updateFormaCount(false);
        }
        currentPolarity.innerHTML = "";
        currentPolarity.appendChild(document.createElement('p'));
        currentPolarity.firstElementChild.innerHTML = "--";
    }
    else{
        if (currentPolarity.innerText === "--"){
            updateFormaCount(true);
        }
        currentPolarity.innerHTML = "";
        currentPolarity.appendChild(document.createElement('img')).src 
        = polarityImage;
    }
    dropdown.style.display = "none";
}

function updateFormaCount(add){
    let formaCount = document.getElementById("forma-count");
    let originalCount = parseInt(formaCount.innerHTML);
    formaCount.innerHTML = "";
    if (add === true){
        formaCount.innerHTML = originalCount + 1;
    }
    else{
        formaCount.innerHTML = originalCount - 1;
    }
}

function updateProgressBar(){
    let progressBar = document.getElementById("progress-filled");
    let remaining = parseInt(document.getElementById("mod-remaining").innerText);
    let percent = (60 - remaining) * 1.67;
    progressBar.style.width = `${percent}%`;
}