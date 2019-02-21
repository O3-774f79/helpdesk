import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Divider from '@material-ui/core/Divider';

import BUtable from './BUtable';
import Classtable from './Classtable';
import Engineertable from './Engineertable';
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
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  
});

class admintable extends React.Component {

    render(){
    
    const { classes } = this.props;

  return (
    <div>
       <Paper className={classes.paper}>
        <Grid xs={12}>
        <BUtable />
       </Grid>
       
       {/* <Divider className={classes.divider} /> */}
       <Grid xs={12}>
        <Classtable />
       </Grid>
       {/* <Divider className={classes.divider} /> */}
       <Grid xs={12}>
        <Engineertable />
       </Grid>
    </Paper>
    </div>
  );
}
}
admintable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(admintable);
