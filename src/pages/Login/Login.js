import { useState } from "react";
import { ReactComponent as TwitterLogo } from "../../assets/svgs/twitter_logo.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "../../firebase.init"; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSignup = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(error);
    if(user){
        console.log(user)
    }
  }

  return (
    <>
      <div>
        <TwitterLogo />
        <div>
          <form>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

            <button type="Submit" value={"SignUp"} onClick={handleSignup}>
                SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
