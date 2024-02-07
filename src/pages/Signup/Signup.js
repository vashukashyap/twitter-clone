import { useState } from "react";
import { ReactComponent as TwitterLogo } from "../../assets/svgs/twitter_logo.svg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "../../firebase.init"; 

const Signup = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(username, fullName, email, password);
    createUserWithEmailAndPassword(email, password);
    console.log(error);
  }

  return (
    <>
      <div>
        <TwitterLogo />
        <div>
          <form>
            <input type="text" placeholder="@username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)}/>
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
