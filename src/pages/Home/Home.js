import { useState } from "react";
import { ReactComponent as TwitterLogo } from "../../assets/svgs/twitter_logo.svg";
import CreateAccountButton from "../../components/CreateAccountButton/CreateAccountButton";
import CreateAccountDialogBox from "../../components/CreateAccountDialogBox/CreateAccountDialogBox";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import SigninButton from "../../components/SigninButton/SigninButton";
import { footerLinks } from "../../utils/footerLinks";

const Home = () => {
    const [showSignupDialogBox, setShowSignupDialogbox] = useState(false);

    const handleSignupDialogbox = () => {
        setShowSignupDialogbox(false);
    }


  return (
    <>
      <div className="flex flex-row items-center justify-around h-[100vh] dark:bg-black dark:text-white">
        <div className="flex justify-center items-center w-fit">
          <TwitterLogo className="h-[24rem] dark:fill-gray-200" />
        </div>
        <div className="flex flex-col items-start gap-4 border border-black w-fit">
          <h1 className="text-[5rem] text-gray-200 font-extrabold w-[100%]">Happening now</h1>
          <h2 className="text-4xl text-gray-200 font-extrabold">Join today.</h2>

          <div className="flex flex-col items-center gap-4 max-w-72 mt-4">
            <GoogleButton />
            <div className="w-full h-[1px] bg-gray-700 " />
            <span className="z-1 dark:bg-black -mt-[1.9rem] px-1">or</span>
            <CreateAccountButton onClick={()=>setShowSignupDialogbox(true)} />
            <span className="w-fit text-[0.7rem] dark:text-gray-500">
              By signing up, you agree to the{" "}
              <span className="text-blue-500">Terms of Service</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>, including{" "}
              <span className="text-blue-500">Cookie Use</span>.
            </span>
            <div className="w-full mt-8 flex flex-col gap-4">
              <h1 className="font-bold text-lg">Already have an account?</h1>
              <SigninButton />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center text-gray-500 text-[0.8rem] mx-4 pb-4">
            {
                footerLinks.map((link,index)=>{
                    return(
                    <a key={index} className="px-3 my-1">{link}</a>
                    )
                })
            }
      </div>
      <CreateAccountDialogBox visible={showSignupDialogBox} onClose={handleSignupDialogbox}/>
    </>
  );
};

export default Home;
