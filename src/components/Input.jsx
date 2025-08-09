export default function Input({projectProperties, id, name, textField, handleOnChange, ...props}) {
    return (<div className="flex flex-col p-5">
        <label className="ml-3 font-bold uppercase">{name}</label>
        {textField ? <textarea className="p-2 border-yellow-900 rounded-2xl bg-stone-200"
                               placeholder={"Enter " + name}
                               value={projectProperties}
                               required
                               onChange={(event) => handleOnChange(event, id)}
                               {...props}
        /> : <input className=" p-2 border-yellow-900 rounded-2xl bg-stone-200" type="text"
                    placeholder={"Enter " + name}
                    value={projectProperties}
                    required
                    onChange={(event) => handleOnChange(event, id)}
                    {...props}
        />}
    </div>);
}