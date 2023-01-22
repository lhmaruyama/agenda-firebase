import {db, fire} from "./firebase.js"
import {auth, onAuth} from "./auth.js"

onAuth(auth,((userActive)=>{
    if(userActive){
        console.log("onAuth executado")
        const uid = userActive.uid //id do usuário
        const q = fire.query(fire.collection(db, "Notes"),fire.where("uid", "==", uid))

        fire.onSnapshot(q,(datadb)=>{
            //console.log(data.docs)
            let list = document.querySelector(".list")
            while(list.hasChildNodes()){
                list.removeChild(list.firstChild)
            }
            console.log("onSnapshot executado")
            let tasks = datadb.docs
            //Colocando a lista de tarefas em ordem
            tasks = tasks.sort(function(a, b){
                console.log("tasks.sort executado")
                if(a.data().dateTime < b.data().dateTime){
                    return -1
                }else{
                    return +1
                }
            })
            //console.log(tasks)
            
            //var docId = datadb.id
            //const newId = fire.doc(fire.collection(db,"Notes"))
            //console.log(newId.id)

            tasks.map((value)=>{

                console.log("tasks.map executado")
                let list = document.querySelector(".list")
                let box = document.createElement("ul")
                box.className = "box"
                
                box.innerHTML = `<li class="headerBox"><time>${value.data().dateTime}</time><button class="delete" docId="${value.id}">X</button></li> <li class="bodyBox">${value.data().notes}</li> <hr></hr>`

                list.appendChild(box)
                
                //console.log(value.data().notes)

            })
            
            var del = document.querySelectorAll(".delete")
            del.forEach(element => {
                console.log("del.forEach executado ")
                element.addEventListener("click", function(){
                    let docId = element.getAttribute("docId")
                    //alert(docId)
                    fire.deleteDoc(fire.doc(db,"Notes",docId))
                    console.log("del clicado")
/*                     let list = document.querySelector(".list")
                    while(list.hasChildNodes()){
                        list.removeChild(list.firstChild)
                    } */

                })
            });

            let add = document.querySelector("#add")
            add.onclick = function(){
                let dateTime = document.querySelector(".datetime").value
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
                        
/*                         let list = document.querySelector(".list")
                        while(list.hasChildNodes()){
                            list.removeChild(list.firstChild)
                        } */
/* 
                        onAuth(auth,((userActive)=>{
                            if(userActive){
                                const uid = userActive.uid //id do usuário
                                //alert(uid)
                            }})) */
                            
                        const newId = fire.doc(fire.collection(db,"Notes"))
                        fire.setDoc(newId,{dateTime,notes,uid})
                        let form = document.querySelector(".form")
                        form.reset()
            
                    }else{
                        alert("A data informada é anterior a data atual")
                    }
                }
            }
        })
}}))




