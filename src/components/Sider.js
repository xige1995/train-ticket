import React from 'react'
import { useHistory } from "react-router-dom";
import { Menu } from 'antd';

export default function Sider (props) {
    let history = useHistory();
    const handleClick = (e) => {
        history.push(`/${e.key}`);
    };

    return (
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.Item key="Home">Home</Menu.Item>
            <Menu.Item key="Form">Form</Menu.Item>
        </Menu>
    );
}
