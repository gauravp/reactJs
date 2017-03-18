let initialValue = {
	products:[],
	product:null,
	loading:false
}

export default function (state = initialValue, action){

	switch(action.type){

		case "INIT": return {
			product: state.product,
			products:action.products,
			loading: state.loading
		};
	
		case "DELETE_PRODUCT":{
		return {
			product:state.product,
			products: state.products.filter(
				product => product.id != action.id),
			loading: state.loading
		};
	}

	case "INIT_PRODUCT":{
			return {
				product:action.product,
				products:state.products,
				loading: state.loading

			}
	}

	case "LOADING" : {
		return {
			product : state.product,
			products: state.products,
			loading: action.status
		}
	}

	default: {
		return state;
	}
	}

}  


/*export default function (state = [], action){

	switch(action.type){

		case "INIT": return action.products;
	
		case "DELETE_PRODUCT":{
		return state.filter( product => product.id != action.id) 
	}

	default: {
		return state;
	}
	}

}  */