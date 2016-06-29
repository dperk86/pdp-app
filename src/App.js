require('./app.scss');
import React from 'react'

export default React.createClass({
  render() {
  	const { product } = this.props;
  	const name = product.names.short;
  	const description = product.descriptions.short;
  	const image = product.media.primaryImage;
    return (
    	<div className="product-content">
    		<img 
    			src={image.url}
    			alt={image.altText}
    		/>
    		<h1>{name}</h1>
    		<p>{description}</p>
    	</div>
    );
  }
})
