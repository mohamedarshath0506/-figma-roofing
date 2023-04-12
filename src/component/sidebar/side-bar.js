import "./side-bar.css"
import dashboard from "../../image/dashboard.png"
import inspections from "../../image/inspectioms.png"
import inProgress from "../../image/in_progress.png"
import completed from "../../image/completed.png"
import reports from "../../image/reports.png"
import customers from "../../image/customers.png"
import { Link } from "react-router-dom"



function SideBar() {
   
    return(
    <div>
        <section className="section-container"> 
        {/* <input type="checkbox" />
            <div className="toggle">
                <span className="top-line commom"></span>
                <span className="middle-line commom"></span>
                <span className="bottom-line commom"></span>
            </div> */}
            <Link to='/main'>
                <p className="main" >MAIN MENU</p>
            </Link>
            <div>  
                <Link to='/'>
                    <div className="content"> 
                        <img src={dashboard} alt="dashboard" width="21" height="21"  className="image" />
                        <h2 className="dashboard">Dashboard</h2>
                    </div>
                </Link>
               <Link to="inspection">
                <div className="content">
                    <img src={inspections} alt="inspections" width="21" height="21" className="image" />
                    <h2 >Inspections</h2>
                </div>
                </Link>
                <Link to="inprogress">
                <div className="content">
                    <img src={inProgress} alt="inProgress" width="21" height="21" className="image" />
                    <h2>In Progress</h2>
                </div>
                </Link>
                <Link to="completed">
                <div className="content">
                    <img src={completed} alt="completed" width="21" height="21" className="image" />
                    <h2>Completed</h2>
                </div>
                </Link>
                <Link to="reports">
                <div className="content">
                    <img src={reports} alt="reports" width="21" height="21" className="image" />
                    <h2>Reports</h2>
                </div>
                </Link>
                <Link to="customers">
                <div className="content">
                    <img src={customers} alt="customers" width="21" height="21" className="image" />
                    <h2>Customers</h2>
                </div>
                </Link>
                <Link to="membersmanagemet">
                <div className="content">
                    <img src={customers} alt="customers" width="21" height="21" className="image" />
                    <h2>Members managemet</h2>
                </div>
                </Link>
               
            </div>
        </section>
    </div>)
}

export default SideBar