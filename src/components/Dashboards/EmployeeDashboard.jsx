import Header from "../../others/Header";
import TaskList from "../../others/TasksList";
import TasksOverview from "../../others/TasksOverview";

export default function EmployeeDashboard({logoutHandler}){
    return(
        <div>
           <Header logoutHandler = {logoutHandler}/> 
           <TasksOverview/>
           <TaskList/>
        </div>
    )
}