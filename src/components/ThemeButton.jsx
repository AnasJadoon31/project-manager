export default function ThemeButton({design, children, buttonAction}) {
    return (<button
        className={"bg-stone-700 w-auto min-w-20 p-2 rounded-2xl hover:bg-stone-500 text-stone-300 cursor-pointer " + design}
        onClick={buttonAction}
    >
        {children}
    </button>);
}