const notesContainer = document.querySelector(".container .notes-container");
const createBtn = document.querySelector(".container button");
let notes = document.querySelector(".input-box");

(function () {
    notesContainer.innerHTML = localStorage.getItem("notes"); 
})()

const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
    createInputBox();
})

let createInputBox = () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    // notesContainer.innerHTML += `<p contenteditable="true" class="input-box">
    //                                 <img src="images/delete.png" alt="" srcset="">
    //                             </p>`;
}

notesContainer.addEventListener("click", (e) => {   
    let currentNote = e.target;
    if (currentNote.tagName === "IMG") {
        currentNote.parentElement.remove(); 
        updateStorage();
    }
    else if (currentNote.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = () => {
                updateStorage();
            }
        });
    }
})