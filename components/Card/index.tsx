
type PropsType = {
    children: JSX.Element|JSX.Element[]|string;
}

type CardType = {
    children: React.ReactNode
}

export function Card (props: CardType) {
    return (
        <div className="relative bg-white opacity-85 w-full rounded-md p-2 h-fit">
           {props.children}
        </div>
    );
}

export function CardHeader (props: PropsType) {
    return (
        <div className="text-md rounded-md bg-slate-200 p-2 opacity-100 font-semibold hover:bg-secondary hover:delay-100 hover:opacity-80">
            {props.children}
        </div>
    );
}

export function CardTitle (props: PropsType) {
  return (
        <div className="text-2xl">
            {props.children}
        </div>
    );
}

export function CardBody ( props: PropsType) {
    return (
        <div className="mt-5">
            {props.children}
        </div>
    );
}

export function CardFooter (props: PropsType) {
    return (
        <div className="bottom-0 border-t mt-4 py-2 flex justify-start">
            { props.children }
        </div>
    );
}