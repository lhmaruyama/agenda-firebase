import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
//import {} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

export const auth = getAuth()
export const onAuth = onAuthStateChanged

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
    //let email = document.querySelector(".email").value
    const email = "admin@admin.com"
    const password = "@admin"
    //let password = document.querySelector(".password").value
    //alert(email + " " + password)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid //ID do usuário
        //let login = document.querySelector(".login")
        //login.style.display = "none"
        //let logged = document.querySelector(".logged")
        //logged.style.display = "block"
        //alert(uid)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Usuário ou senha incorreto")
      });
}


/* export function userId(){
  //alert("chamou a função")
  const auth = getAuth();
  
  onAuthStateChanged(auth,((userActive)=>{
    userActive.uid //id do usuário

}))} */

/* function userId(){
  onAuthStateChanged(getAuth(),((userActive)=>{
  if(userActive){
    const uid = userActive.uid //id do usuário
    return alert(uid)
  }
}))} */

export function teste(){
  let blabla = 1 + 2
  return blabla
}
/*     const variavel = teste()
alert(variavel) */




const logout = document.querySelector("#logout")
logout.onclick = function(){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}