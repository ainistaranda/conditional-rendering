import React, { useState } from "react";

function Hero() {
  const [user, setUser] = useState();
  console.log({ user });
  const handleLogin = () => {
    setUser({ firstName: "Ainis", email: "ainis@gmail.com", admin: true });
  };
  const handleLogout = () => {
    setUser(null)
  }
  if (!user) {
    // if no user:
    return <button onClick={handleLogin}>Login</button>;
  }
  return (
    <>
      <h1>Hello {user.firstName}</h1>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
}

export default Hero;
