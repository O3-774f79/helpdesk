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


export default class Butable extends PureComponent{

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
            {title: 'Operation',
            dataIndex:'Operation',
            render: () => (
                [<Button><Description/> </Button>,
                    <Button><Build/> </Button>,
                    <Button><Delete/> </Button>])
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