import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import { Product } from '../interfaces/interfaces';
// import { ProductCard } from "../components/ProductCard"
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {/* <ProductCard 
              product={product}
              className="bg-dark text-white"
            >
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title className="text-bold" title={'hola'}/>
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard> */}

            {
              products.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  className="bg-dark text-white"
                  value={ shoppingCart[product.id]?.count || 0 }
                  onChange={ (event) => onProductCountChange(event) }
                >
                  <ProductImage className="custom-image"/>
                  <ProductTitle  className="text-bold" activeClass="active"/>
                  <ProductButtons className="custom-buttons"/>
                </ProductCard>
              ))
            }            
        </div>

        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard 
                key={key}
                product={product}
                className="bg-dark text-white"
                style={{ width: '100px'}}
                value={ product.count }
                onChange={ onProductCountChange }
              >
                <ProductImage className="custom-image"/>
                <ProductButtons 
                  className="custom-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              </ProductCard>
            ))
          }          
        </div>
    </div>
  )
}
