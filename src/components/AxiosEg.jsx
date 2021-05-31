import axios from "axios";
import React, { useEffect, useState } from "react";
function AxiosEg() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
    return () => {
      //cleanup
    };
  }, []);
  return (
    <React.Fragment>
      <div className="main">
        {Users.map((user, index) => {
          return (
            <div key={user.title} className="user-item">
              {user.title}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default AxiosEg;
