// import { auth } from "../../src/firebase/firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// Initialize Firestore
// const db = getFirestore();

//  export const signUp = async (email, password, phone, companyname, firstname, lastname) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, companyname, email, password, phone, companyname,firstname,lastname);
//       console.log("User signed up");
//       const user = userCredential.user;

//        // Update Firebase User Profile (Full Name)
//     await updateProfile(user, {
//         displayName: firstname,
       
//       });

//       // Store Additional User Info in Firestore
//     await setDoc(doc(db, "users", user.uid), {
//         firstname,
//         lastname,
//         phone,
//         email,
//         uid: user.uid
//       });

//       return user;
//     } catch (error) {
//       console.error(error.message);
//       throw error;
      
//     }
//   };
  
  // export default signUp;

// export const login = async (email, password) => {
//     try {
//      const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in");
//       return userCredential.user
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

  // export default login;
     
      
