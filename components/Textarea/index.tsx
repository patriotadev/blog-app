type PropsType = {
    placeholder?: string,
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Textarea (props: PropsType) {
    return (
        <textarea onChange={props.onChange} placeholder={props.placeholder} value={props.value} className="bg-white p-3 border w-full rounded-lg"  /> 
    );
}