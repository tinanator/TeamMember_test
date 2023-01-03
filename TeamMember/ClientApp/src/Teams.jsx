import { useContext } from 'react';
import ContextData from './ContextData';

const Teams = () => {
    const { handleTeamSelectionChange, selectedTeam } = useContext(ContextData);

    return (
        <select className="form-select form-select-lg" id="teams" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TA">TA</option>
            <option value="TB">TB</option>
            <option value="TC">TC</option>
        </select>

    )
}

export default Teams