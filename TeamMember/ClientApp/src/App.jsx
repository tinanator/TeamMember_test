import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';

import { useState, useEffect } from 'react';

function App() {

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
        { id: 1, fullname: "A B", destination: "AA", gender: "m", teamName: "TA" },
        { id: 2, fullname: "C D", destination: "BB", gender: "m", teamName: "TB" },
        { id: 3, fullname: "E R", destination: "CC", gender: "f", teamName: "TB" },
        { id: 4, fullname: "F G", destination: "DD", gender: "m", teamName: "TA" },
        { id: 5, fullname: "H I", destination: "CC", gender: "f", teamName: "TB" },
        { id: 6, fullname: "J K", destination: "AA", gender: "f", teamName: "TA" }
    ]);

    const [SelectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedItem')) || "TB");

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

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees])

    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(SelectedTeam));
    }, [SelectedTeam])

    console.log(employees.filter((employee) => employee.teamName === SelectedTeam).length);


        return (
            <div>
                <Header SelectedTeam={SelectedTeam}
                    teamNumberCount={employees.filter((employee) => employee.teamName === SelectedTeam).length}
                />
                <Employees employees={employees}
                    SelectedTeam={SelectedTeam}
                    handleTeamSelectionChange={handleTeamSelectionChange}
                    handleEmployeeClick={handleEmployeeClick} />
                <Footer />
            </div>
        );

}

export default App;

