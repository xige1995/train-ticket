import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {
    Table, 
    Space,
    Button,
    Popover
} from 'antd'

import {
    MoreOutlined
} from '@ant-design/icons';

import MySearch from '../components/MySearch'
import SetColumn from '../components/SetColumn'
import './table.css'

import {
    SettingOutlined,
    SyncOutlined
} from '@ant-design/icons';
import connect from "react-redux/es/connect/connect";

function MyTable(props) {
    let history = useHistory();
    const { checkedList } = props
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    const allColumns =   [
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
                }
            ],
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
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => handelOperate(record, 'edit')}>修改</a>
                    <a onClick={ () => handelOperate(record, 'detail')}>详情</a>
                    <a onClick={ () => handelOperate(record, 'load')}>下载</a>
                    <Popover placement="topLeft" title='更对操作' content={( <a onClick={() => handelOperate(record, 'clone')}>克隆</a>)} arrowPointAtCenter>
                        <MoreOutlined />
                    </Popover>
                </Space>
            ),
        }
    ]

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

    const [columns, setColumns] = useState()
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({
        total: 11,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: total => `共 ${total} 条`
    })
    const [isSetModalVisible, setIsSetModalVisible] = useState(false);

    useEffect(() => {
       let newColums = allColumns.filter(item =>  checkedList.includes(item.key))
        setColumns(newColums)
    },[checkedList])

    const handelOperate = (record, type) => {
        console.log( 'handelOperate', record, type)
        switch (type) {
            case 'edit':
                break;
            case 'detail':
                break
            case 'load':
                break;
            case 'clone':
                break;
            default:
                return;
        }
    }
    const handleAdd  = (e) => {
       console.log(' props.history',  props.history)
        history.push({
            pathname: '/form',
            search: '?regionId=cn-hangzhou&vpcId=hangzhou-1'
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
        let data = {
            current: pagination.current,
            pageSize: pagination.pageSize,
            columnKey: sorter.field,
            order: sorter.order,
            filters: sorter.column.filters
        }
        console.log('handleTableChange', data)
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
            <SetColumn
                isModalVisible={isSetModalVisible}
                setIsModalVisible={setIsSetModalVisible}
                allColumns={allColumns}
            />
        </div>
    )
}


function mapStateToProps(state) {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(MyTable)