const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");




function addTask(){

    if(inputBox.value ==" "){
        alert("You must write Something!");

    }else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    

    inputBox.value=' ';

    saveDate();


}


listContainer.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }

    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }



});



function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}

showTask();