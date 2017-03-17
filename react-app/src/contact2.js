import React from "react";

import {Address} from "./address";

export default class Contact extends React.Component {

	constructor(props){
		super(props);
		console.log("Contact cons");

		this.mainOffice = {
			state: 'MH',
			city: 'Pune'
		}

		this.state = {
			show: false
		}

		this.showHide  = this.showHide.bind(this);
	
		
	}
	showHide() {
			console.log("show hide called");
			//this.state.show = !(this.state.show) ;
			// this.forceUpdated();
				this.setState({
			show:!this.state.show
		});
		}

	render(){
		let title = "Contact Page";
		if(!this.state.show){
			return  (<div> 
				<p> Address is not shown </p>
				<button onClick = {this.showHide}>show
				</button>
				</div>
				)
		}
		return (
				<div>
					<h1>{title}</h1>
					<Address title = "Main Office" />
					<Address title = "Branch Office"  pincode="56010" address={this.mainOffice}/>
					<button onClick = {this.showHide}>Hide
				</button>
				</div>
			);
	}
}	