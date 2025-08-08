import Task from "./Task.jsx";

export default function Content({project, setProjects, currentIndex, taskValue, setTaskValue, handleClose}) {


    function handleDeleteProject() {
        handleClose();
    }

    function handleAddTask() {
        const task = taskValue.trim();
        setTaskValue("");
        if (!task) return;

        setProjects(prevProjects => {
            const updatedProjects = [...prevProjects];
            if (!updatedProjects[currentIndex].tasks) {
                updatedProjects[currentIndex].tasks = [];
            }
            updatedProjects[currentIndex].tasks.push(task);
            return updatedProjects;
        });
    }

    function handleDeleteTask(index) {
        setProjects(prevState => {
            const updatedProjects = [...prevState];
            updatedProjects[currentIndex].tasks.splice(index, 1);
            return updatedProjects;
        });
    }

    return (<div className="flex flex-col ml-15 p-5 content-div w-200 margin-center">
        <div className="flex flex-row justify-between mb-1.5">
            <h2 className="text-4xl font-semibold text-yellow-900">{project.title}</h2>
            <button
                className="text-yellow-700 hover:text-red-400 cursor-pointer"
                onClick={() => handleDeleteProject(currentIndex)}
            >
                Delete
            </button>
        </div>
        <p className="text-stone-400 mb-5">{project.dueDate}</p>
        <p className="mb-7"></p>
        <p>{project.description}</p>
        <hr className="my-2 border-t text-yellow-900"/>
        <h3 className="text-2xl font-semibold text-yellow-900">Tasks</h3>
        <div className="flex flex-row mb-1.5 items-center mt-4">
            <input className="w-72 p-2 border-2 border-yellow-900 rounded-2xl" type="text"
                   placeholder="Task Name..."
                   value={taskValue}
                   onChange={(event) => setTaskValue(event.target.value)}
                   key={currentIndex}
            />
            <button
                className="text-yellow-700 hover:text-yellow-900 cursor-pointer ml-10 content-center"
                onClick={handleAddTask}
            >
                Add Task
            </button>
        </div>
        {project.tasks.length === 0 ? <p className="mt-10">No Tasks Yet...</p> :
            <div className="bg-stone-200 mt-4 rounded-xl p-5">
                {project.tasks.map((task, index) => (<Task
                    key={index}
                    index={index}
                    task={task}
                    handleDeleteTask={() => handleDeleteTask(index)}/>))}
            </div>}
    </div>)
}