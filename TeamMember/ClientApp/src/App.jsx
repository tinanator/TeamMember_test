import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';

import { useState } from 'react';

function App() {
    const [employees, setEmployees] = useState([
        { id: 1, fullname: "A B", destination: "AA", gender: "m", teamName: "TA" },
        { id: 2, fullname: "C D", destination: "BB", gender: "m", teamName: "TB" },
        { id: 3, fullname: "E R", destination: "CC", gender: "f", teamName: "TB" },
        { id: 4, fullname: "F G", destination: "DD", gender: "m", teamName: "TA" },
        { id: 5, fullname: "H I", destination: "CC", gender: "f", teamName: "TB" },
        { id: 6, fullname: "J K", destination: "AA", gender: "f", teamName: "TA" }
    ]);

    const [SelectedTeam, setTeam] = useState("TB");

    function handleTeamSelectionChange(event) {
        console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeClick(event) {
        const transformedArray = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ?
            (employee.TeamName === SelectedTeam) ?
                { ...employee, TeamName: '' } : { ...employee, teamName: SelectedTeam }
            : employee);

        setEmployees(transformedArray);
    }


        return (
            <div>
                <Header />
                <Employees employees={employees}
                    SelectedTeam={SelectedTeam}
                    handleTeamSelectionChange={handleTeamSelectionChange}
                    handleEmployeeClick={handleEmployeeClick} />
                <Footer />
            </div>
        );

}

export default App;

