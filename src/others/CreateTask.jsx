export default function CreateTaks(){
    return(
        <div className="h-screen w-screen flex flex-col">
                    <div className="w-screen flex items-start px-10 py-5">
                        <form className="w-full flex gap-5">
                            <div className="w-1/2">
                                <div className = "flex flex-col gap-1 mb-5">
                                    <label>Task Title</label>
                                    <input className="border-white border  rounded-2xl text-gray-300 px-2 py-3 outline-none" type= "text" placeholder="Make UI design"></input>
                                </div>
                                <div className = "flex flex-col gap-2 mb-5">
                                    <label>Date</label>
                                    <input className="border-white border rounded-2xl text-gray-300 px-2 py-3 outline-none" type="date" placeholder="dd/mm/yy"></input>
                                </div>
                                <div className = "flex flex-col gap-2 mb-5">
                                    <label>Assign to</label>
                                    <input className="border-white border rounded-2xl text-gray-300 px-2 py-3 outline-none" type= "text" placeholder="Employee name"></input>
                                </div>
                                <div className = "flex flex-col gap-2 mb-5">
                                    <label>Category</label>
                                    <input className="border-white border rounded-2xl text-gray-300 px-2 py-3 outline-none" type="text" placeholder="Design, dev, etc"></input>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className = "flex flex-col  gap-1 mb-5">
                                    <label>Description</label>
                                    <textarea className="border-white border h-71.25 text-gray-300 rounded-2xl px-2 py-3 " placeholder="Description of the Task"></textarea>
                                </div>
                                <button className="bg-amber-400 px-2 py-3 rounded-2xl w-full active:scale-90">Create Task</button>
                            </div>
                                
                        </form>
                    </div>
                    
                </div>

    )
}
