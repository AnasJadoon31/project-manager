export default function ProjectButton({
                                          projectName,
                                          setScreen,
                                          handleSelectProject,
                                          index,
                                          selectedProject,
                                          setTaskValue
                                      }) {
    return (<button
        className={`flex mt-2 self-start w-full p-1 cursor-pointer
         ${index === selectedProject ? 'bg-stone-600' : 'bg-stone-800 hover:bg-stone-600'}`}
        onClick={() => {
            setScreen(3);
            handleSelectProject(index);
            setTaskValue("");
        }}
    >
        {projectName}
    </button>);
}