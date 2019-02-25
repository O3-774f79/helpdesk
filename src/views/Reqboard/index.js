import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';

import Topmenu from './Topmenu';
import Manageboard from './Manageboard';


import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import CardFooter from "components/Card/CardFooter.jsx";

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

class Reqboard extends React.Component {

    render(){
    
    const { classes } = this.props;

  return (
    <div>
       {/* <Paper className={classes.paper}> */}
        <Grid xs={12}>
        <Card>
        <CardHeader color="primary" >
              <h5 className={classes.cardTitleWhite}>Admin Inbox</h5>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
       <Topmenu />
       </CardBody>
       </Card>
       </Grid>
       <Grid xs={12}>
      
       <Divider className={classes.divider} /> 
   {/* <Paper className={classes.paper}> */}
   <Card>
    <Manageboard />
    {/* </Paper> */}
    </Card>
    </Grid>
    
    {/* </Paper> */}
    {/* {/* <Review /> */}
    </div>
  );
}
}
Reqboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reqboard);
