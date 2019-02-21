import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import {  Table, Input, Button, Popconfirm, Form, } from 'antd';


function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }


export default class Classtable extends PureComponent{

    state={
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
            Title: 'Network',
            Description: 'Network problem',
          }, {
            key: '2',
            Title: 'Hardware',
            Description: 'Hardware problem',
          }, {
            key: '3',
            Title: 'Software',
            Description: 'Software problem',
          }, ]
    }
    render(){
        return(
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} onChange={onChange} />,
           
            </div>
        )
    }
}