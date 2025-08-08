export default function Home({setScreen}) {
    const createNewProject = () => {
        setScreen(1);
    };
    return (
        <div className="flex flex-col p-4 items-center margin-center-home">
            <img className="size-20 content-center" src="/logo.png" alt="logo"/>
            <h2 className="text-2xl font-bold text-yellow-900 mt-3">No Project Selected</h2>
            <p className="text-sm font-semibold text-stone-400 mt-5">Select a project or get started with a new one</p>
            <button className="mt-10 bg-stone-700 w-48 p-2 rounded-2xl
        hover:bg-stone-500 text-stone-300 cursor-pointer"
            onClick={createNewProject}>
                Create New Project
            </button>
        </div>);
}