import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";


const config = {
  apiKey: "AIzaSyCU6DpRkhZ8O9OmZjkfwlBo6BgUEY0c_s8",
  authDomain: "courier-fab40.firebaseapp.com",
  projectId: "courier-fab40",
  storageBucket: "courier-fab40.appspot.com",
  messagingSenderId: "880210800342",
  appId: "1:880210800342:web:4d8f2884d996e6c4742377"
};

initializeApp(config);
export const auth = getAuth();

