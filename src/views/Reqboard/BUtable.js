import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import {  Table, Input, Button, Popconfirm, Form, } from 'antd';



const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }


export default class Butable extends PureComponent{

    state={
        editing: false,

        columns:[{
            title: 'Title',
            dataIndex: 'Title',
            width:'50%',
           
            }, 
            {
            title: 'Description',
            dataIndex: 'Description',
            width:'50%',
          
            },
        ],
          
          data:[{
            key: '1',
            Title: 'Accounting',
            Description: 'Accounting Team',
          }, {
            key: '2',
            Title: 'HR',
            Description: 'HR Team',
          }, {
            key: '3',
            Title: 'IT',
            Description: 'IT Team',
          }, {
            key: '4',
            Title: 'Reception',
            Description: 'Reception Team',
          },{
            key: '5',
            Title: 'Marketing',
            Description: 'Marketing Team',
          },]
    }
    render(){
        return(
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} onChange={onChange} />,
           
            </div>
        )
    }
}