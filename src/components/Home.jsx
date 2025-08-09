import ThemeButton from "./ThemeButton.jsx";

export default function Home({setScreen}) {
    const createNewProject = () => {
        setScreen(1);
    };
    return (
        <div className="flex flex-col p-4 items-center margin-center-home">
            <img className="size-20 content-center" src="/logo.png" alt="logo"/>
            <h2 className="text-2xl font-bold text-yellow-900 mt-3">No Project Selected</h2>
            <p className="text-sm font-semibold text-stone-400 mt-5">Select a project or get started with a new one</p>
            <ThemeButton design="mt-5" buttonAction={createNewProject}>Create new project</ThemeButton>
        </div>);
}