
import femaleProfile from './Images/femaleProfile.jpg';
import maleProfile from './Images/maleProfile.jpg';

//use State hook

const Employees = ({ employees, SelectedTeam, handleTeamSelectionChange, handleEmployeeClick }) => {

    return (
        <main className="container"> 
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <select className="form-select form-select-lg" value={SelectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="TA">TA</option>
                        <option value="TB">TB</option>
                        <option value="TC">TC</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                <div id={employee.id} key={employee.id} onClick={handleEmployeeClick} className={(employee.teamName === SelectedTeam ? "card m-2 standout" : "card m-2")} style={{ cursor: "pointer" }}>

                                    {(employee.gender === "m") ? < img src={maleProfile} className="card-img-top" />
                                                               : < img src={femaleProfile} className="card-img-top" />}
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">Full name: {employee.fullname}</h5>
                                        <p className="card-text"><b>Designation:</b> {employee.destination}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>

        
            
        </main>
    )
}

export default Employees