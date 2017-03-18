import React from "react";

import {Link} from "react-router";

// polyfill std api 
import 'whatwg-fetch'; 
import {connect} from "react-redux";

class ProductList extends React.Component {

	constructor(props){
		super(props);

		/*this.state = {
			products:[]
		}*/
	}	

	componentDidMount(){
		this.props.onLoad(true);
		window.fetch("http://localhost:7070/delayed/api/products")
		.then(response => response.json())
		.then(products => {
			console.log(products);
			this.props.onInit(products);
			this.props.onLoad(false);
			/*this.setState({
				products
			});*/
		})
	}

	render(){
		if(this.props.loading){
			return <h1><br/>Loading Products </h1>
		}


			let productsList = this.props.products.map(
				product =>{
					return <li key={product.id}>
					<Link to={`/products/edit/${product.id}`}> {product.name}</Link>
<button onClick={ () => this.props.onDelete(product.id)} > Delete </button>
					</li>
				} )
		return (
				<div>
					<h2><br/><br/>Products</h2>
					<ul>{productsList}
					</ul>
				</div>
			)
	}
}

let mapStateToProps = (state) => {

	return{
		products:state.productState.products,
		loading: state.productState.loading
	}
}

let mapDispatchToProps = (dispatch) => {
	return {

		onInit: (products) => dispatch({
			type:"INIT",
			products
		}),

		onDelete:(id) => dispatch({
			type:"DELETE_PRODUCT",
			id
		}),
		onLoad : (status) => dispatch({
			type: "LOADING",
			status
		})
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(ProductList);