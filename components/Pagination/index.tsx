type OptionsType = {
    total: number
    page: number,
    perPage: number
}

type PropsType = {
    options: OptionsType,
    setOptions: React.Dispatch<React.SetStateAction<OptionsType>>
}

export default function Pagination (props: PropsType) {
    return (
        <div className="flex w-full gap-2 justify-between">
            <div className="flex items-center text-sm text-slate-50 cursor-pointer">
                Page {props.options.page} of {Math.ceil(props.options.total / props.options.perPage)}
            </div>
            <div className="flex gap-2">
                <div 
                    className={`${props.options.page < 2 ? 'hidden' : ''}bg-slate-300 w-4 h-4 p-4 flex justify-center items-center rounded-md cursor-pointer`}
                    onClick={() => props.setOptions({...props.options, page: props.options.page - 1})}
                >
                    {props.options.page > 1 ? props.options.page - 1 : '' }
                </div>
                <div className="bg-primary text-white scale-110 w-4 h-4 p-4 flex justify-center items-center rounded-md">
                    {props.options.page}
                </div>
                <div 
                    className={`${props.options.page >= Number(Math.ceil(props.options.total / props.options.perPage)) ? 'hidden' : ''} bg-slate-300 w-4 h-4 p-4 flex justify-center items-center rounded-md cursor-pointer`}
                    onClick={() => props.setOptions({...props.options, page: props.options.page + 1})}
                >
                    {props.options.page + 1}
                </div>
            </div>
        </div>
    );
}