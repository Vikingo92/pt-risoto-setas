import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { Div, Divtitulo } from './styles/Products.Styled'

const Products = ({ ingredients }) => {

  return (
    <>
      <Divtitulo>
        <h2>Risotto de setas (vegano)</h2>
        <p>Costo de envio 7</p>
      </Divtitulo>
      <Div>
        {ingredients.map(p => (
          <Product key={p.id} productData={p} />
        ))}
      </Div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.shop.ingredients,
  }
}

export default connect(mapStateToProps)(Products);
