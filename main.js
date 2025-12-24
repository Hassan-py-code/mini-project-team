

let AddSubmit=document.querySelector(".add");
let tasks=document.querySelector(".tasks");
let input=document.querySelector(".input");



AddSubmit.addEventListener("click",()=>{
      if(input.value){
      creatTaskElement(input.value);
      input.value="";
    }else{
       window.alert("please Add Tasks ");
    };
});


// create function to add task
function creatTaskElement(task){

    //  create div
     let listItem=document.createElement("div");
     listItem.classList.add("your");

   //   stylig list item
    listItem.style.padding="0.3rem 40px";
    listItem.style.backgroundColor="white";
    listItem.style.marginTop="10px";
   
   
     
     listItem.innerHTML=`${task}`;
    //  create button to delete any task
     let delereButton=document.createElement("button");
     delereButton.textContent="delete";
     delereButton.classList="deleteTask";

   //   styling button
    delereButton.style.background='burlywood';
    delereButton.style.padding="0.3rem 20px";
    delereButton.style.border="none";
    delereButton.style.border="1px solid black";
    delereButton.style.cursor="pointer";
     
     
     tasks.appendChild(listItem);
     listItem.appendChild(delereButton);
    
     
     delereButton.addEventListener('click', function (){
         tasks.removeChild(listItem);
     });
};

