import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../table/table'
import Form from '../form/form'
import Sider from './Sider'
import Other from '../other/other'

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <Home/>
    },
    {
        path: "/home",
        exact: true,
        sidebar: () => <Home/>
    },
    {
        path: "/form",
        sidebar: () => <Form/>
    },
    {
        path: "/other",
        sidebar: () => <Other/>
    }
];


export default function MyRouter(props) {
    useEffect(() => {
        console.log('props', props)
    })
    return (
        <Router>
            <div style={{display: 'flex'}}>
                <Sider />
                <div style={{width: '100%', padding: '0 10px'}}>
                    <Switch style={{width: '100%', padding: '0 10px'}}>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
