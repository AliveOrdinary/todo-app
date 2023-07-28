"use client";
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "@/FirebaseConfig";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState("");

  const getTodos = async () => {
    // get data from firebase onSnapshot
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(todosData);
    });
  };

  // update todo list when data changes

  useEffect(() => {
    getActiveTodos();
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = async (id) => {
    const todoRef = doc(db, "todos", id);
    await updateDoc(todoRef, {
      completed: true,
    });
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(newTodos);
  };

  const getCompletedTodos = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const completedTodos = querySnapshot.docs
      .filter((doc) => doc.data().completed === true)
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    setTodos(completedTodos);
  };

  const getActiveTodos = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const activeTodos = querySnapshot.docs
      .filter((doc) => doc.data().completed === false)
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    setTodos(activeTodos);
    setActive(activeTodos.length);
  };

  return (
    <div className="flex flex-col w-10/12 sm:w-2/4 h-1/4 mt-5 md:mt-5 lg:mt-8 xl:mt-10  rounded-md  bg-VLGrayLT dark:bg-VDDesBlueDT dark:text-LGrayBlueDT  text-VDBlueDT items-center md:py-2 lg:py-3 xl:py-5 gap-4 shadow-xl shadow-LGrayBlueLT dark:shadow-VDBlueDT">
      {todos.map((todo) => (
        <div
          className="flex gap-8 w-full border-b border-b-VLGrayBlueLT dark:border-b-VDGrayBlueLT px-4 py-2 relative"
          key={todo.id}
        >
          <span
            onClick={() => updateTodo(todo.id)}
            className={`flex w-4 h-4 lg:w-6 lg:h-6 rounded-full  border  items-center justify-center cursor-pointer ${
              todo.completed
                ? "bg-BrightBlue border-none"
                : "border-LGrayBlueDT"
            } }`}
          >
            <svg
              className={`${todo.completed ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
            >
              <path
                fill="none"
                stroke="#FFF"
                strokwidth="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
          </span>

          <h1 className="">{todo.todo}</h1>
          <button
            className="absolute right-6"
            onClick={() => deleteTodo(todo.id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </button>
        </div>
      ))}
      <div className="flex w-full justify-between px-3 py-2 text-xs sm:text-sm lg:text-lg">
        <p>{active} items left</p>
        <div className="flex gap-2">
          <h1 className="cursor-pointer" onClick={() => getTodos()}>
            All
          </h1>
          <h1 className="cursor-pointer" onClick={() => getCompletedTodos()}>
            Completed
          </h1>
          <h1 className="cursor-pointer" onClick={() => getActiveTodos()}>
            Active
          </h1>
        </div>
        <p className="cursor-pointer " onClick={() => deleteCompletedTodos()}>
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default TodoList;
