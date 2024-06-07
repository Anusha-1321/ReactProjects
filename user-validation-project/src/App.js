import React, { Fragment, useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>

    // < > -- u can't classNames or props in this tag
    // </>
    // <div className="App">

    // </div>
  );
}

export default App;
