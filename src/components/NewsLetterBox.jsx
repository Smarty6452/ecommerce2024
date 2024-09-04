import React, { useState } from "react";

const NewsLetterBox = () => {
  const [email, setEmail] = useState();
  const onSubmitHandler = (event) => {
    event.preventDefault();
   
    console.log(email);
  };

  const onChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  console.log(email);

  return (
    <div className="text-center ">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
        possimus!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 "
      >
        <input
          className="w-full sm:flex-1 required: outline-none"
          type="email"
          value={email}
          onChange={onChangeHandler}
          placeholder="Enter your email"
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
