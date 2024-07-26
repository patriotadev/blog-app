export default function Spinner () {
    return (
        <div className="flex gap-2 items-center font-semibold text-slate-100 mt-40 absolute top-28 z-20">
            <div className="w-16 h-16 bg-transparent shadow-2xl border-b-4 border-t-4 border-t-primary border-b-white rounded-full animate-spin" />
        </div>
    );
}