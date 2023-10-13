const task =document.querySelector('#userInput');
const taskContainer =document.querySelector('#listContainer');

const addTask =document.querySelector('#addTask');
const deleteAll =document.querySelector('#del');




addTask.addEventListener('click',()=>{
    if(task.value==""){
        alert("Please enter a task")
    }else{
    const list = document.createElement('li');
    
    list.innerHTML=task.value;
    if(task.innerHTML.length===36){
        alert("Length too Long");
        task.value="";
    }
    taskContainer.appendChild(list)
    let span = document.createElement('span');
    span.innerHTML="\u00d7";
    list.appendChild(span);
    task.value="";
    saveData();
}
});

taskContainer.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        
             saveData();


    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
})

deleteAll.addEventListener("click", (e)=>{
    taskContainer.innerHTML="";
    localStorage.removeItem("data")
    
}
)



function saveData(){
    localStorage.setItem("data",taskContainer.innerHTML)
}

function showData(){
    taskContainer.innerHTML=localStorage.getItem("data");
}



showData();