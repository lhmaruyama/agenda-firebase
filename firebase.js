  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import {getFirestore, doc, setDoc, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
  

    const firebaseConfig = {
      apiKey: "AIzaSyCkWELKMp9QMKr81cGpJpQWt_kn3IM3JmY",
      authDomain: "myproject-882ea.firebaseapp.com",
      projectId: "myproject-882ea",
      storageBucket: "myproject-882ea.appspot.com",
      messagingSenderId: "664369998900",
      appId: "1:664369998900:web:009c4f7ef9fbe8c8ae6e61"
    }
    
  const app = initializeApp(firebaseConfig); //inicializar o firebase
  export const db = getFirestore(app) // inicializar o cloud firestore
  export const fire = {
                doc: doc,
                setDoc: setDoc,
                collection: collection,
                addDoc: addDoc
              }


//inserindo um data com id especifico numa collection por meio da função setDoc e doc dentro do banco de dados db
//await setDoc(doc(db, "collection", "id"), data);

//guardando dentro da variavel docId o ID gerado pelo firebase do data numa colletion por meio da função collection e addDoc
//const docId = await addDoc(collection(db, "collection"),data)

// criar uma referência de documento com um ID gerado automaticamente e usar a referência posteriormente
// const newRef = doc(collection(db, "collection"))
// await setDoc(newRef, data)


/*   export function firestore() {

    const firebaseConfig = {
        apiKey: "AIzaSyCkWELKMp9QMKr81cGpJpQWt_kn3IM3JmY",
        authDomain: "myproject-882ea.firebaseapp.com",
        projectId: "myproject-882ea",
        storageBucket: "myproject-882ea.appspot.com",
        messagingSenderId: "664369998900",
        appId: "1:664369998900:web:009c4f7ef9fbe8c8ae6e61"
      }
      
      const app = initializeApp(firebaseConfig);

} */
//no caso de criar uma função e exporta-la é necessario importar a mesma no script.js e executar chamando a função: import {firestore} from './firestore.js'  firestore()
//optei por deixar a firebaseConfig fora da função e o javascript ja reconhece
//é interessante criar um função anonima para "esconder" variáveis



