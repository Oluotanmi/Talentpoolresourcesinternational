import React,{useState} from 'react';
import { Input } from '../../Common/Input';
import { Button } from '../../Common/Button';
import { signUp}  from '../../firebase/features';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    // const [location, setLocation] = useState("");
    const [Phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    // console.log(email,password,companyname,firstname,Phone)

    const navigate = useNavigate()

    

    const handleSignup = async (e) =>{
      e.preventDefault();
      try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        await updateProfile(userCredential.user,{
          displayName: `${firstname} ${lastname}`
        });

        await addDoc(collection(db, "users"), {
          uid:
          userCredential.user.uid,
            firstname,
            lastname,
            email,
            Phone,
            companyname
        })
          setMessage("successful", )
          navigate("/employerspage")
          } catch (error) {
            console.error(error.message)
            setMessage(error.message)
          }
        }

    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <h2 className='text-center font-extrabold xl:text-[20px] m-5'>Employer Create an Account/Recruiter</h2>
          {message && <p className='text-green-500 text-center mt-5'>{message}</p>}
          <form className='xl:w-[400px] sm:w-[330px] inline-block items-center justify-center' onSubmit={handleSignup}>
            
            <div className=''>
              <Input 
                 placeholder="First Name"
                 type="text"
                 onChange={setFirstName}

              />
              <Input 
                 placeholder="Last Name/Surename"
                 type="text"
                 onChange={setLastName}

              />
              <Input 
                 placeholder="Company Name"
                 type="text"
                 onChange={setCompanyName}

              />
              <Input 
                placeholder="Email"
                type="email"
                onChange={setEmail}
              />
              <Input 
                placeholder="Phone Number"
                 type="number"
                 onChange={setPhone}
              />
          
              <Input 
                 placeholder="Password"
                 type="password"
                 onChange={setPassword}
              />
              
              <div className='mt-5 w-full'>
                <Button 
                   type="submit"
                   state="Sign Up"
                />
              </div>

              <div className='mt-5 flex justify-center text-center'>
                <p className='sm:text-sm'>Already have an account ?</p>
                <Link to="/signin">
                  <p className='ms-5 text-blue-600'>sign in</p>
                </Link>
              </div>
            </div>
             
          </form>
        </div>
      </div>
    );
};

export default SignUp;