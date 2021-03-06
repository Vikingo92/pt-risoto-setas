import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingActions';

import { ProductDiv, Details, Title, Description, Price, Add, Options } from './styles/Product.Styled';

const Product = ({ productData, addToCart }) => {
    return (

        <ProductDiv>
            <div >
                <Details >
                    <Title>{productData.product}</Title>
                    <Description>Items: {productData.items}</Description>
                    <Description>Cantidad: {productData.quantity}</Description>
                    <Description>{productData.brand}</Description>
                    <Price >$ {productData.price}</Price>
                </Details>

                <Options>
                    <Add onClick={() => addToCart(productData.id)}>
                        Añadir
                    </Add>
                </Options>
            </div>
        </ProductDiv>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(null, mapDispatchToProps)(Product)
