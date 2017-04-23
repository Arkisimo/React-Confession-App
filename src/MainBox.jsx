import React, { Component } from 'react';
import {Col, Jumbotron, FormGroup, FormControl, ControlLabel, Button, Row  } from 'react-bootstrap';
import aja from 'aja';

class MainBox extends Component {
    
    constructor(){
        super()
        this.state ={
            name: '',
            text: ''
        }
    }
    
    handleNameChange(e){
        this.setState({name: e.target.value});
        console.log(e.target.value)
        
        
        
    }
    
      handleTextChange(e){
        this.setState({text: e.target.value});
        console.log(e.target.value)
        
        
        
    }
    
    submitConfession(){
        
        console.log("submitting");
        var name = this.state.name;
        var text = this.state.text;
        var _this = this;
        
        aja()
          .method('post')
          .url('http://localhost:8080/confession')
          .data({name: name, text: text})
          .on('success', function(response){
              
              _this.setState({name: '', text: ''})
              alert("Comment Sucessfully Stored XD! name: " + name + ", text: " + text);
              //well done
          })
          .go();
    }
    
    render(){
        return (
            
            <div>
                <Row>
                    <Col xs={4} xsOffset={4}>
                        <img style={{width: "100%",  boxShadow: "10px 10px #cd32cd", borderRadius: "40px" }} src="https://img.memesuper.com/0b6f33f0b82165a87975ed2b34231e42_-should-love-dank-memes-dank-memes-logo_564-564.jpeg"/>
                    </Col>
               </Row>
               <Row>
               <br /><br /><br />
               </Row>
               <Row>
                    <Col xs={6} xsOffset={3}>
                       <Jumbotron style={{backgroundColor: "#cd32cd", paddingLeft: "10px", paddingRight: "10px", borderRadius: "40px", boxShadow: "10px 10px grey"}}>
                            <FormGroup 
                                validationState={this.state.name.length <= 1 ? 'error' : 'success'}
                                controlId="formControlsTextarea">
                                <ControlLabel> <h3 style={{color: "#32cd32",  }}> Put ur name here ↓  </h3> </ControlLabel>
                                <FormControl value={this.state.name} 
                                             onChange={this.handleNameChange.bind(this)} 
                                             componentClass="textarea" 
                                             placeholder="name" />
                            </FormGroup>
                        
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel> <h2 style={{color: "#32cd32"}}> comment </h2> </ControlLabel>
                                <FormControl value={this.state.text} 
                                             onChange={this.handleTextChange.bind(this)} 
                                             componentClass="textarea" 
                                             placeholder="comment" />
                            </FormGroup>
                        
                            <center>
                                <Button
                                onClick={this.submitConfession.bind(this)}
                                bsStyle="danger" bsSize="large">Postarino</Button>
                            </center>
                       </Jumbotron>
                    </Col>
                </Row>    
            </div>
            
            );
    }
    
}

export default MainBox;