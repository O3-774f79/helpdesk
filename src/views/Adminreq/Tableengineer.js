
import React from 'react';
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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
        backgroundColor: "rgb(51, 204, 51)",
        color: "rgb(0, 0, 0)"
      },
  });

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }
class Tableengineer extends React.Component {
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
             title: 'TaskStart',
             dataIndex: 'TaskStart',
             
             sorter: (a, b) => a.TaskStart.length - b.TaskStart.length,
             sortDirections: ['descend', 'ascend'],
           },
           {
            title: 'TaskEnd',
            dataIndex: 'TaskEnd',
            
            sorter: (a, b) => a.TaskEnd.length - b.TaskEnd.length,
            sortDirections: ['descend', 'ascend'],
          },
          {
            title: 'Viewflow',
            dataIndex: 'Viewflow',
          
          },],
           
          data:[{
             key: '1',
             Folio: 'ITSR-2000',
             Title:'E-mail service down',
             Activity: 'Request process',
             TaskStart: '11:11',
             TaskEnd: '-',
             Viewflow:'Open',
           }, {
             key: '2',
             Folio: 'ITSR-2001',
             Title:'Internet not access',
             Activity: 'Complete - Accepted',
             TaskStart: '11:38',
             TaskEnd: '12:00',
             Viewflow:'Open',
           }, {
             key: '3',
             Folio: 'ITSR-2002',
             Title:'Password lock',
             Activity: 'Open - Request process',
             TaskStart: '12:12',
             TaskEnd: '-',
             Viewflow:'Open',
           }, {
             key: '4',
             Folio: 'ITSR-2003',
             Title:'Blue screen',
             Activity: 'Open - Request process',
             TaskStart: '14:42',
             TaskEnd: '-',
             Viewflow:'Open',
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
         <Table columns={this.state.columns} dataSource={this.state.data} onChange={onChange} pagination={false}/>

    </div>
  );
}
}

Tableengineer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Tableengineer);
