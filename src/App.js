import React, { useEffect, useState } from "react";
import Header from './components/Header';
import products from './products.json';
import Product from "./components/Product";
import Basket from "./components/Basket";


function App() {

  const [money, setMoney] = useState(10000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState()

  const resetBasket = () => {
    setBasket([])
  }
  

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id ===item.id).price))
    }, 0))
  }, [basket])

  return (
    <>
    <div className="header-container">
      <Header total={total} money={money} />
      </div>
      <div className="container">
      <div className="product-container">
      {products.map(product => (
        <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
      ))}
      </div>
      <h4>Sepet</h4>
      <hr/>
      {basket.map((basketItem) => (<Basket basketItem={basketItem} />))}
      {basket.length > 0 && <button onClick={resetBasket}>Sepeti Sıfırla</button>}
    </div>
    </>
  );
}

export default App;
