import {useState} from "react";
import Input from "./Input.jsx";

export default function AddProject({addProjects, setScreen}) {

    const [projectProperties, setProjectProperties] = useState({
        title: "", description: "", dueDate: "", tasks: []
    });

    const handleOnChange = (event, name) => {
        if (name === "dueDate") {
            const selectedDate = new Date(event.target.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                alert("Please select a future date");
                return;
            }
        }
        setProjectProperties(prevState => ({
            ...prevState, [name]: event.target.value
        }));
    }

    function onSave() {
        if (!projectProperties.title || !projectProperties.description || !projectProperties.dueDate) {
            alert("Please fill in all fields.");
            return;
        }
        addProjects(prevState => [...prevState, projectProperties]);
        setScreen(0);

    }

    return (<div className="flex flex-col mt-20 w-full">
        <Input name="Title" id="title" handleOnChange={handleOnChange} projectProperties={projectProperties.title}
               type="text"/>
        <Input name="Description" id="description" handleOnChange={handleOnChange}
               projectProperties={projectProperties.description}
               textField/>
        <Input name="Due Date" id="dueDate" handleOnChange={handleOnChange}
               projectProperties={projectProperties.dueDate} type="date"
               min={new Date().toISOString().split('T')[0]}
               max="2099-12-31"/>

        <div className="p-5 flex justify-end space-x-10">
            <button className="cursor-pointer hover:text-yellow-900"
                    onClick={() => setScreen(0)}
            >
                Cancel
            </button>
            <button className="bg-stone-700 w-auto min-w-20 p-2 rounded-2xl
        hover:bg-stone-500 text-stone-300 cursor-pointer"
                    onClick={onSave}
            >
                Save
            </button>
        </div>
    </div>);
}