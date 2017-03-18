import React from "react";
import {Link} from "react-router";


export default class Home extends React.Component {
	render(){
		return <h2><br/><br/><br/><hr/><marquee direction="right"> Home Page </marquee><hr/></h2>
	}

}

export class Layout extends React.Component {
	render(){
		return(
			<div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/products">Product</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/calc">Calc</Link>
					<Link to="/calculator">Calculator</Link>
				</nav>
				<div> 
					{this.props.children}
				</div>
			</div>
			)
	}
}