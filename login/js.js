const user = JSON.parse(localStorage.getItem('user'))
// console.log (user)
const loginInput = document.querySelectorAll ("input")
function handleForm(event) {
    event.preventDefault();
    let OpenLogin =  { 
        login : UserLogin.value,
        password: UserPassword.value,   
    }
    
    if (!localStorage.getItem("user")){
        alert ("Ошибка! Не правильный логин или пароль")
    }
    if (OpenLogin.password === user.password && OpenLogin.login === user.login){
        window.location.href = '../TO DO/todo.html'
    }
    else {
        alert ("Ошибка! Не правильный логин или пароль")
    }
}
