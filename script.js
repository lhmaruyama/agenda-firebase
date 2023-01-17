import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
//import {} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

const create = document.querySelector("#create")

create.onclick = function(){
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    alert('user' + user)
    })
.catch((error) => {
    const errorCode = error.code;
    alert('erro' + errorCode)

    const errorMessage = error.message;
    alert('erro' + errorCode)

    });
}

const signin = document.querySelector("#signin")

signin.onclick = function(){
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    //alert(email + " " + password)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        let login = document.querySelector(".login")
        login.style.display = "none"
        let logged = document.querySelector(".logged")
        logged.style.display = "block"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Usuário ou senha incorreto")
      });
}