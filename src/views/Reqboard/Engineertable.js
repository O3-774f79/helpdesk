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


export default class Engineertable extends PureComponent{

    state={
        columns:[{
            title: 'Display Name',
            dataIndex: 'Displayname',
            width:'35%',
           
            }, 
            {
            title: 'Unique Name',
            dataIndex: 'Uniquename',
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