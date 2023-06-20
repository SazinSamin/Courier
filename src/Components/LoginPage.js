import { SiGoogle, SiFacebook } from "react-icons/si";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebaseConfig';

const LoginPage = () => {

  const handleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {

      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };



  return (
    <div id="login-page">
      <div id="login-card">
        <h1>Welcome to Courier</h1>
        <div className="login-button google" onClick={handleSignIn}>
          <SiGoogle />
          Sign in with Google
        </div>
        <br></br>
        <div className="login-button facebook">
          <SiFacebook />
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
