import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count2 = {count2}</h1>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>Contact: @chiragsankhla</h4>
    </div>
  );
};

export default User;
