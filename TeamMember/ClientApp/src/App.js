import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';

export default class App extends Component {
  static displayName = App.name;

    render() {

    return (
        <div>
            <Header />
            <Employees />
            <Footer />
        </div>
    );

  }
}

