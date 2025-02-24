import React,{useState} from "react";
import { Input } from "../../Common/Input";
import { Button } from "../../Common/Button";
import {login} from "../../firebase/features";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";


 const SignIn = ( ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        // Sign in the user with email and password
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
  
        // User is logged in
        console.log("User logged in successfully:", userCredential.user);
        navigate("/employerspage")
        setMessage(""); // Clear any previous errors
      } catch (error) {
        console.error("Error logging in:", error.message);
        setMessage("Invalid email or password. Please try again.");
      }
    };

    return (
        <div className="text-center justify-center">
            <p className="font-bold xl:text-[30px]">Sign In</p>

            {message && <p className='text-green-500 text-center mt-5'>{message}</p>}
            <div>
            <form className="sm:w-[280px] sm:m-5 inline-block items-center justify-center" onSubmit={handleLogin}>
            
                <Input 
                    type="email"
                    placeholder="Email"
                    onChange={setEmail}
                />
                <Input 
                    type="password"
                    placeholder="Password"
                    onChange={setPassword}
                />
                <div
                  className="w-full sm:p-5 justify-center"
                >
                  <Button              
                      // type="submit"
                      state="login"
                  />
               </div>
            </form>
          </div>
            <div className='mt-5 flex justify-center text-center'>
                <p className='sm:text-sm'>Dont have an account ?</p>
                    <Link to="/signup">
                          <p className='ms-5 text-blue-600'>sign up</p>
                    </Link>
            </div> 

        </div>
    )
}

export default SignIn;