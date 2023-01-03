import femaleProfile from './Images/femaleProfile.jpg';
import maleProfile from './Images/maleProfile.jpg';
import ContextData from './ContextData';
import { useContext } from 'react';

const TeamMemberCard = ({ employee }) => {

    const { SelectedTeam, handleEmployeeClick } = useContext(ContextData);

    return (
        <div id={employee.id} key={employee.id} onClick={handleEmployeeClick} className={(employee.teamName === SelectedTeam ? "card m-2 standout" : "card m-2")} style={{ cursor: "pointer" }}>

            {(employee.gender === "m") ? < img src={maleProfile} className="card-img-top" />
                : < img src={femaleProfile} className="card-img-top" />}

            <div className="card-body">
                <h5 className="card-title">Full name: {employee.fullname}</h5>
                <p className="card-text"><b>Designation:</b> {employee.destination}</p>
            </div>

        </div>
    )
}

export default TeamMemberCard