import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const products =['Parliament',"Sobranie","Marlboro","Phillip Morris", 'Kent', "Winston"]
const ShoppingCart = (props) =>{
  const [productList,setProduct]= useState(products)
  const [cartItems,setCartItems]= useState([])
  const handleClick = (product)=>{
    setCartItems((prevCart)=>{
      return [...prevCart,product]
    })
  }
  const handlRemove = (productIndex)=>{
    const newCart = cartItems.filter((product,index)=>{
      return productIndex !== index
    })
    setCartItems(newCart)
  }
  return (
    <div className='mainDiv'>
      <h1 className='h1'>{props.title}</h1>
      {productList.map((product,index)=>{
        return <button className='button' key={index} onClick={()=>handleClick(product)}>{product}</button>
      })}
      <h2 className='h2'>My Products (click to delete)</h2>
      <ul>
        {cartItems.map((cartItem,index)=>{
          return <li className='li' key={index} onClick={()=>handlRemove(index)}>{cartItem}</li>
        })}
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShoppingCart title='CHOOSE CIGARETTE:' />);

