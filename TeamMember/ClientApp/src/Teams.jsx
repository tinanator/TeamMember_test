
const Teams = ({ handleTeamSelectionChange, selectedTeam }) => {

    return (
        <select className="form-select form-select-lg" id="teams" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TA">TA</option>
            <option value="TB">TB</option>
            <option value="TC">TC</option>
        </select>

    )
}

export default Teams