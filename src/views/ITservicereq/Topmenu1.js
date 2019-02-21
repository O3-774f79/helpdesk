import React from 'react';
//import @material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Build from "@material-ui/icons/Build";
import Equalizer from "@material-ui/icons/Equalizer";
import Settings from "@material-ui/icons/Settings";
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
});

class Topmenu1 extends React.Component {

    render(){
    
    const { classes } = this.props;

  return (
    <div>
        <Grid container spacing={24}>
        {/* <Grid item xs>
        <Paper className={classes.paper}>
      <Button className={classes.button} fullWidth="true"><Build />Administration</Button>
      </Paper>
      </Grid> */}
      
      <Grid item xs>
      <Paper className={classes.paper}>
      <Button className={classes.button} fullWidth="true"><Settings />Start new IT service request
      </Button>
      </Paper>
      </Grid>
      </Grid>
      
    
    </div>
  );
}
}
Topmenu1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topmenu1);
