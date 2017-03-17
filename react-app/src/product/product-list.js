import React from "react";

import {Link} from "react-router";

// polyfill std api 
import 'whatwg-fetch'; 

export class ProductList extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			products:[]
		}
	}	

	componentDidMount(){
		window.fetch("http://localhost:7070/api/products")
		.then(response => response.json())
		.then(products => {
			console.log(products);
			this.setState({
				products
			});
		})
	}

	render(){
			let productsList = this.state.products.map(
				product =>{
					return <li key={product.id}>
					<Link to={`/products/edit/${product.id}`}> {product.name}</Link></li>
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