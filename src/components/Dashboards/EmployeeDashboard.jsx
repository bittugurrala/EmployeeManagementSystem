import Header from "../../others/Header";
import TaskList from "../../others/TasksList";
import TasksOverview from "../../others/TasksOverview";

export default function EmployeeeDashboard(){
    return(
        <div>
           <Header/> 
           <TasksOverview/>
           <TaskList/>
        </div>
    )
}