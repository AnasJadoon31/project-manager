import Task from "./Task.jsx";

export default function Content({ project, setProjects, currentIndex, taskValue, setTaskValue, handleClose }) {

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

    return (
        <div className="flex flex-col p-5 max-w-4xl w-full mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between mb-3 gap-2">
                <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-900">{project.title}</h2>
                <button
                    className="text-yellow-700 hover:text-red-400 cursor-pointer self-start sm:self-center"
                    onClick={() => handleDeleteProject(currentIndex)}
                >
                    Delete
                </button>
            </div>

            <p className="text-stone-400 mb-5">{project.dueDate}</p>
            <p className="mb-7"></p>
            <p>{project.description}</p>

            <hr className="my-4 border-t border-yellow-900" />

            {/* Tasks Header */}
            <h3 className="text-2xl font-semibold text-yellow-900">Tasks</h3>

            {/* Add Task Input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 gap-3">
                <input
                    className="flex-1 p-2 border-2 border-yellow-900 rounded-2xl w-full sm:w-72"
                    type="text"
                    placeholder="Task Name..."
                    value={taskValue}
                    onChange={(event) => setTaskValue(event.target.value)}
                    key={currentIndex}
                />
                <button
                    className="text-yellow-700 hover:text-yellow-900 cursor-pointer"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>

            {/* Tasks List */}
            {project.tasks.length === 0 ? (
                <p className="mt-10 text-center sm:text-left">No Tasks Yet...</p>
            ) : (
                <div className="bg-stone-200 mt-4 rounded-xl p-5">
                    {project.tasks.map((task, index) => (
                        <Task
                            key={index}
                            index={index}
                            task={task}
                            handleDeleteTask={() => handleDeleteTask(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
