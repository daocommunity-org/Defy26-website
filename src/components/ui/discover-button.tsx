import React from "react";

const Button = () => {
  return (
    <button className="relative border hover:border-primary duration-500 group cursor-pointer text-background overflow-hidden h-14 w-48 sm:w-56 rounded-md bg-primary p-2 flex justify-center items-center font-extrabold">
      <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-primary/90 delay-150 group-hover:delay-75" />
      <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-primary/80 delay-150 group-hover:delay-100" />
      <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-primary/70 delay-150 group-hover:delay-150" />
      <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-primary/60 delay-150 group-hover:delay-200" />
      <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-primary/50 delay-150 group-hover:delay-300" />
      <p className="z-10">Register Now</p>
    </button>
  );
};

export default Button;
