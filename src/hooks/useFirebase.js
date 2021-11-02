import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import initializeAuthentication from "../components/Firebase/firebase.initialize";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const gitHugProvider = new GithubAuthProvider();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   //console.log(result.user);
    //   setUser(result.user);
    // })
    // .catch((err) => {
    //   //console.log(err.message);
    //   setError(err.message);
    // });
  };

  const gitHubSignIn = () => {
    signInWithPopup(auth, gitHugProvider)
      .then((result) => {
        //console.log(result.user);

        setUser(result.user);
      })
      .catch((err) => {
        //console.log(err.message);
        setError(err.message);
      });
  };

  const userRegistration = (userEmail,userPassword) => {

    
    return createUserWithEmailAndPassword(auth, userEmail, userPassword)
      // .then((userCredential) => {
      //   const newUser = userCredential.user;
      //   //return newUser;
      //   setError("");
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   setError(errorMessage);
      //   console.error(errorMessage);
      // });
  };

  const userLogin = (userEmail,userPassword) => {
   return signInWithEmailAndPassword(auth, userEmail, userPassword)
      // .then((userCredential) => {
      //   // Signed in
      //   //const user = userCredential.user;
      //   setUser(userCredential.user);
      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   setError(errorMessage);
      //   console.error(errorMessage);
      // });
  };

  const profileUpdate=(name)=>{
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      setError("");
    }).catch((err) => {
      setError(err.message);
    });
  }



  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    googleSignin,
    gitHubSignIn,
    userRegistration,
    userLogin,
    logOut,
    user,
    error,
    setError,   
    setUser,
    profileUpdate,
  };
};

export default useFirebase;
