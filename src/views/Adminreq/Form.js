import React from "react";

// import antd component
import 'antd/dist/antd.css';
import { Upload, Icon } from 'antd';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Inbox from "@material-ui/icons/Inbox";
import Comment from "@material-ui/icons/Comment";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Dashboard from "@material-ui/icons/Dashboard";


const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
};



const styles = {
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
  },
  label:{
    float: "right",
    marginTop: 30
  },
  headerAppBar:{
    backgroundColor: "rgb(51, 204, 51)",
    color: "rgb(0, 0, 0)"
  },
  buttonSubmit: {
    backgroundColor: "rgb(51, 204, 51)",
    color: "rgb(0, 0, 0)",
  },
  positionButton: {
    display:"flex",
    justifyContent:"center"
  },

  resize:{
    fontSize:10,
    lineHeight:2
  },
  formControl: {
    minWidth: 200,
  },
  Comment: {
    minWidth:600,
  },

  buttonCancel: {
    backgroundColor: "rgb(230, 230, 230)",
    color: "rgb(0, 0, 0)",
  },
  buttonUpload: {
    backgroundColor: "rgb(153, 204, 255)",
    color: "rgb(0, 0, 0)",
  },
 
 

};

class Form extends React.Component {

  
  state = {
    age: '',}

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){

  

  

    const { classes } = this.props;

  return (

    <div>
      <GridContainer> <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h3 className={classes.cardTitleWhite}><Dashboard />Administration :IT Service Request</h3>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            </Card>
            </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
           
            <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <AppBar className={classes.headerAppBar} position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                  
                    <Inbox />
                    </Typography>Business Unit
                    </Toolbar>
                </AppBar>
                <CardBody>
              
                    
                </CardBody>           
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <AppBar className={classes.headerAppBar}  position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                       <LibraryBooks />Classifications
                    </Typography>
                    </Toolbar>
                </AppBar>
                <CardBody>
         
              
                </CardBody>           
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <AppBar className={classes.headerAppBar}  position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                       <Comment />Engineers
                    </Typography>
                    </Toolbar>
                </AppBar>
                <CardBody>
                <GridContainer>
                
               
              </GridContainer>
            
                </CardBody>           
                </GridItem>
              </GridContainer>
            </CardBody>
            
            <CardFooter>
                <div className={classes.positionButton}>
              <Button className={classes.buttonCancel}>Cancel</Button>
              </div>
              <div className={classes.positionButton}>
              <Button className={classes.buttonSubmit}>Submit</Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
}
export default withStyles(styles)(Form);
