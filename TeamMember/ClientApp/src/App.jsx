import React, { Component } from 'react';
import './custom.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
            <Router>
                <Nav/>
                <Header SelectedTeam={SelectedTeam}
                    teamNumberCount={employees.filter((employee) => employee.teamName === SelectedTeam).length}
                />
                <Routes>
                    <Route path="/"
                        element={<Employees employees={employees}
                        SelectedTeam={SelectedTeam}
                        handleTeamSelectionChange={handleTeamSelectionChange}
                        handleEmployeeClick={handleEmployeeClick} />}>

                    </Route>
                    <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers
                        employees={employees}
                        selectedTeam={SelectedTeam}
                        setTeam={setTeam} />}></Route>
                    <Route path="*" element={<NotFound />}></Route>

                </Routes>
                <Footer />
            </Router>
        );

}

export default App;

