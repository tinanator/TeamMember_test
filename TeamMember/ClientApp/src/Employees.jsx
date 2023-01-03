import TeamMembers from './TeamMembers';
import Teams from './Teams';

//use State hook

const Employees = () => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <Teams />
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    {
                        <TeamMembers />
                    }

                </div>
            </div>
        </main>
    )
}

export default Employees