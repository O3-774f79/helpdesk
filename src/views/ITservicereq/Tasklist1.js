
import React from 'react';
import { withRouter, Route, Link  } from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'

//import antd 
import 'antd/dist/antd.css';
import { Table } from 'antd';

//import @material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Description from "@material-ui/icons/Description";
import Build from "@material-ui/icons/Build";
import Delete from "@material-ui/icons/Delete";
import ITformReq from './ITformReq1';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      minwitdth:300
    },
    input: {
      display: 'none',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    headerAppBar:{
        backgroundColor: "rgb(132, 225, 132)",
        color: "rgb(0, 0, 0)"
      },
  });

  const Button1 = withRouter(({ history }) => (
    //  <Button
    //    onClick={() => { history.push("/admin/ITformReq") }}
    //  ><Description />
    //  </Button>
    <Button><Description /> </Button>
  ))


function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
class Tasklist1 extends React.Component {
    state={
        columns:[{
             title: 'Folio',
             dataIndex: 'Folio',
             filters: [{
               text: 'Joe',
               value: 'Joe',
             }, {
               text: 'Jim',
               value: 'Jim',
             }, {
               text: 'Submenu',
               value: 'Submenu',
               children: [{
                 text: 'Green',
                 value: 'Green',
               }, {
                 text: 'Black',
                 value: 'Black',
               }],
             }],
             // specify the condition of filtering result
             // here is that finding the name started with `value`
             onFilter: (value, record) => record.Folio.indexOf(value) === 0,
             sorter: (a, b) => a.Folio.length - b.Folio.length,
             sortDirections: ['descend','ascend'],
           }, {
            title: 'Title',
            dataIndex: 'Title',
            onFilter: (value, record) => record.Title.indexOf(value) === 0,
            sorter: (a, b) => a.Title.length - b.Title.length,
            sortDirections: ['descend','ascend']
          }, {
             title: 'Activity',
             dataIndex: 'Activity',
             filters: [{
                text: 'Request process',
                value: 'Request process',
              }, {
                text: 'Open - Request process',
                value: 'Open - Request process',
              }, {
                text: 'Complete - Accepted',
                value: 'Complete - Accepted',
              }],
             defaultSortOrder: 'descend', 
             onFilter: (value, record) => record.Activity.indexOf(value) === 0,
             sorter: (a, b) => a.Activity.length - b.Activity.length,
             sortDirections: ['descend','ascend']
           }, {
             title: 'Datestart',
             dataIndex: 'Datestart',
             
             sorter: (a, b) => a.Datestart.length - b.Datestart.length,
             sortDirections: ['descend', 'ascend'],
           },{
            title: 'Timestart',
            dataIndex: 'Timestart',
            
            sorter: (a, b) => a.Timestart.length - b.Timestart.length,
            sortDirections: ['descend', 'ascend'],
          },{
            title: 'Datestart',
            dataIndex: 'Datestart',
            
            sorter: (a, b) => a.Datestart.length - b.Datestart.length,
            sortDirections: ['descend', 'ascend'],
          },
           {
            title: 'Timeend',
            dataIndex: 'Timeend',
            
            sorter: (a, b) => a.Timeend.length - b.Timeend.length,
            sortDirections: ['descend', 'ascend'],
          },
          {
            title: 'Viewflow',
            dataIndex: 'Viewflow',
 //           render: () => (<Button >
 //             <Description/> </Button> ),
            render:()=>([
            <Button1 />,<Button><Delete /></Button>]),
          },],
           
          data:[{
             key: '1',
             Folio: 'ITSR-2000',
             Title:'E-mail service down',
             Activity: 'Request process',
             Datestart: '25/12/2018',
             Timestart:'10:43',
             Dateend: '-',
             Timeend:'-',
            
           }, {
             key: '2',
             Folio: 'ITSR-2001',
             Title:'Internet not access',
             Activity: 'Open - Request process',
             Datestart: '26/12/2018',
             Timestart:'14:03',
             Dateend: '-',
             Timeend:'',
           }, {
             key: '3',
             Folio: 'ITSR-2002',
             Title:'Password lock',
             Activity: 'Complete - Accepted',
             Datestart: '29/12/2018',
             Timestart:'12:12',
             Dateend: '29/12/2018',
             Timeend:'13:32',
           }, {
             key: '4',
             Folio: 'ITSR-2003',
             Title:'Blue screen',
             Activity: 'Open - Request process',
             Datestart: '5/01/2019',
             Timestart:'9:21',
             Dateend: '-',
             Timeend:'-',
           }]
     }

  
    render(){

        const { classes } = this.props;

    
  return (
    <div>

<AppBar className={classes.headerAppBar} position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                     My Task list
                    </Typography>
                    </Toolbar>
                </AppBar>
         <Table 
         columns={this.state.columns} 
         dataSource={this.state.data}
        onChange={onChange} 
        pagination={false}/>

    </div>
  );
}
}

Tasklist1.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Tasklist1);
