
console.dir(UserLogin)
function handleForm(event) {
    event.preventDefault();
    let user =  { 
        login : UserLogin.value,
        password: UserPassword.value,
        firstName : UserFirstName.value,
        lastName: UserLastName.value,     
    }
   
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!localStorage.getItem("user")) {
        localStorage.setItem('user', JSON.stringify(user))
        user = {}
        window.location.href = '../TO DO/todo.html'
    }   
    else {
        alert ("Вы уже Зарегестрировались,Перейдите во вкладку входа")
    }   
    
    // window.location.href = '../login/login.html'
    //  console.log( user );
} 
