import { useState } from 'react';
import femaleProfile from './Images/femaleProfile.jpg';
import maleProfile from './Images/maleProfile.jpg';

//use State hook

const Employees = () => {

    const [employees, setEmployees] = useState([
        { id: 1, fullname: "A B", destination: "AA", gender: "m", teamName: "TA" },
        { id: 2, fullname: "C D", destination: "BB", gender: "m", teamName: "TB" },
        { id: 3, fullname: "E R", destination: "CC", gender: "f", teamName: "TB" },
        { id: 4, fullname: "F G", destination: "DD", gender: "m", teamName: "TA" },
        { id: 5, fullname: "H I", destination: "CC", gender: "f", teamName: "TB" },
        { id: 6, fullname: "J K", destination: "AA", gender: "f", teamName: "TA" }
    ]);

    const [SelectedTeam, setTeam] = useState("TB");

    function handleTeamSelectionChange(event) {
        console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeClick(event) {
        const transformedArray = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ?
            (employee.TeamName === SelectedTeam) ?
                { ...employee, TeamName: '' } : { ...employee, teamName: SelectedTeam }
            : employee);

        setEmployees(transformedArray);
    }

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
                                <div id={employee.id} className={(employee.teamName === SelectedTeam ? "card m-2 standout" : "card m-2")} style = {{ cursor: "pointer" }}>

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