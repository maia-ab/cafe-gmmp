"use client";

import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex flex-col items-center bg-dark-brown h-[350px] px-16 justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <label className="flex items-center text-beige text-4xl mx-12">Subscribite a nuestro newsletter!</label>
        <div className="flex justify-center items-center">
        <input className="bg-beige px-40 py-2 rounded-2xl w-[500px]"
          type="email"
          placeholder="lorem@ipsumgmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <button className="flex items-center bg-coconut text-beige justify-center h-[50px] w-[200px] rounded-2xl text-2xl">Subscribite</button>
      </form>
    </div>
  );
}

export default Newsletter;
