import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {
        var teams = [];

        var teamTAMembers = employees.filter((employee) => employee.teamName === 'TA');
        var teamTA = { team: 'TA', members: teamTAMembers, collapsed: selectedTeam === 'TA' ? false : true };

        teams.push(teamTA);

        var teamTBMembers = employees.filter((employee) => employee.teamName === 'TB');
        var teamTB = { team: 'TB', members: teamTBMembers, collapsed: selectedTeam === 'TB' ? false : true };

        teams.push(teamTB);

        var teamTCMembers = employees.filter((employee) => employee.teamName === 'TC');
        var teamTC = { team: 'TC', members: teamTCMembers, collapsed: selectedTeam === 'TC' ? false : true };

        teams.push(teamTC);

        return teams;
    }

    function handleTeamClick(event) {
        var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ?
            { ...groupedData, collapsed: !groupedData.collapsed } :
            groupedData);

        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
                            <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                                Team name: {item.team}
                            </h4>
                            <div id={"collapse_" + item.team}
                                className={item.collapsed === true ? "collapse" : ""}>
                                <hr />
                                {console.log(item)}
                                {
                                    item.members.map(member => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">
                                                        Full name: {member.fullname}        
                                                    </span>
                                                </h5>
                                                <p>Destination: { member.destination }</p>
                                            </div>    
                                        );
                                    })
                                };
                            </div>    
                        </div>    
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMembers