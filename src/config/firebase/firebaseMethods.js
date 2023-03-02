import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue  } from "firebase/database";
import app from './firebaseInitialization'

const auth = getAuth(app);
const db = getDatabase(app);

const signUpUser = (obj) =>{
        const{email,password} = obj;
        return createUserWithEmailAndPassword(auth, email, password)
}

const SignInUser = (obj) =>{
        const{email, password} = obj
        return signInWithEmailAndPassword(auth, email, password)
}


const writeOperation = (nodeName,id,obj) =>{
        let referecne =  ref(db,`${nodeName}/,${id}`)
        return set(referecne,obj);
}


const readOperation  =(nodeName) =>{
        const arr = []
        const dbRef = ref(db,nodeName);
        onValue(dbRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                  const childKey = childSnapshot.key;
                  const childData = childSnapshot.val();
                  arr.push({"key":childKey,"data":childData})
        
                });
        }, {
                onlyOnce: false
        });
        return arr;
}

const currentUser = () =>{
        return auth.currentUser
}

export default {
    signUpUser,
    SignInUser,
    writeOperation,
    readOperation,
    currentUser
}