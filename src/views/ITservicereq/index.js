import React,{ PureComponent } from "react";

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";

import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';
import Topmenu1 from "./Topmenu1";
import Tasklist1 from "./Tasklist1";
// import ITformReq1 from "./ITformReq1";

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
class index extends PureComponent {

     

     render(){
          
    const { classes } = this.props;
          return(
               <div>
                       <Paper className={classes.paper}>
        <Grid xs={12}>
        <Topmenu1 />
       
       
       </Grid>
       
       <Grid xs={12}>
      
       <Divider className={classes.divider} />
                  
                      <Tasklist1 />
                    
                    </Grid>
                    </Paper>
                    {/* <ITformReq1 /> */}
               </div>
          )
     }
} 
index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(index);