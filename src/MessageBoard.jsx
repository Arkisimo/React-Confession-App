import React, { Component } from 'react';
import {Col, Panel } from 'react-bootstrap';

class MessageBoard extends Component {
    
    render(){
        return (
            
            <div>
                <Col xs={4} xsOffset={4}>
                    <h1 style={{color: "white", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}}> Confessions </h1>
                </Col>
                
                <Col xs={6} xsOffset={3}>
                    <Panel style={{backgroundColor: "#cd32cd", boxShadow: "5px 5px grey", boxShadow: "10px 10px grey"}}>
                    <p>
                    Confession ID: 1234567890 <br/>
                    ------------------------------- <br/>
                    Lorem ipsum dolor sit amet, vel porro graecis ne. Ut debitis deserunt sit, et mea <br/>
                    nonumy scaevola, facer cetero appellantur eu mei. Labore voluptatibus est in, error <br/>
                    omittantur ut his. Quaeque euripidis definitionem pro ut, ut ius libris ridens cotidieque<br/>
                    <hr/>
                    Published: 1/1/2003, By: John Smith
                    </p>
                    
                    
                    </Panel>
                </Col>
                
                    <Col xs={6} xsOffset={3}>
                     <Panel style={{backgroundColor: "#cd32cd", boxShadow: "5px 5px grey", boxShadow: "10px 10px grey"}}>
                    <p>
                    Confession ID: 1234567890 <br/>
                    ------------------------------- <br/>
                    Lorem ipsum dolor sit amet, vel porro graecis ne. Ut debitis deserunt sit, et mea <br/>
                    nonumy scaevola, facer cetero appellantur eu mei. Labore voluptatibus est in, error <br/>
                    omittantur ut his. Quaeque euripidis definitionem pro ut, ut ius libris ridens cotidieque<br/>
                    <hr/>
                    Published: 1/1/2003, By: John Smith
                    </p>
                    
                    
                    </Panel>
                </Col>
                
                    <Col xs={6} xsOffset={3}>
                     <Panel style={{backgroundColor: "#cd32cd", boxShadow: "5px 5px grey", boxShadow: "10px 10px grey"}}>
                    <p>
                    Confession ID: 1234567890 <br/>
                    ------------------------------- <br/>
                    Lorem ipsum dolor sit amet, vel porro graecis ne. Ut debitis deserunt sit, et mea <br/>
                    nonumy scaevola, facer cetero appellantur eu mei. Labore voluptatibus est in, error <br/>
                    omittantur ut his. Quaeque euripidis definitionem pro ut, ut ius libris ridens cotidieque<br/>
                    <hr/>
                    Published: 1/1/2003, By: John Smith
                    </p>
                    
                    
                    </Panel>
                </Col>
            
            </div>

            
            );
    }
    
}

export default MessageBoard;