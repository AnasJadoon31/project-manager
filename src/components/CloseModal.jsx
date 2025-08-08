import {createPortal} from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from "react";

const modal = forwardRef(function CloseModal({index, setProjects, setScreen}, ref) {
    const dialog = useRef(null);
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    function handleDeleteProject() {
        setProjects(prevState => {
            return prevState.filter((_, i) => i !== index);
        });
        setScreen(0);
        dialog.current.close();
    }

    return createPortal(<dialog ref={dialog}
                                className="fixed m-auto w-fit h-fit p-0 rounded-lg
                                bg-stone-700 backdrop:bg-black/60 ">
        <div className="w-96 p-5">
            <h2 className="text-lg font-bold text-stone-200">Are you sure you want to Delete?</h2>
            <p className="mt-2 text-sm text-stone-400">Any unsaved changes will be lost.</p>
            <div className="mt-4 flex justify-end gap-2">
                <button
                    className="px-4 py-2 text-stone-200 bg-red-700 rounded hover:bg-red-500"
                    onClick={handleDeleteProject}
                >
                    Delete
                </button>
                <button
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => dialog.current.close()}
                >
                    Cancel
                </button>
            </div>
        </div>
    </dialog>, document.getElementById('modal'));
})

export default modal;