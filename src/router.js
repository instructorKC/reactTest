
import React from 'react';

// Here is where we are importing to the two main components we need from the React Router package.
import { Routes, Route } from 'react-router-dom';


const Router = () => {
    return (
        <Routes>   
            <Route path="/*" element={<Home/>} />
            <Route path="/dash" element={<Dashboard/>} />
            <Route path="/user/:id" element={<Profile/>} />
        </Routes>
    );
}

//Don't forget to export your newly create Router component
export default Router;

const Home = () => {
    return <h1>Hi</h1>
}

const Dashboard = () => {
    return <h1>Dashboard</h1>
}
const Profile = () => {
    return <h1>Profile</h1>
}

