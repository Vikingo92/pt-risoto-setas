import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions/shoppingActions';
import { DivDetail, Title, Description, Price, Button, Card } from './styles/SingleItem.Styled';

const SingleItem = ({ currentItem, addToCart }) => {
    return (
        <DivDetail>
            <Card>
                <Title>{currentItem.product}</Title>
                <h5>Acerca de este artículo.</h5>
                <Description>{currentItem.items}</Description>
                <p>{currentItem.quantity}</p>
                <Price>Precio $ {currentItem.price}</Price>
                <Button onClick={() => addToCart(currentItem.id)}>Añadir </Button>
            </Card>
        </DivDetail>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)