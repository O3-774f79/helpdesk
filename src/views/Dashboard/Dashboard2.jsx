import React from "react";
import PropTypes from "prop-types";

//import ant Design component
import 'antd/dist/antd.css';
import './index.css';
import { Modal, } from 'antd';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// import Assessment from "@material-ui/icons/Assessment";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import Table from "components/Table/Table.jsx";
// import Tasks from "components/Tasks/Tasks.jsx";
// import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
// import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from '@material-ui/core/Button';

// import { bugs, website, server } from "variables/general.jsx";

import {
  // countrytask2,
  dailySalesChart2,
  emailsSubscriptionChart2,
  completedTasksChart2
} from "variables/charts2.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Dashboard3 from "./Dashboard3";

// const styles = theme => ({
//   margin: {
//    margin:30
//   },
// }
// )



class Dashboard2 extends React.Component {
  state = {
    value: 0,
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  ///---1
  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  }

  handleOk1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }

  handleCancel1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }
///---2
 
showModal2 = () => {
  this.setState({
    visible2: true,
  });
}

handleOk2 = (e) => {
  console.log(e);
  this.setState({
    visible2: false,
  });
}

handleCancel2 = (e) => {
  console.log(e);
  this.setState({
    visible2: false,
  });
}

 ///---3
showModal3 = () => {
  this.setState({
    visible3: true,
  });
}

handleOk3 = (e) => {
  console.log(e);
  this.setState({
    visible3: false,
  });
}

handleCancel3 = (e) => {
  console.log(e);
  this.setState({
    visible3: false,
  });
}
///---4
 
showModal4 = () => {
  this.setState({
    visible4: true,
  });
}

handleOk4 = (e) => {
  console.log(e);
  this.setState({
    visible4: false,
  });
}

handleCancel4 = (e) => {
  console.log(e);
  this.setState({
    visible4: false,
  });
}

  
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={countrytask2.data}
                //   type="Line"
                type="Bar"
                  options={countrytask2.options}
                  listener={countrytask2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Monthly Task</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}> */}
                    {/* <ArrowUpward className={classes.upArrowCardCategory} /> 55% */}
                  {/* </span>{" "} */}
                  {/* increase in today sales. */}
                {/* </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          </GridContainer> */}
          

        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  {/* <Icon>content_copy</Icon> */}
                  {/* <Icon>looks_one</Icon>  */}
                  <Icon>public</Icon> 
                </CardIcon>
                <p className={classes.cardCategory}>Thailand</p>
                <h3 className={classes.cardTitle}>
                  25 <small>Tasks</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  {/* <Assessment >
                    <Warning />
                  </Assessment> */}
                  {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                  <Button type="default" onClick={this.showModal1}>
                  More Detail
        </Button>
        <Modal
          title="Thailand"
          width="70%"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
          footer={false}
        >
         <Dashboard3 />
        </Modal>  
                  {/* </a> */}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  {/* <Store /> */}
                  {/* <Icon>looks_two</Icon> */}
                  <Icon>public</Icon> 
                </CardIcon>
                <p className={classes.cardCategory}>Malaysia</p>
                <h3 className={classes.cardTitle}>49 <small>Tasks</small></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  {/* <Assessment /> */}
                  {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                  <Button type="default" onClick={this.showModal2}>
                  More Detail
        </Button>
        <Modal
          title="Malaysia"
          width="70%"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
          footer={false}
        >
         <Dashboard3 />
        </Modal>  
                  {/* </a> */}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  {/* <Icon>info_outline</Icon> */}
                  {/* <Icon>looks_3</Icon>  */}
                  <Icon>public</Icon> 
                </CardIcon>
                <p className={classes.cardCategory}>Indonisia</p>
                <h3 className={classes.cardTitle}>75 <small>Tasks</small></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  {/* <Assessment /> */}
                  {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                  <Button type="default" onClick={this.showModal3}>
                  More Detail
        </Button>
        <Modal
          title="Indonisia"
          width="70%"
          visible={this.state.visible3}
          onOk={this.handleOk3}
          onCancel={this.handleCancel3}
          footer={false}
        >
         <Dashboard3 />
        </Modal>  
                  {/* </a> */}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  {/* <Accessibility /> */}
                  {/* <Icon>looks_4</Icon>  */}
                  <Icon>public</Icon> 
                </CardIcon>
                <p className={classes.cardCategory}>Singapore</p>
                <h3 className={classes.cardTitle}>27 <small>Tasks</small></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  {/* <Assessment /> */}
                  {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                  <Button type="default" onClick={this.showModal4}>
                  More Detail
        </Button>
        <Modal
          title="Singapore"
          width="70%"
          visible={this.state.visible4}
          onOk={this.handleOk4}
          onCancel={this.handleCancel4}
          footer={false}
        >
         <Dashboard3 />
        </Modal>  
                  {/* </a> */}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart2.data}
                //   type="Line"
                type="Bar"
                  options={dailySalesChart2.options}
                  listener={dailySalesChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Classification</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    {/* <ArrowUpward className={classes.upArrowCardCategory} /> 55% */}
                  </span>{" "}
                  {/* increase in today sales. */}
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart2.data}
                  type="Bar"
                  options={emailsSubscriptionChart2.options}
                  responsiveOptions={emailsSubscriptionChart2.responsiveOptions}
                  listener={emailsSubscriptionChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Type</h4>
                <p className={classes.cardCategory}>
                  {/* Last Campaign Performance */}
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart2.data}
                //   type="Line"
                type="Bar"
                  options={completedTasksChart2.options}
                  listener={completedTasksChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>All Tasks Stat</h4>
                <p className={classes.cardCategory}>
                  {/* Last Campaign Performance */}
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

{/* Copy Graph here */}
{/* 
<GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart2.data}
                  type="Line"
                  options={dailySalesChart2.options}
                  listener={dailySalesChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart2.data}
                  type="Bar"
                  options={emailsSubscriptionChart2.options}
                  responsiveOptions={emailsSubscriptionChart2.responsiveOptions}
                  listener={emailsSubscriptionChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart2.data}
                  type="Line"
                  options={completedTasksChart2.options}
                  listener={completedTasksChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
 */}


{/* End of copy */}
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer> */}
      </div>
    );
  }
}

Dashboard2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard2);
