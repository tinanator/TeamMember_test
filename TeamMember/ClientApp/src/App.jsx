import React, { Component } from 'react';
import './custom.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { DataProvider } from './ContextData';

function App() {
    return (
        <DataProvider>
            <Router>
                <Nav/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Employees/>} />
                    <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />
                    <Route path="*" element={<NotFound />}></Route>

                </Routes>
                <Footer />
            </Router>
        </DataProvider>
        );

}

export default App;

