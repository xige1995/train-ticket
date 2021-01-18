import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button, Select } from 'antd';

const { Option } = Select;

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 2, span: 16 },
};

const regionIds  = [
    "cn-hangzhou",
    "cn-shenzhen",
    "cn-beijing",
    "cn-xian"
]

const vpcIds = {
    "cn-hangzhou": [
        "hangzhou-1",
        "hangzhou-2",
        "hangzhou-3",
        "hangzhou-4",
    ],
    "cn-shenzhen": [
        "shenzhen-1",
        "shenzhen-2",
        "shenzhen-3",
        "shenzhen-4",
    ],
    "cn-beijing": [
        "beijing-1",
        "beijing-2",
        "beijing-3",
        "beijing-4",
    ],
    "cn-xian": [
        "xian-1",
        "xian-2",
        "xian-3",
        "xian-4",
    ],
}

const mock = {
    "regionId": {
        "type": "regionId",
        "description": "regionIddesc",
        "default" : 'cn-hangzhou'
    },
    "vpcid": {
        "type": "vpcId",
        "description": "vpciddesc",
        "dependend":['regionId'],
        "default": ''
    },
}

export default function MyForm (props) {
    const [form] = Form.useForm();
    let history = useHistory();

    const [vpcIdArr, setVpcIdsArr] = useState([])

    useEffect( () => {
        let search = history.location.search.substring(1).split('&');
        let searchArr = search.map( item => {
            return item.split('=')[1]
        })
        form.setFieldsValue({ regionId: searchArr[0] });
        form.setFieldsValue({ vpcId: searchArr[1] });

        setVpcIdsArr(vpcIds[searchArr[0]])
    },[])

    const onRegionIdChange = (value) => {
        if(!value){
            return
        }
        setVpcIdsArr(vpcIds[value])
        form.setFieldsValue({ vpcId: vpcIds[value][0] });
    };

    const onVpcIdsChange = (value) => {

    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="regionId" label="regionId" rules={[{ required: true }]}>
                <Select
                    placeholder="请选择regionId"
                    onChange={onRegionIdChange}
                    allowClear
                >
                    {
                        regionIds.map( (item,index) => {
                           return <Option value={item} key={index}>{item}</Option>
                        })
                    }
                </Select>
            </Form.Item>
            <Form.Item name="vpcId" label="vpcId" rules={[{ required: true }]}>
                <Select
                    placeholder="请选择vpcId"
                    onChange={onVpcIdsChange}
                    allowClear
                >
                    {
                        vpcIdArr.map( (item,index) => {
                            return <Option value={item} key={index}>{item}</Option>
                        })
                    }
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    )
}
