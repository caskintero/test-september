import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Task } from "./components/Tasks.jsx";
import axios from "axios";
import { AddTask } from "./components/AddTask.jsx";
export default function MainApp() {
    const [tasks, setTasks] = useState([]);
    const getTasks = async () => {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/tasks`
        );

        setTasks(response.data);
    };
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="container h-100 w-100 mt-5">
            <div className="d-flex justify-content-between">
                <h3>Tasks Panel</h3>

                <AddTask getTasks={getTasks} />
            </div>
            <div className="my-5">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {tasks.length > 0 &&
                        tasks.map((val) => (
                            <Task data={val} getTasks={getTasks} />
                        ))}
                </div>
            </div>
        </div>
    );
}
if (document.getElementById("app")) {
    createRoot(document.getElementById("app")).render(<MainApp />);
}
