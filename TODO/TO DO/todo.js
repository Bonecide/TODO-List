const user =  JSON.parse(localStorage.getItem('user'))
const header = document.querySelector('.header')
header.innerText = `Ваши задачи, ${user.firstName}`

//Создание переменных

const TodoList = document.querySelector ('.todoList')
const inputBOX = document.querySelector ('.inputik input')
const addBtn = document.querySelector ('.inputik button')
const deleteAllBtn = document.querySelector('.footer button')


//Кнопка не валидна,если инпут пуст
inputBOX.onkeyup = () => {
    let UserData= inputBOX.value;
    if (UserData.trim() !=0) {
        addBtn.classList.add('active');
    }
    else {
        addBtn.classList.remove('active');
    }
}
addTasks()
//функция добавления тудушек
addBtn.onclick = () => {
    let UserData= inputBOX.value;   
    let getLocalStorage = localStorage.getItem('NewTodo');
    if (getLocalStorage == null){
        Arr = [];
    }
    else {
        Arr = JSON.parse(getLocalStorage)
    }
    Arr.push (UserData)
    localStorage.setItem ('NewTodo', JSON.stringify(Arr))
    addTasks()

}

//отображение тудушек
function addTasks() {
    let getLocalStorage = localStorage.getItem('NewTodo');
    if (getLocalStorage == null){
        Arr = [];
    }
    else {
        Arr = JSON.parse(getLocalStorage)
    }
    let li = '';
    Arr.forEach((element, index) => {
        li += ` 
        <li>${element}<span class="selects"><select class = "select"><option value="high">Срочно!</option><option value="normal">Надо выполнить</option><option value="small">Подождёт</option></select></span> <span onclick="deleteTask(${index})";><span class = "icon"><i class="fa fa-trash">
        </i><span></span></span><  /li>
        `
    });
    TodoList.innerHTML = (li)
    inputBOX.value = ""
}
//Удаление тудушек
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('NewTodo');
    Arr = JSON.parse(getLocalStorage)
    Arr.splice (index,1);
    localStorage.setItem ('NewTodo', JSON.stringify(Arr))
    addTasks()
}

 //удаление всех тудушек
deleteAllBtn.onclick = () => {
    Arr = [];
    localStorage.setItem ('NewTodo', JSON.stringify(Arr))
    addTasks()
}