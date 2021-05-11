import React, { useEffect } from "react";
import "./App.css";
import Feeds from "./components/feeds/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import SignIn from "./components/signeIn/SignIn";
import Widgets from "./components/widgets/Widgets";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logOut, login, selectUser } from "./features/userSlice";



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            photo: userAuth.photoURL,
            email: userAuth.email,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, []);
  return <div>{user ? <div className="app"><Sidebar/> <Feeds /> <Widgets/></div>  : <SignIn />}</div>;
}

export default App;
