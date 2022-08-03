function logOut()
{
    localStorage.removeItem("Username");
    window.location="index.html";
}



const firebaseConfig = {
    apiKey: "AIzaSyB0DtXwFpsjiRPLEVAuzAoH810C-Z4pfQk",
    authDomain: "letschat-4b42c.firebaseapp.com",
    databaseURL: "https://letschat-4b42c-default-rtdb.firebaseio.com",
    projectId: "letschat-4b42c",
    storageBucket: "letschat-4b42c.appspot.com",
    messagingSenderId: "582194368929",
    appId: "1:582194368929:web:53b61fa69ef89168303be0"
  };
  
  firebase.initializeApp(firebaseConfig);



