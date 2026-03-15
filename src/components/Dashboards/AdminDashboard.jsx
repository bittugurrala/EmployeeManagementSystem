import AdminTasksList from "../../others/AdminTasksList";
import CreateTaks from "../../others/CreateTask";
import Header from "../../others/Header";

export default function AdminDashboard({logoutHandler}){
    return(
        <div className="h-screen w-screen flex flex-col scroll overflow-hidden">
            <Header logoutHandler = {logoutHandler}/>
            <div className=" h-screen flex flex-col md:gap-5">
                <div className="w-screen h-1/2 rounded-2xl"><CreateTaks/></div>
                <div className="px-10 overflow-y-auto TasksList scroll"><AdminTasksList/></div>
            </div>
                
            
        </div>
            
    )
}