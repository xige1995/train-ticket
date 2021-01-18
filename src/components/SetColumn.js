import React, { useState, useEffect } from 'react';
import { Modal, Checkbox } from 'antd';
import { connect } from 'react-redux'

function SetColumn (props) {
    const { isModalVisible, setIsModalVisible, allColumns, checkedList } = props

    const [options, setOptions] = useState(() => {
        return allColumns.map(v => {
            return {
                value: v.key,
                label: v.title
            }
        })
    },[isModalVisible]);

    const [ checked, setChecked ] = useState(checkedList)

    const handleOk = () => {
        props.dispatch({
            type: 'CHECKED_LIST',
            val: checked
        })
        console.log('handleOk',props)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        console.log('handleCancel checkedList', checkedList)
        setChecked(checkedList)
        setIsModalVisible(false);
    };

    const onChange = list => {
        setChecked(list)
        console.log('setCheckedList list', list)
    };

    return(
        <Modal title="自定义列表项" destroyOnClose={true} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Checkbox.Group
                options={options}
                defaultValue={checked}
                onChange={onChange}
            />
        </Modal>
    )
}


function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(SetColumn)