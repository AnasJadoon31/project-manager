export default function Task({handleDeleteTask, task}) {

    return (<div className="flex flex-row justify-between items-center mb-3">
        <p>{task}</p>
        <button className="text-stone-500 hover:text-red-400 cursor-pointer"
                onClick={handleDeleteTask}
        >
            Clear
        </button>
    </div>);
}