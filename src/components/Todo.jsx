import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";
import TaskItem from "./TaskItem";
import ShowTasks from "./ShowTasks";
import ShowCompletedTasks from "./ShowCompletedTasks";

const Todo = () => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const [items, setItems] = useState([]);

    const [completed, setCompleted] = useState([]);

    const [show, setShow] = useState(0);

    const titleInputRef = useRef(null);
    const descInputRef = useRef(null);

    const handleTitle = (event) => {
        setTask({ title: event.target.value, description: task.description });
    };

    const handleDescription = (event) => {
        setTask({ title: task.title, description: event.target.value });
    };

    const handleAddItem = () => {
        if (task.title !== "") {
            setItems((prevState) => {
                return [...prevState, task];
            });

            setTask({
                title: "",
                description: "",
            });

            titleInputRef.current.focus();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if (event.target === titleInputRef.current) {
                descInputRef.current.focus();
            } else if (event.target === descInputRef.current) {
                titleInputRef.current.focus();
                handleAddItem();
            }
        }
    };

    return (
        <div className="">
            <div className="flex flex-col items-center justify-around mt-4">
                <div className="flex flex-col items-center justify-center lg:flex-row">
                    <img src={logo} alt="todo-logo" className="w-12 mr-2 shadow-sm" />
                    <h1 className="text-5xl font-bold lg:ml-2">ToDo Task</h1>
                </div>

                <div className="lg:flex lg:justify-between lg:items-center mt-12 w-full text-base mx-2 lg:mx-16">
                    <div className="lg:flex lg:justify-between lg:w-5/6">
                        <div className="lg:w-1/2 lg:mr-5 mb-3 lg:mb-0">
                            <input
                                type="text"
                                className="w-full mt-1 p-3 border rounded shadow-sm"
                                placeholder="Enter Title"
                                onChange={handleTitle}
                                onKeyPress={handleKeyPress}
                                ref={titleInputRef}
                                value={task.title}
                            />
                        </div>
                        <div className="lg:w-1/2 lg:ml-5 mb-3 lg:mb-0">
                            <input
                                type="text"
                                className="w-full mt-1 p-3 border rounded shadow-sm"
                                placeholder="Description"
                                onChange={handleDescription}
                                onKeyPress={handleKeyPress}
                                ref={descInputRef}
                                value={task.description}
                            />
                        </div>
                    </div>
                    <div className="mt-1">
                        <button
                            className="px-6 py-2 bg-blue-500 rounded shadow text-white font-bold"
                            onClick={handleAddItem}
                        >
                            <span className="font-bold text-xl">+</span> Add
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-10 text-white">
                <div
                    className={`font-bold w-16 text-center px-2 py-1 shadow-md cursor-pointer ${show === 0 ? "bg-green-600" : "bg-gray-700"
                        }`}
                    onClick={() => setShow(0)}
                >
                    To Do
                </div>
                <div
                    className={`font-bold w-28 text-center px-3 py-1 shadow-md cursor-pointer ${show === 1 ? "bg-green-600" : "bg-gray-700"
                        }`}
                    onClick={() => setShow(1)}
                >
                    Completed
                </div>
            </div>

            <div className="">
                {show === 0 ? (
                    <ShowTasks
                        items={items}
                        setItems={setItems}
                        completed={completed}
                        setCompleted={setCompleted}
                    />
                ) : (
                    <ShowCompletedTasks
                        completed={completed}
                        setCompleted={setCompleted}
                    />
                )}
            </div>
        </div>
    );
};

export default Todo;
