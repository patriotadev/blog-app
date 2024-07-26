import Link from "next/link";
import Button from "../Button";

export default function Nav () {
    return (
        <div className="h-20 w-full bg-dark-theme fixed flex items-center px-5 justify-between z-10 shadow-lg">
            <Link href='/'>
                <h1 className="text-white text-2xl font-semibold cursor-pointer"><span className="text-4xl text-primary font-bold">B</span>log</h1>
            </Link>
            <Link href='/contact'>
                <Button color="bg-primary">Contact</Button>
            </Link>
        </div>
    );
}