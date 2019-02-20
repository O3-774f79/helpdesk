import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';


import Form from './Form';
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

class Admin extends React.Component {

    render(){
    
    const { classes } = this.props;

  return (
    <div>
       <Paper className={classes.paper}>
      <Form />
    </Paper>

    </div>
  );
}
}
Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);
