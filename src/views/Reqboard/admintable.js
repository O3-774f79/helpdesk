import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Butable from './BUtable';
import Classtable from './Classtable';
import Engineertable from './Engineertable';
import Manageadmintable from './Manageadmintable';


// import Assignment from "@material-ui/icons/Assignment";
// import Work from "@material-ui/icons/Work";


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
  },
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
      divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
      },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid xs={12}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
           <Tab label="Business Unit,Classification/Engineers" />
          <Tab label="Application Administrator and Setting" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Butable /><Classtable /><Engineertable /> </TabContainer>
          <TabContainer dir={theme.direction}><Manageadmintable /> </TabContainer>
        </SwipeableViews>
        </Grid>
        </Paper>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);


// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// import GridItem from "components/Grid/GridItem.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import Divider from '@material-ui/core/Divider';

// import BUtable from './BUtable';
// import Classtable from './Classtable';
// import Engineertable from './Engineertable';
// import Topmenuadmin from './Topmenuadmin';
// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//     minwitdth:300
//   },
//   input: {
//     display: 'none',
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   divider: {
//     margin: `${theme.spacing.unit * 2}px 0`,
//   },
  
// });

// class admintable extends React.Component {

//     render(){
    
//     const { classes } = this.props;

//   return (
//     <div>
//        <Paper className={classes.paper}>
//        <Grid xs={12}>
//         <Topmenuadmin />
//        </Grid>
//        <Divider className={classes.divider} />
//         <Grid xs={12}>
//         <BUtable />
//        </Grid>
       
//        {/* <Divider className={classes.divider} /> */}
//        <Grid xs={12}>
//         <Classtable />
//        </Grid>
//        {/* <Divider className={classes.divider} /> */}
//        <Grid xs={12}>
//         <Engineertable />
//        </Grid>
//     </Paper>
//     </div>
//   );
// }
// }
// admintable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(admintable);
