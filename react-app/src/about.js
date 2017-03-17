import React from "react";

export class About extends React.Component {

		constructor(props){
		super(props);
		console.log("About cons");
		this.title = "About Page 1";

		this.state = {
			members: ['Nila', 'Krish', 'Krish'],
			name : 'hello'
		}

		this.addMember = this.addMember.bind(this);
		this.nameChange = this.nameChange.bind(this);
	}


	addMember(){
		let memberId =Math.ceil(Math.random() * 100);
		let memberName  = "Member "+ this.name;
		this.name = "";
		//this.state.members.push(memberName);
	
	this.setState({
		members : [...this.state.members, memberName]
	});

	/*this.setState ({
		members : this.state.members
	});*/
	}


	nameChange(event){
		console.log("values changed ", event.target.value)
		this.name = event.target.value;
		this.setState({
			name: event.target.value
		});
	}

	render(){

		let memberElements = this.state.members.map((member, index)=> <li key={index}> {member} </li>);
		return(
				<div> 
				<h1>{this.title}</h1>
				<ul>{memberElements}
				</ul>
				<button onClick = {this.addMember}>
				Add Member
				</button>
				<input name="name" onChange={this.nameChange} value = {this.state.name} />
				 </div>
				
				
			)
	}
}