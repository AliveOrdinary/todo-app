"use client";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

import db from "@/FirebaseConfig";

const InputField = () => {
  const [todo, setTodo] = useState("");

  const collectionRef = collection(db, "todos");

  return (
    <div className="flex w-10/12 sm:w-2/4 mx-auto mt-5 md:mt-5 lg:mt-8 xl:mt-10  rounded-md  bg-VLGrayLT dark:bg-VDDesBlueDT dark:text-LGrayBlueDT  text-VDBlueDT items-center p-2 md:p-2 lg:p-3 xl:p-5 gap-4 ">
      <span className="w-4 h-4 lg:w-6 lg:h-6 rounded-full border-LGrayBlueDT dark:border-DGrayBlueDT border-2 relative"></span>
      <input
        className="outline-none w-full bg-transparent bg-opacity-100 bg-VLGrayLT dark:bg-VDDesBlueDT dark:text-LGrayBlueDT  text-VDBlueDT text-lg"
        placeholder="Create new todo..."
        type="text"
        name="todo"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addDoc(collectionRef, {
              todo: todo,
              completed: false,
              timestamp: Date.now(),
            });
            setTodo("");
          }
        }}
      />
    </div>
  );
};

export default InputField;
