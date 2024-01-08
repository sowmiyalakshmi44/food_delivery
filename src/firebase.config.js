import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCD5DWqMZ3uZE03c4gvJzVP2dX7EC699NM",
    authDomain: "restaurant-7cfac.firebaseapp.com",
    databaseURL: "https://restaurant-7cfac-default-rtdb.firebaseio.com",
    projectId: "restaurant-7cfac",
    storageBucket: "restaurant-7cfac.appspot.com",
    messagingSenderId: "221959421315",
    appId: "1:221959421315:web:fc90616d52999988878ab6"
  };

  const app=getApp.length >0 ?getApp():initializeApp(firebaseConfig);
  const firestore=getFirestore(app)
  const storage=getStorage(app)

  export { app,firestore,storage};