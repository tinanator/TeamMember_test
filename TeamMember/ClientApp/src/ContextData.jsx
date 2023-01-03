import { createContext, useState, useEffect } from 'react';

const ContextData = createContext({});

export const DataProvider = ({ children }) => {
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
        { id: 1, fullname: "A B", destination: "AA", gender: "m", teamName: "TA" },
        { id: 2, fullname: "C D", destination: "BB", gender: "m", teamName: "TB" },
        { id: 3, fullname: "E R", destination: "CC", gender: "f", teamName: "TB" },
        { id: 4, fullname: "F G", destination: "DD", gender: "m", teamName: "TA" },
        { id: 5, fullname: "H I", destination: "CC", gender: "f", teamName: "TB" },
        { id: 6, fullname: "J K", destination: "AA", gender: "f", teamName: "TA" }
    ]);

    const [SelectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedItem')) || "TB");

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees])

    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(SelectedTeam));
    }, [SelectedTeam])

    function handleTeamSelectionChange(event) {
        console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeClick(event) {
        console.log("click");
        const transformedArray = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ?
            (employee.TeamName === SelectedTeam) ?
                { ...employee, TeamName: '' } : { ...employee, teamName: SelectedTeam }
            : employee);

        setEmployees(transformedArray);
    }

    return <ContextData.Provider value={{
        employees, SelectedTeam, handleTeamSelectionChange, handleEmployeeClick, setTeam
    }}>
        {children}
    </ContextData.Provider>
};

export default ContextData;