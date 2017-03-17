import React from "react";

export class ProductEdit extends React.Component {

	render(){

		return(
			<div>
				<h2><br/><br/>Product Edit - {this.props.params.id} </h2>
			</div>

			)

	}
}