import {db, fire} from "./firebase.js"

let add = document.querySelector("#add")
add.onclick = await function(){
    let dateTime = document.querySelector(".datetime").value
    let notes = document.querySelector(".notes").value
    //alert(dateTime + " " + notes)
    //alert(fire.doc)
    if(dateTime == "" || notes == "" ){
        //alert("Insira uma tarefa e uma data corretamente")
    }else{
        let dateNow = new Date().getTime()
        let dateTask = new Date(dateTime).getTime()
        if(dateTask >= dateNow){
            //alert(" A data informada é posterior a data atual")
            fire.setDoc(fire.doc(db,"coleção","ID:000"),{dateTime,notes})
            let list = document.querySelector(".list")
            let li = document.createElement("li")
            li.textContent = notes + dateTime
            list.appendChild(li)
            let form = document.querySelector(".form")
            form.reset()
        }else{
            //alert("A data informada é anterior a data atual")
        }
    }
}

