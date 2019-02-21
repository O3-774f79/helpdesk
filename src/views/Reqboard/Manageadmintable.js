import React, {PureComponent} from 'react'

import 'antd/dist/antd.css';
import {  Table,  Button, } from 'antd';


// //import @material-ui
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';


import Description from "@material-ui/icons/Description";
import Build from "@material-ui/icons/Build";
import Delete from "@material-ui/icons/Delete";

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }


export default class Manageadmintable extends PureComponent{

    state={
        columns:[{
            title: 'Display Name',
            dataIndex: 'Displayname',
            width:'25%',
           
            }, 
            {
            title: 'Unique Name',
            dataIndex: 'Uniquename',
            width:'25%',
            },
            {
              title: 'Description',
              dataIndex: 'Description',
              width:'25%',
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
            Displayname: 'Xiao sin',
            Uniquename: 'Administrator',
            Description:'Manage Create/Delete/Edit',
          }, {
            key: '2',
            Displayname: 'Jack sun',
            Uniquename: 'Administrator',
            Description:'Sub Admin',
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