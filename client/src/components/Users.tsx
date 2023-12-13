import { useEffect, useState } from "react";

interface UsersData {
  _id: string;
  user: string;
}

const Users = () => {
  const [users, setUsers] = useState<UsersData[]>([]);
  useEffect(() => {
    fetch("http://localhost:5001")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="users_list">
      <h2>Users</h2>
      {users && (
        <ul>
          {users.map((user) => (
            <li className="user_list_item">{user.user}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
