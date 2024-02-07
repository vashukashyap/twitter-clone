import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";





const GoogleButton = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignup = () => {
        signInWithGoogle();
    }


  return (
    <>
        <button
        onClick={handleGoogleSignup} 
        className="w-full px-16 py-2 border flex items-center justify-center gap-2  rounded-full dark:text-gray-700 text-sm dark:bg-white">
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Sign up with Google</span>
        </button>
    </>
  );
};

export default GoogleButton;
