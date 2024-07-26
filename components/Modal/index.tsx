type PropsType = {
    isOpen: boolean
    children: JSX.Element|JSX.Element[]|string;
}

export default function Modal (props: PropsType) {
    return (
        <div className={`${!props.isOpen ? 'hidden' : ''} absolute z-30 top-40 w-2/3 lg:w-1/2`}>
            {props.children}
        </div>
    )
}