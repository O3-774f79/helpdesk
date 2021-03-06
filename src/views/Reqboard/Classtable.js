import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import {  Table, Button, } from 'antd';

// //import @material-ui
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';


import Description from "@material-ui/icons/Description";
import Build from "@material-ui/icons/Build";
import Delete from "@material-ui/icons/Delete";

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }


export default class Classtable extends PureComponent{

    state={
        columns:[{
            title: 'Title',
            dataIndex: 'Title',
            width:'35%',
           
            }, 
            {
            title: 'Description',
            dataIndex: 'Description',
            width:'35%',
                
            },
            {
                title:'Operation',
                dataIndex:'Operation',
                render: () => (
                    [<Button><Description/> </Button>,
                        <Button><Build/> </Button>,
                        <Button><Delete/> </Button>])
            }
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