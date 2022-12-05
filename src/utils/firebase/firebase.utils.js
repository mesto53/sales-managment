import { initializeApp} from 'firebase/app';
import {
   getFirestore,
   doc,
   setDoc,
   getDoc,
   collection,
   writeBatch,
   query,
   getDocs,
} from 'firebase/firestore'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyAIFUG0joSi3fgnWKueaG73fUriYKRHQbk",
    authDomain: "crown-db-6648b.firebaseapp.com",
    projectId: "crown-db-6648b",
    storageBucket: "crown-db-6648b.appspot.com",
    messagingSenderId: "1002422765705",
    appId: "1:1002422765705:web:4632cdc76bd979b25e1e58"
  };
initializeApp(firebaseConfig);



const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt : 'select_account'
  });



export const auth = getAuth();


export const signInWithGooglePopup = ()=>signInWithPopup(auth,googleprovider);

export const db = getFirestore();


export const createUseDocFromAuth = async (userAuth,add={}) =>{
    const userdoc = doc(db,'users',userAuth.uid);
    const usersnapshot = await getDoc(userdoc);
    if(!usersnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdate = new Date();
        try{
            await setDoc(userdoc,{
                displayName,
                 email,
                 createdate,
                 ...add
            });
        }catch(error){
             console.log('we have an error',error);
        }
    }
    return userdoc;
};



export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
   return await createUserWithEmailAndPassword(auth,email,password);
}



export const addcollectionanddocument = async (collectionKey,objectsToAdd)=>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object)=> {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });
    await batch.commit();
    console.log("done");
}


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };




export const SignUserInWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

export const SignOutUser = ()=>signOut(auth);

export const onAuthStateChangedListener =(callback)=>{
    return onAuthStateChanged(auth,callback);
}


 