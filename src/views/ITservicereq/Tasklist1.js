
import React from 'react';
import { withRouter, } from 'react-router-dom'

// import createBrowserHistory from 'history/createBrowserHistory'

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
// import Build from "@material-ui/icons/Build";
import Delete from "@material-ui/icons/Delete";
// import ITformReq from './ITformReq1';


import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import CardFooter from "components/Card/CardFooter.jsx";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

const styles = theme => ({
  buttonBuild: {
    backgroundColor: "rgb(255, 184, 77)"
  },
  buttonDescription: {
    backgroundColor: "rgb(128, 170, 255)"
  },
  buttonDelete: {
    backgroundColor: "rgb(255, 0, 0)"
  },
  button: {
    margin: theme.spacing.unit,
    minwitdth: 300
  },
  input: {
    display: 'none',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  headerAppBar: {
    backgroundColor: "rgb(179, 179, 255)",
    color: "rgb(0, 0, 0)"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
});

const Button1 = withRouter(({ history }) => (
  //  <Button
  //    onClick={() => { history.push("/admin/ITformReq") }}
  //  ><Description />
  //  </Button>
  <Button color="primary"><Description /> </Button>
))


function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
class Tasklist1 extends React.Component {
  state = {
    columns: [{
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
      defaultSortOrder: 'descend',
      onFilter: (value, record) => record.Folio.indexOf(value) === 0,
      sorter: (a, b) => a.Folio.length - b.Folio.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Country',
      dataIndex: 'Country',
      filters: [{
        text: 'Thailand',
        value: 'Thailand',
      }, {
        text: 'Malaysia',
        value: 'Malaysia',
      }, {
        text: 'Indonisia',
        value: 'Indonisia',
      }, {
        text: 'Singapore',
        value: 'Singapore',
      },],
      onFilter: (value, record) => record.Country.indexOf(value) === 0,
      sorter: (a, b) => a.Country.length - b.Country.length,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      onFilter: (value, record) => record.Title.indexOf(value) === 0,
      sorter: (a, b) => a.Title.length - b.Title.length,
      sortDirections: ['descend', 'ascend']
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
      sortDirections: ['descend', 'ascend']
    }, {
      title: 'Datestart',
      dataIndex: 'Datestart',

      sorter: (a, b) => a.Datestart.length - b.Datestart.length,
      sortDirections: ['descend', 'ascend'],
    }, {
      title: 'Timestart',
      dataIndex: 'Timestart',

      sorter: (a, b) => a.Timestart.length - b.Timestart.length,
      sortDirections: ['descend', 'ascend'],
    }, {
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
      render: () => ([
        <Button1 />, <Button color="secondary"><Delete /></Button>]),
    },],

    data: [{
      key: '1',
      Folio: 'ITSR-2000',
      Country: 'Thailand',
      Title: 'E-mail service down',
      Activity: 'Request process',
      Datestart: '02/01/2019',
      Timestart: '10:43',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer1',

    }, {
      key: '2',
      Folio: 'ITSR-2001',
      Country: 'Singapore',
      Title: 'Internet not access',
      Activity: 'Open - Request process',
      Datestart: '03/01/2019',
      Timestart: '14:03',
      Dateend: '-',
      Timeend: '',
      Engineer: 'Engineer2',

    }, {
      key: '3',
      Folio: 'ITSR-2002',
      Country: 'Malaysia',
      Title: 'Password lock',
      Activity: 'Complete - Accepted',
      Datestart: '05/12/2019',
      Timestart: '12:12',
      Dateend: '06/12/2018',
      Timeend: '13:32',
      Engineer: 'Engineer3',

    }, {
      key: '4',
      Folio: 'ITSR-2003',
      Country: 'Indonisia',
      Title: 'Blue screen',
      Activity: 'Open - Request process',
      Datestart: '07/01/2019',
      Timestart: '14:02',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer4',

    },
    {
      key: '5',
      Folio: 'ITSR-2004',
      Country: 'Indonisia',
      Title: 'No power',
      Activity: 'Open - Request process',
      Datestart: '08/01/2019',
      Timestart: '16:21',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer2',

    },
    {
      key: '6',
      Folio: 'ITSR-2005',
      Country: 'Malaysia',
      Title: 'Blue screen',
      Activity: 'Open - Request process',
      Datestart: '09/01/2019',
      Timestart: '09:21',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer2',

    },
    {
      key: '7',
      Folio: 'ITSR-2006',
      Country: 'Singapore',
      Title: 'Internet not access',
      Activity: 'Complete - Accepted',
      Datestart: '11/01/2019',
      Timestart: '10:34',
      Dateend: '11/01/2019',
      Timeend: '14:05',
      Engineer: 'Engineer1',

    },
    {
      key: '8',
      Folio: 'ITSR-2007',
      Country: 'Thailand',
      Title: 'Password lock',
      Activity: 'Complete - Accepted',
      Datestart: '12/01/2019',
      Timestart: '08:12',
      Dateend: '12/01/2019',
      Timeend: '10:15',
      Engineer: 'Engineer3',

    },
    {
      key: '9',
      Folio: 'ITSR-2008',
      Country: 'Singapore',
      Title: 'Blue screen',
      Activity: 'Open - Request process',
      Datestart: '15/01/2019',
      Timestart: '09:21',
      Dateend: '16/01/2019',
      Timeend: '09:30',
      Engineer: 'Engineer4',

    },
    {
      key: '10',
      Folio: 'ITSR-2009',
      Country: 'Malaysia',
      Title: 'No power',
      Activity: 'Open - Request process',
      Datestart: '20/01/2019',
      Timestart: '13:54',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer1',

    },
    {
      key: '11',
      Folio: 'ITSR-2010',
      Country: 'Malaysia',
      Title: 'No power',
      Activity: 'Open - Request process',
      Datestart: '21/01/2019',
      Timestart: '14:23',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer3',

    },
    {
      key: '12',
      Folio: 'ITSR-2011',
      Country: 'Malaysia',
      Title: 'No power',
      Activity: 'Open - Request process',
      Datestart: '21/01/2019',
      Timestart: '15:41',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer1',

    },
    {
      key: '13',
      Folio: 'ITSR-2002',
      Country: 'Malaysia',
      Title: 'No power',
      Activity: 'Open - Request process',
      Datestart: '22/01/2019',
      Timestart: '09:45',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer2',

    },
    {
      key: '14',
      Folio: 'ITSR-2013',
      Country: 'Malaysia',
      Title: 'No power',
      Activity: 'Open - Request process',
      Datestart: '23/01/2019',
      Timestart: '14:56',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer2',

    },
    {
      key: '15',
      Folio: 'ITSR-2014',
      Country: 'Indonisia',
      Title: 'E-mail service down',
      Activity: 'Open - Request process',
      Datestart: '25/01/2019',
      Timestart: '15:01',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer4',

    },
    {
      key: '16',
      Folio: 'ITSR-2015',
      Country: 'Singapore',
      Title: 'Program cannot open',
      Activity: 'Open - Request process',
      Datestart: '26/01/2019',
      Timestart: '10:43',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer1',

    },
    {
      key: '17',
      Folio: 'ITSR-2016',
      Country: 'Thailand',
      Title: 'No power PC',
      Activity: 'Open - Request process',
      Datestart: '26/01/2019',
      Timestart: '15:05',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer1',

    },
    {
      key: '18',
      Folio: 'ITSR-2017',
      Country: 'Thailand',
      Title: 'E-mail service down',
      Activity: 'Open - Request process',
      Datestart: '27/01/2019',
      Timestart: '13:39',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer2',

    },
    {
      key: '19',
      Folio: 'ITSR-2018',
      Country: 'Singapore',
      Title: 'E-mail service down',
      Activity: 'Open - Request process',
      Datestart: '28/01/2019',
      Timestart: '11:12',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer2',

    },
    {
      key: '20',
      Folio: 'ITSR-2019',
      Country: 'Thailand',
      Title: 'E-mail service down',
      Activity: 'Open - Request process',
      Datestart: '30/01/2019',
      Timestart: '14:09',
      Dateend: '-',
      Timeend: '-',
      Engineer: 'Engineer2',

    },]
  }


  render() {

    const { classes } = this.props;


    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" >
                <h5 className={classes.cardTitleWhite}>User Inbox</h5>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>
                <AppBar className={classes.headerAppBar} position="static">
                  <Toolbar variant="dense">
                    <Typography variant="subtitle1" color="inherit">
                      My Task list
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Table
                  columns={this.state.columns}
                  dataSource={this.state.data}
                  onChange={onChange}
                  pagination={{ pageSize: 10 }}
                />
              </CardBody>
              {/* <CardFooter>

            </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Tasklist1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tasklist1);
