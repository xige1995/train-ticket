import React, { useState, useEffect } from 'react';
import { Modal, Checkbox } from 'antd';

export default function SetColumn (prop) {
    const { isModalVisible, setIsModalVisible, columns } = prop

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [options, setOptions] = useState([]);

    useEffect(() => {
      let cols = columns.map(v => {
            return {
                value: v.key,
                label: v.title
            }
        })
        setOptions(cols)
    }, [isModalVisible])


    const [checkedList, setCheckedList] = useState();

    const onChange = list => {
        setCheckedList(list);
        console.log('setCheckedList list', list)
    };

    return(
        <Modal title="自定义表头" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Checkbox.Group
                options={options}
                defaultValue={['Name']}
                onChange={onChange}
            />
        </Modal>
    )
}