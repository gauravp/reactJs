import React from "react";

import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

 class ProductEdit extends React.Component {


	componentDidMount(){
		window.fetch("http://localhost:7070/api/products/" + this.props.params.id)
		.then(response => response.json())
		.then(product => {
			console.log(product);
			this.props.onInit(product);
			/*this.setState({
				products
			});*/
		})
	}

	componentWillUnmount(){
		this.props.onInit(null);
	}

	render(){

		return(
			<div>
				<h2><br/><br/>Product Edit - {this.props.params.id} </h2>
			
				<p>Name 
				<Field name="name" 
				component="input"
				type="text" />
				</p>
			</div>

			)

	}
}

ProductEdit = reduxForm({
  form: 'product' // a unique name for this form
})(ProductEdit);

let mapStateToProps = (state) => {
	return {
		initialValues:state.productState.product
	}
}


let mapDispatchProps = (dispatch) => {

	return {
		onInit:(product) => dispatch({
			type:"INIT_PRODUCT",
			product
		})
	}
}

ProductEdit = connect(mapStateToProps, mapDispatchProps)(ProductEdit);

export default ProductEdit;
