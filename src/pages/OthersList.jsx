import React from 'react';
import { Dimmer, Loader } from "semantic-ui-react";
import useGetProducts from '../hooks/useGetProducts';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const OthersList = () => {
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
					<>
						{(product.category.name === "Others") &&
							<div key={id}>
								<ProductItem product={product}  />
							</div >	
						}
							
					</>
                    
				))}
			</div>
			
		</section>
	);
}

export default OthersList;