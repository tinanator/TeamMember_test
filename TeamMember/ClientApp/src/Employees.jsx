
import TeamMembers from './TeamMembers';
import Teams from './Teams';

//use State hook

const Employees = ({ employees, SelectedTeam, handleTeamSelectionChange, handleEmployeeClick }) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <Teams handleTeamSelectionChange={handleTeamSelectionChange} SelectedTeam={SelectedTeam} />
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    {
                        <TeamMembers employees={employees} SelectedTeam={SelectedTeam} handleEmployeeClick={handleEmployeeClick} />
                    }

                </div>
            </div>
        </main>
    )
}

export default Employees