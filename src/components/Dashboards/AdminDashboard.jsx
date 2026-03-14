import AdminTasksList from "../../others/AdminTasksList";
import CreateTaks from "../../others/CreateTask";

export default function AdminDashboard(){
    return(
        <div className="h-screen w-screen flex flex-col gap-5">
            <div className="w-screen h-1/2 flex items-start"><CreateTaks/></div>
            <div className="px-10 h-1/2 overflow-y-auto"><AdminTasksList/></div>
            
        </div>
            
    )
}