import React from "react";

import classes from "./UsersList.module.css"
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* we'll make an array of obj 'users' to store data 
                Here we want to map each user item with a jsx ele
            */}
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
