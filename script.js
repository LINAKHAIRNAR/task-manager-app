let inputValue=document.getElementById("task-input");
let clickBtn=document.querySelector(".add-btn");
let taskElem=document.querySelector(".taskList");

const addTask =()=>
{
  if(inputValue.value.trim()===""){
    return;
  }
  let div=document.createElement("div");
  div.className="task";
  
  let check=document.createElement("input");
  check.className="check";
  
  let pElem=document.createElement("p");
  
  let rBtn=document.createElement("button");
  rBtn.className="remove-btn";
  
  check.type="checkbox";
  pElem.textContent=inputValue.value;
  rBtn.textContent="Remove";
  
  div.append(check);
  div.append(pElem);
  div.append(rBtn);
  
  taskElem.append(div);
  inputValue.value="";
  
}

clickBtn.addEventListener("click",()=>
{
  addTask()
});


const removeTask=(event)=>{
  if(event.target.tagName==="BUTTON")
  event.target.parentElement.remove();
}


taskElem.addEventListener("click",(event)=>
{
  removeTask(event)
});
