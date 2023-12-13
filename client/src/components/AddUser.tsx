import { useState } from "react";

const AddUser = () => {
  const [username, setUsername] = useState<string>();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetch("http://localhost:5001/user", {
      method: "POST",
      body: JSON.stringify({
        username: username,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        setUsername("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Enter a username:
        <input
          type="text"
          name="title"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </label>
      <button type="submit" className="button">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
