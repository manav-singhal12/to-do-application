

function addtask(){
    
    const tasklist=document.querySelector(".addtask");
    const list=document.querySelector(".list");
    if (tasklist.value.trim()===""){
        alert("Please enter a valid task");
        return;
    }
    const tasklistv=tasklist.value;
    const listitem=document.createElement("li");
    listitem.classList.add("listitem")
    listitem.textContent=tasklistv;
    tasklist.value = "";

    const deletebtn=document.createElement("button");
    deletebtn.classList.add("delete")
    deletebtn.textContent="❌";
    deletebtn.onclick=function(){
        list.removeChild(listitem);
        list.removeChild(deletebtn)
    }
    list.appendChild(listitem);
    listitem.appendChild(deletebtn);
}