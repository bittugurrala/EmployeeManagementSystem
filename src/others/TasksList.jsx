export default function TaskList(){
    return (
        <div  className="p-10 w-full h-75  flex flex-col md:flex-row items-center scroll gap-10 overflow-y-auto md:overflow-x-auto overflow-x-hidden">
            <div className="w-75 h-62.5 shrink-0 rounded-xl bg-amber-200 flex flex-col items-start py-5 px-2 gap-5">
                <p className="bg-red-600 text-red-300 text-sm px-4 py-1 rounded-xl ">High</p>
                <h2 className="text-black text-xl font-bold whitespace-nowrap">This is the Card's headings</h2>
                <p className="text-black text-sm">This is the heading of the things that are not necessary</p>
            </div>
            <div className="w-75 h-62.5 shrink-0 rounded-xl bg-orange-200 flex flex-col items-start py-5 px-2 gap-5">
                <p className="bg-red-600 text-red-300 text-sm px-4 py-1 rounded-xl ">High</p>
                <h2 className="text-black text-xl font-bold whitespace-nowrap">This is the Card's headings</h2>
                <p className="text-black text-sm">This is the heading of the things that are not necessary</p>
            </div>
            <div className="w-75 h-62.5 shrink-0 rounded-xl bg-blue-200 flex flex-col items-start py-5 px-2 gap-5">
                <p className="bg-orange-600 text-orange-300 text-sm px-4 py-1 rounded-xl ">Medium</p>
                <h2 className="text-black text-xl font-bold whitespace-nowrap">This is the Card's headings</h2>
                <p className="text-black text-sm">This is the heading of the things that are not necessary</p>
            </div>
            <div className="w-75 h-62.5 shrink-0 rounded-xl bg-pink-200 flex flex-col items-start py-5 px-2 gap-5">
                <p className="bg-green-600 text-green-300 text-sm px-4 py-1 rounded-xl ">Less</p>
                <h2 className="text-black text-xl font-bold whitespace-nowrap">This is the Card's headings</h2>
                <p className="text-black text-sm">This is the heading of the things that are not necessary</p>
            </div>
            <div className="w-75 h-62.5 shrink-0 rounded-xl bg-red-200 flex flex-col items-start py-5 px-2 gap-5">
                <p className="bg-red-600 text-red-300 text-sm px-4 py-1 rounded-xl ">High</p>
                <h2 className="text-black text-xl font-bold whitespace-nowrap">This is the Card's headings</h2>
                <p className="text-black text-sm">This is the heading of the things that are not necessary</p>
            </div>
            <div className="w-75 h-62.5 shrink-0 rounded-xl bg-blue-200 flex flex-col items-start py-5 px-2 gap-5">
                <p className="bg-orange-600 text-orange-300 text-sm px-4 py-1 rounded-xl ">Medium</p>
                <h2 className="text-black text-xl font-bold whitespace-nowrap">This is the Card's headings</h2>
                <p className="text-black text-sm">This is the heading of the things that are not necessary</p>
            </div>

        </div>
    )
}