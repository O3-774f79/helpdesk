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
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import InputBase from '@material-ui/core/InputBase';

import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Dashboard from "@material-ui/icons/Dashboard";


import Inbox from "@material-ui/icons/Inbox";
import Comment from "@material-ui/icons/Comment";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";


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
    backgroundColor: "rgb(255, 230, 204)",
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
  formControl: {
    minWidth: 200,
  },
  Comment: {
    minWidth:600,
  },
};



class Review extends React.Component {


    state = {
        age: '',}

        
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
    render(){
        
    const { classes } = this.props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h3 className={classes.cardTitleWhite}><Dashboard /> IT Service Request</h3>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
{/*First box*/}            
            <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Reference</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ITSR-2500"
                    className={classes.textField}
                    fullWidth
                    name="Ref"
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Stage</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    className={classes.textField}
                    name="Stage"
                    fullWidth
                    margin="normal"
                    />
                </GridItem>
               
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Create By</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    className={classes.textField}
                    fullWidth
                    name="Createby"
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Start Date</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    className={classes.textField}
                    name="Startdate"
                    fullWidth
                    margin="normal"
                    />
                </GridItem>
               
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>State</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    className={classes.textField}
                    name="State"
                    fullWidth
                    margin="normal"
                    />
                </GridItem>
                </GridContainer>
                </CardBody>
{/*Second box*/}        
           
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
           
            <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                <AppBar className={classes.headerAppBar} position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                  
                    <Inbox /> Service Request
                    </Typography>
                    </Toolbar>
                </AppBar>
                <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Business Unit:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
          <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="age-native-required">Organization wide:</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            name="age"
            inputProps={{
              id: 'age-native-required',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

                </GridItem>
                
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Classicfication</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                

<FormControl required className={classes.formControl}>
          <InputLabel htmlFor="age-native-required">Classicfication:</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            name="age"
            inputProps={{
              id: 'age-native-required',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>




                </GridItem>
                
              </GridContainer>
              
              <GridContainer>
              <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Title:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="Title1"
                    className={classes.textField}
                    type="text"
                    fullWidth
                    name="Title2"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Description:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="4"
          className={classes.Comment}
          margin="normal"
          variant="outlined"
        />
                </GridItem>
               
              </GridContainer>   
{/*break */}
                <List className={classes.root}>
      <ListItem>
        <ListItemText secondary="Request Resolution" />
      </ListItem>
      </List>
              <Divider className={classes.divider} />
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Resolution:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
          id="outlined-multiline-static"
          label="Resolution"
          multiline
          rows="4"
          className={classes.Comment}
          margin="normal"
          variant="outlined"
        />
                </GridItem>
               
              </GridContainer>   
                </CardBody>           
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <AppBar className={classes.headerAppBar}  position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                       <LibraryBooks /> Attrachment
                    </Typography>
                    </Toolbar>
                </AppBar>
                <CardBody>
             
              <GridContainer>
              <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Title:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="Title"
                    className={classes.textField}
                    type="text"
                    fullWidth
                    name="Title2"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                
              </GridContainer>

              <GridContainer>
              <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Content:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
      </Upload>
                </GridItem>
                
              </GridContainer>


                <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Description:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="4"
          className={classes.Comment}
          margin="normal"
          variant="outlined"
        />
                </GridItem>
                
               
              </GridContainer>
              
                </CardBody>           
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <AppBar className={classes.headerAppBar}  position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                       <Comment /> Comment
                    </Typography>
                    </Toolbar>
                </AppBar>
                <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Comment:</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows="4"
          className={classes.Comment}
          margin="normal"
          variant="outlined"
        />
                </GridItem>
               
              </GridContainer>
              <Divider className={classes.divider} />
{/*Last Divider */}
<GridContainer>
 <GridItem xs={12} sm={12} md={2}>
                <h7 className={classes.label}>Decision</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
          <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="age-native-required">Organization wide:</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            name="age"
            inputProps={{   
              id: 'age-native-required',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

                </GridItem>
                </GridContainer>
                </CardBody>           
                </GridItem>
              </GridContainer>
            </CardBody>
            
            <CardFooter>
                <div className={classes.positionButton}>
              <Button className={classes.buttonCancel}>Cancel</Button>
              
              <Button className={classes.buttonSubmit}>Submit</Button>
              
              <Button className={classes.buttonSubmit}>Save</Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
        
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}}

export default withStyles(styles)(Review);
