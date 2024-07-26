type PropsType = {
    color: string,
    children: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: PropsType) {
    const btnProps = {
        color: `${props.color}`,
        children: props.children,
        className: props.className
    }

    return (
        <button {...props} className={`${btnProps.color} ${btnProps.className} text-white w-fit rounded-full px-4 py-2 shadow-inner`}>
            {props.children}
        </button>
    );
}