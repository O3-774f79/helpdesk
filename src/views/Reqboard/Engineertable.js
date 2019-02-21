import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import {  Table, Input, Button, Popconfirm, Form, } from 'antd';


function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }


export default class Engineertable extends PureComponent{

    state={
        columns:[{
            title: 'Display Name',
            dataIndex: 'Displayname',
            width:'50%',
           
            }, 
            {
            title: 'Unique Name',
            dataIndex: 'Uniquename',
            width:'50%',
            },
        ],
          
          data:[{
            key: '1',
            Displayname: 'Stepe Xaya',
            Uniquename: 'Engineer1',
          }, {
            key: '2',
            Displayname: 'Martin Keyman',
            Uniquename: 'Engineer2',
          }, {
            key: '3',
            Displayname: 'Mata Forest',
            Uniquename: 'Engineer3',
          }, {
            key: '4',
            Displayname: 'Peter Parker',
            Uniquename: 'Engineer4',
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