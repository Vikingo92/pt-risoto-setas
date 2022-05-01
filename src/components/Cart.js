import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { CartDiv, Content, Item, Price, Button } from './styles/Cart.Styled';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Cart = ({ cart }) => {

    const navigate = useNavigate()

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })

        setTotalPrice(price)
        setTotalItems(items)

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems, navigate])

    const showAlert = () => {
        Swal.fire({
            title: "Transacción exitosa",
            text:"Gracias por su compra.",
            icon: "success",
            confirmButtonText: "OK",
        });
    }

    return (
        <CartDiv>
            <Item>
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item} />
                ))}
            </Item>
            <Content>
                <h3>Orden de compra</h3>
                <Price>
                    <p>Items: {totalItems} </p>
                    <p>Subtotal: {(totalPrice.toFixed(2)) / (1,1)} €</p>
                    <p>Gastos de envio: 7,00 €</p>
                    <Price>Total ${((totalPrice.toFixed(2)) / (1,1)) + 7} €</Price>
                </Price>
                <Button onClick={showAlert}>
                    Comprar: ${((totalPrice.toFixed(2)) / (1,1)) + 7} €
                </Button>
            </Content>
        </CartDiv >
        // iva = 10%
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)

 // iva = 10% / 100 = 0.1
//  1 + 0.1 = 1,1
//  Subtotal = totalPrice / 1.1
// IVA = totalPrice - Subtotal