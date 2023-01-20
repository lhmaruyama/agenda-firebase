import {db, fire} from "./firebase.js"
import { userId , teste} from "./auth.js"

let add = document.querySelector("#add")
add.onclick = await function(){
/*     let dateTime = document.querySelector(".datetime").value
    let notes = document.querySelector(".notes").value
    if(dateTime == "" || notes == "" ){
        alert("Insira uma tarefa e uma data corretamente")
    }else{
        let dateNow = new Date().getTime()
        let dateTask = new Date(dateTime).getTime()
        if(dateTask >= dateNow){
            //alert(" A data informada é posterior a data atual")

            //fire.setDoc(fire.doc(db,"coleção","ID:000"),{dateTime,notes})

            //const docRef = fire.addDoc(fire.collection(db,"coleção"),{dateTime,notes})
            //alert(" Id do documento: " + docRef.id)
            
            //userId

            const newId = fire.doc(fire.collection(db,"Notes"))
            fire.setDoc(newId,{dateTime,notes,uid})

            let list = document.querySelector(".list")
            let li = document.createElement("li")
            li.textContent = notes + dateTime + uid
            list.appendChild(li)
            let form = document.querySelector(".form")
            form.reset()
        }else{
            alert("A data informada é anterior a data atual")
        }
    } */

        onAuthStateChanged(getAuth(),((userActive)=>{
        if(userActive){
          const uid = userActive.uid //id do usuário
          return uid
        }
        alert(uid)
      }))

}

