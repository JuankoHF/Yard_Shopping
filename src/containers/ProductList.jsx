import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';
import {  Dimmer, Loader } from "semantic-ui-react";

const ProductList = () => {
	const { loading, article } = useGetProducts('http://api.escuelajs.co/api/v1/products');

	if (loading || !article) {
		return (
		  <Dimmer active inverted>
			<Loader inverted>Loading Articles</Loader>
		  </Dimmer>
		);
	}
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{article.map((product, id) => (
					<div key={id}>
						<ProductItem product={product}  />
					</div >	
				))}
			</div>
		</section>
	);
}

export default ProductList;