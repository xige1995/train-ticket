import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {
    Table, 
    Space,
    Button
} from 'antd'

import MySearch from '../components/MySearch'
import SetColumn from '../components/SetColumn'
import './table.css'

import {
    SettingOutlined,
    SyncOutlined
} from '@ant-design/icons';

export default  function MyTable(props) {
    console.log('props', props)
    let history = useHistory();

    const columns = [
        {
            title: 'Name',
            key: 'Name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Age',
            key: 'Age',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            key: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a onClick={handelDel}>Delete</a>
                </Space>
            ),
        }
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '5',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '6',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '7',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '8',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '9',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '10',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '11',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ];

    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({
        total: 11,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: total => `共 ${total} 条`
    })
    const [isSetModalVisible, setIsSetModalVisible] = useState(false);


    const handelDel = (e) => {
        console.log( 'del', e)
    }
    const handleAdd  = (e) => {
        history.push({
            pathname: '/form',
            search: '?the=query',
            state: { some: 'state' }
        });
    }
    const handleSet  = (e) => {
        console.log( 'handleSet', e)
        setIsSetModalVisible(true)
    }
    const handleRefresh  = (e) => {
        console.log( 'handleRefresh', e)
    }
    const handleTableChange = (pagination, filters, sorter, extra) =>  {
        setLoading(true)
        console.log('params', pagination, filters, sorter, extra);
        setTimeout( () => {
            setLoading(false)
        },300)
    }

    return (
        <div>
            <div className='action'>
                <div className='left'>
                    <Button className='m-r-10' type='primary' onClick={handleAdd}>新建计划</Button>
                    <div className='search'>
                        <MySearch/>
                    </div>
                </div>
                <div className='right' >
                    <Button className='m-r-10' onClick={handleSet}><SettingOutlined /></Button>
                    <Button onClick={handleRefresh}><SyncOutlined/></Button>
                </div>
            </div>
            <Table
                columns={columns}
                rowKey={record => record.key}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            <SetColumn isModalVisible={isSetModalVisible} setIsModalVisible={setIsSetModalVisible} columns={columns} />
        </div>
    )
}