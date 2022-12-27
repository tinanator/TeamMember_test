import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({ employees, SelectedTeam, handleEmployeeClick }) => {
    return (
        <div className="card-collection">
            {
                employees.map((employee) => (
                    <TeamMemberCard employee={employee} SelectedTeam={SelectedTeam} handleEmployeeClick={handleEmployeeClick} />
                ))
            }
        </div>
    )
}

export default TeamMembers