import TeamMemberCard from './TeamMemberCard';
import { useContext } from 'react';
import ContextData from './ContextData';

const TeamMembers = () => {

    const { employees } = useContext(ContextData);

    return (

        <div className="card-collection">
            {
                employees.map((employee) => (
                    <TeamMemberCard key={employee.id} employee={employee} />
                ))
            }
        </div>
    )
}

export default TeamMembers