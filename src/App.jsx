import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AddProject from "./components/AddProject.jsx";
import {useRef, useState} from "react";
import Content from "./components/Content.jsx";
import CloseModal from "./components/CloseModal.jsx";

function App() {

    const [projects, setProjects] = useState([]);
    const [screen, setScreen] = useState(0);
    const [selectedProject, setSelectedProject] = useState();
    const [taskValue, setTaskValue] = useState("");
    const dialog = useRef(null);
    console.log(projects[selectedProject]);

    function handleClose() {
        dialog.current.open();
    }

    return (<div className="flex flex-row h-screen">
        <CloseModal ref={dialog}
                    index={selectedProject}
                    setProjects={setProjects}
                    setScreen={setScreen}
        />
        <Sidebar
            setScreen={setScreen}
            projects={projects}
            selectedProject={selectedProject}
            handleSelectProject={(newSelectedIndex) => setSelectedProject(newSelectedIndex)}
            setTaskValue={setTaskValue}
        />
        <div className="basis-3/4">
            <Header/>
            {screen === 0 && <Home
                setScreen={setScreen}
            />}
            {screen === 1 && <AddProject
                setScreen={setScreen}
                addProjects={setProjects}
            />}
            {screen === 3 && <Content
                project={projects[selectedProject]}
                setProjects={setProjects}
                setScreen={setScreen}
                currentIndex={selectedProject}
                taskValue={taskValue}
                setTaskValue={setTaskValue}
                handleClose={handleClose}
            />}
        </div>
    </div>);
}

export default App;
