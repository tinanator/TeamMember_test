import ContextData from './ContextData';
import { useContext } from 'react';

const Header = () => {

    const { SelectedTeam, teamNumberCount } = useContext(ContextData);

    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Team member Allocation</h1>
                    <h3>{SelectedTeam} has {teamNumberCount} {teamNumberCount === 1?"member":"members" }</h3>
                </div>
            </div>
        </header>        
    )
}

export default Header