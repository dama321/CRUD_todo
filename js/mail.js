// ! 27/09/2022 ====  CRUD_todo====

// Create - создание / добавление новых данных
// Read-отображение данных
// Updte = изменение (Обновлееие) сущестающих товаров
// Delete - удаление вснх выбранных данных или только выбранных

let btn = document.getElementById("btndd");
let inp = document.getElementById("inpTask");
let list = document.getElementById("task-lict");

//  Create
function CreateTask(liTask){
    if(localStorage.getItem("tasks")=== null)
    {
        localStorage.setItem("tasks", "[]")
    }
    let data = JSON.parse(localStorage.getItem("tasks"));
    
    data.push(liTask)
    console.log(data);
    localStorage.setItem("Tasks",  JSON.stringify(data));
};

// ? Навештвает события на кнопку, для отправки данных

btn.addEventListener("click", ()=>{
     // console.log(inpTask.value);
    // Trim- не учитывет первые пробелы
    if(!inpTask.value.trim() === ""){
        alert("Заполние поле!");
        return;
    }
    let obj = {task: inpTask.value};
    CreateTask(obj);
    readTask()
    inpTask.value = "";
});

// ? Read
function readTask(){
    if(localStorage.getItem("tasks")=== null)
    {
        localStorage.setItem("tasks", "[]")
    }
    let data = JSON.parse(localStorage.getItem("tasks"));
    // console.log(data);
    list.innerHTML = "";
    data.forEach((item) => {
        // console.log(item);
        let li = document.createElement("li");
        li.innerText = item.task;
        let btnDelete = document.createElement("button");
        btnDelete.innerText = "Удалить";
        li.append(btnDelete)
        btnDelete.addEventListener("click", ()=>
        {
            // console.log(index);
            deleteTask(index);
        })
        list.append(li)
    });
}

// ? Delete
function deleteTask(index){
    let data = JSON.parse(localStorage.getItem("tasks"));
    data.splicee(index, 1);
    localStorage.setItem("tasks", JSON.stringify(data));
    readTask();// удаляется в HTML + Appication обнреовременно
}

readTask()



