export default function TasksOverview(){
    return(
        <div className=" p-10 w-screen flex flex-col items-center md:flex-row  md:justify-between gap-5">
            <div className="bg-amber-500 w-[300px] h-[150px]   p-5 rounded-xl flex flex-col items-start justify-around">
                <h2 className="text-3xl font-bold">0</h2>
                <h3  className="text-xl">Accepted</h3>

            </div>
            <div className="bg-green-500 w-[300px] h-[150px]  p-5 rounded-xl flex flex-col items-start justify-around">
                <h2 className="text-[2em] font-bold">0</h2>
                <h3  className="text-[1.5em]">Accepted</h3>

            </div>
            <div className="bg-gray-500 w-[300px] h-[150px]  p-5 rounded-xl flex flex-col items-start justify-around">
                <h2 className="text-3xl font-bold">0</h2>
                <h3  className="text-xl">Accepted</h3>

            </div>
            <div className="bg-orange-500 w-[300px] h-[150px] p-5 rounded-xl flex flex-col items-start justify-around">
                <h2 className="text-3xl font-bold">0</h2>
                <h3  className="text-xl">Accepted</h3>

            </div>
        </div>
    )
}