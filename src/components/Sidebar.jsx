import ProjectButton from "./ProjectButton.jsx";
import ThemeButton from "./ThemeButton.jsx";

export default function Sidebar({selectedProject, setScreen, projects, handleSelectProject, setTaskValue}) {
    const handleAddProject = () => {
        setScreen(1);
    };

    return (<div className="basis-1/4
     bg-stone-900 text-amber-50 w-100 max-h-screen min-h-screen p-4 rounded-e-2xl">
        <h1 className="flex justify-center text-2xl font-bold underline underline-offset-8">Your Projects</h1>
        <ThemeButton design="mt-10 mb-5" buttonAction={handleAddProject}>+ Add Project</ThemeButton>

        <br className="mt-2"/>
        <div id="projects">
            {projects.length !== 0 ? projects.map((project, index) => (<ProjectButton
                key={index}
                handleSelectProject={handleSelectProject}
                index={index}
                setScreen={setScreen}
                selectedProject={selectedProject}
                projectName={project.title}
                setTaskValue={setTaskValue}
            />)) : null}
        </div>
    </div>);
}