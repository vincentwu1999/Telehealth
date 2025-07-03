import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useToken } from './components';

import Calendar from './physician/AppointmentsPage/calendar.js';
import { LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage, UserSettingsPage, AdminHomePage, PatientSearchPage, CameraPage, MobileLoginPage, VideoPage, MobilePromptsPage } from "./pages";
import { AbdomenPage, DemographicPage, GeneralPage, HeartPage, LegsPage, LungsPage, MessagesPage, PulsesPage, EyesPage, HandsPage } from "./physician";
import AppointmentsPage from "./physician/AppointmentsPage/AppointmentsPage.js";
import SummaryPage from "./physician/SummaryPage/SummaryPage.js";
import { LegsMedPage, HandsMedPage, AbdomenMedPage, HeartMedPage, PulsesMedPage, GeneralMedPage, DemographicMedPage, EyesMedPage, LungsMedPage, PatientChartPage } from "./technician";
import NotFound from "pages/NotFound";


export default function App() {
    const { token, removeToken, checkToken, setToken } = useToken();
    const [events, setEvents] = useState([]);
    const proxy = "https://virtualphysical.pythonanywhere.com/";
    const userType = token ? jwtDecode(token).type : null;
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        if (token) {
            axios({
                method: "GET",
                url: "https://virtualphysical.pythonanywhere.com/get_calendar",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                    console.log(response.data.items);
                    setEvents(response.data.items);
                    setLoading(false); // Set loading to false when data is fetched
                })
                .catch((error) => {
                    setLoading(false); // Set loading to false even if there's an error
                    console.error("Error fetching events:", error);
                    // Handle error
                });
        }
    }, [token]);


    // Define homepage based on authentication status and user type
    let homepage;
    if (!token) {
        homepage = <LoginPage proxy={proxy} setToken={setToken} />;
    } else if (userType === 'admin') {
        homepage = (
            <AdminHomePage
                proxy={proxy}
                token={token}
                setToken={setToken}
                removeToken={removeToken}
                checkToken={checkToken}
            />
        );
    } else if (userType === 'physician') {
        homepage = (
            <PatientSearchPage
                proxy={proxy}
                token={token}
                setToken={setToken}
                removeToken={removeToken}
                checkToken={checkToken}
            />
        );
    } else {
        homepage = (
            <PatientChartPage
                proxy={proxy}
                token={token}
                setToken={setToken}
                removeToken={removeToken}
                checkToken={checkToken}
            />
        );
    }

    return (
        <Router>
            <div className = 'App'>

                <Routes>

                <Route exact path="/m" element={<MobileLoginPage proxy={proxy} setToken={setToken}/>}/>

                <Route exact path="/p" element={<MobilePromptsPage proxy={proxy} setToken={setToken}/>}/>

                    <Route exact path="/" element={homepage}/>

                    <Route path="/register" element={<RegisterPage proxy={proxy} setToken={setToken} /> } />

                    <Route path="/forgot_password" element={<ForgotPasswordPage  proxy={proxy} /> } />

                    <Route path="/reset_password" element={<ResetPasswordPage proxy={proxy}/>} />

                    <Route path="/settings"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            <UserSettingsPage  proxy={proxy} token={token} setToken={setToken} removeToken={removeToken} checkToken={checkToken}/>
                        </ProtectedRoute>
                    }/>

                    <Route path="/demographics"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <DemographicPage proxy={proxy} token={token}/> : 
                            <DemographicMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/general"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <GeneralPage proxy={proxy} token={token}/> : 
                            <GeneralMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/eyes"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <EyesPage proxy={proxy} token={token}/> : // does not exist
                            <EyesMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/hands"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <HandsPage proxy={proxy} token={token}/> : // does not exist
                            <HandsMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/heart"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <HeartPage proxy={proxy} token={token}/> : 
                            <HeartMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/abdomen"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <AbdomenPage proxy={proxy} token={token}/> : 
                            <AbdomenMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/pulses"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <PulsesPage proxy={proxy} token={token}/> : 
                            <PulsesMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/legs"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <LegsPage proxy={proxy} token={token}/> : 
                            <LegsMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/lungs"
                        element={
                        <ProtectedRoute isAllowed={!!token}>
                            {userType === 'physician' ? 
                            <LungsPage proxy={proxy} token={token}/> : 
                            <LungsMedPage proxy={proxy} token={token}/>}
                        </ProtectedRoute>
                    }/>

                    <Route path="/summary"
                    element={
                    <ProtectedRoute isAllowed={!!token && userType === 'physician'}>
                        <SummaryPage proxy={proxy} token={token}/> 
                    </ProtectedRoute>
                    }/>

                    <Route path="/messages"
                    element={
                    <ProtectedRoute isAllowed={!!token && userType === 'physician'}>
                        <MessagesPage proxy={proxy} token={token}/> 
                    </ProtectedRoute>
                    }/>

                    <Route path="/appointment" element={
                        <ProtectedRoute isAllowed={!!token && userType === 'physician'}>
                            <AppointmentsPage proxy={proxy} token={token}></AppointmentsPage>
                        </ProtectedRoute> 
                    }/>

                    <Route path="camera" element={<CameraPage proxy={proxy} token={token} />} />

                    <Route path="video" element={<VideoPage proxy={proxy} token={token} />} />

                    <Route path="*" element={<NotFound />} />

                </Routes>
            </div>
        </Router>
    )
}

const ProtectedRoute = ({isAllowed, redirectPath = '/', children,}) => {
    if (!isAllowed){
        return <Navigate to={redirectPath} replace/>;
    }
    return children? children: <Outlet/>;
}