/* Targeting some html elements using DOM technology  */ 

const addButton = document.querySelector(".add");
const box = document.querySelector(".content");
const input = document.querySelector(".input");

/* Declaring some variable now */

let text = "";


/* Adding functionality to html elements */

input.addEventListener("change",()=>{
    text = input.value+ "";
});

addButton.addEventListener("click",()=>{

    if(input.value === "" || input.value === " "){
        alert("Please write something!");
    }else{
        let div = document.createElement("li");

        div.innerText = text;
    
        div.style.cursor = "pointer";
    
        div.setAttribute("title","Click to delete it!");
        
        box.appendChild(div);
    
        div.onclick = () =>{
            div.remove();
        }
    
        input.value = "";
    }
   
});

