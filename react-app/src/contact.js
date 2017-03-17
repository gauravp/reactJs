import React from "react";

import {Address} from "./address";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        console.log("Contact cons");

        this.mainOffice = {
            state: 'MH',
            city: 'Pune'
        }

         
        this.state = {
            show: false,
            pincode: 560001
        }

      this.showHide = this.showHide.bind(this);


       
    }

    showHide(event) {
        console.log(event);

        
        //BAD 
        //this.state.show = !this.state.show;
        console.log("show hide called ", this.state.show );

        //this.forceUpdate();
 
        this.setState({
            show: !this.state.show
        })

        
        //this.forceUpdate();

        console.log("state ", this.state );
    }

    componentWillMount() {
        console.log("contact componentWillMount shall be placed")
    }

    //After real DOM Creation in the UI
    componentDidMount() {
        console.log("componentDidMount");
        this.timerHandle = setInterval( () => {
            this.generatePinCode()
        }, 2000);
    }


    componentWillUnmount() {
        clearInterval(this.timerHandle);

        console.log("address componentWillUnmount componnent shall be removed")
    }


    generatePinCode() {
        console.log("pincode called");

        this.setState ({
            pincode: Math.random() * 500000
        })
    }

    render() {
        console.log("render called");

        let title = "Contact Page";

        if (!this.state.show) {
            return ( 
            <div>
            <p> Address is not shown</p>
            <button onClick={this.showHide}> show </button>    
            </div>)
        }

        return (
            <div>
                <h1>{title}</h1>
                
        <button onClick={ () => this.generatePinCode() }>
            Generate
        </button>

                  <button onClick={this.showHide}> Hide </button>  

                <Address title="Main Office"
                         pincode={this.state.pincode}
                         address={this.mainOffice}
                         />

                <Address title="Branch Office" />
            </div>
        );
    }
}