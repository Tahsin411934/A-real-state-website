import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)






console.log(user)
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const createUser=(email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
       
    }

    const signinUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin= ()=>{
        setLoading(true);
       return signInWithPopup(auth,googleProvider)
    }

    const githubLogin=()=>{
        setLoading(true);
       return signInWithPopup(auth,GithubProvider)
    }
    const logOut= () =>{
        setLoading(false);
       return signOut(auth)
    }








useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(user)=>{
 
       setUser(user)
       setLoading(false);
     
    })
return ()=>{
    unsubscribe();
}

},[])






 const values = {loading,user,setLoading,createUser,signinUser,googleLogin,githubLogin,logOut}
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;