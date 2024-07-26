type PropsType = {
    type: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input (props: PropsType) {
    return (
        <input onChange={props.onChange} placeholder={props.placeholder} type={props.type} value={props.value} className="bg-white p-3 border w-full rounded-lg"  /> 
    );
}