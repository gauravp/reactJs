import React from "react";

export class Address extends React.Component {

    componentWillMount() {
        console.log("address componentWillMount shall be placed")
    }

    //After real DOM Creation in the UI
    componentDidMount() {
        console.log("componentDidMount");
    }


    componentWillUnmount() {
        console.log("address componentWillUnmount componnent shall be removed")
    }

    

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                 <span>Pincode: {this.props.pincode}</span>

                 {
                    this.props.address && 
                        <div>
                        <span> City:   {this.props.address.city}
                        </span>

                        <span> State:   {this.props.address.state}
                        </span>
                        </div>
                 }
 
            </div>
        )
    }
}