import React from "react";

export default function Button(props) {
  return (
    <button
      {...props}
      className="group relative w-full flex justify-center items-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-700 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {props.children}
    </button>
  );
}
