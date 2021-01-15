import React from 'react'

import { Input, Select } from 'antd'
const { Search } = Input;
const { Option } = Select;

export default function MySearch() {
    const onSearch = (e) => {
        console.log('onSearch', onSearch)
    }

    const optionList = [
        {value: '1', label: 'Zhejiang'},
        {value: '2', label: 'Jiangsu'}
    ]

    return(
        <div>
            <Input.Group compact>
                <Select defaultValue="Zhejiang">
                    {
                        optionList.map( item => {
                            return <Option value={item.value} key={item.value}> {item.label}</Option>
                        })
                    }
                </Select>
                <Search style={{ width: '60%' }} placeholder="input search text" onSearch={onSearch} />
            </Input.Group>
        </div>
    )
}