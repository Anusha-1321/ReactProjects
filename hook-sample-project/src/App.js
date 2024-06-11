// , { useState, useEffect }
import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // //useEffect'll execute for the 1st time when the app component is called ,
  // //then it runs only if there r any dependency changes
  // //here we don't have any dependencies so it'll run only once, during the start of application
  // //Thus it'll solve our reloadd problem[loggedIn state disapearing when page reloads]
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation == "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1"); //localStorage => global var
  //   //using localStorage we can store data into the browser
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);

  return (

      // <AuthContext.Provider value={{
      //   isLoggedIn: isLoggedIn,
      //   onLogout: logoutHandler
      // }}>
      //   {/* isAuthenticated={isLoggedIn} */}
      //   <MainHeader  onLogout={logoutHandler} />
      //   <main>
      //     {!isLoggedIn && <Login onLogin={loginHandler} />}
      //     {isLoggedIn && <Home onLogout={logoutHandler} />}
      //   </main>
      // </AuthContext.Provider>

      <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>

  );
}

export default App;
