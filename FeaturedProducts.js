
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
      }, []
      );
    const fetchProducts = () => {
        axios
          .get('https://shoppingapiacme.herokuapp.com/shopping')
          .then((res) => {
            console.log(res);
            setProducts(res.data);
            
          })
          .catch((err) => {
            console.log(err);
            
          });
      };

      const deleteproduct=(id,e)=>{
        
        axios
        .delete(`https://shoppingapiacme.herokuapp.com/shopping/${id}`)
        .then((res) => {
          console.log('Deleted',res)
          fetchProducts();
        })
        .catch((err) => {
          console.log(err);
          
        });
         }
      return (
        <div>
          <h1>Featured Products</h1>
          <div className='item-container'>
            {products.map((product) => (
              <div className='card' key={(product.id)}>
                <img src={product.image} alt='' />
                <h3>{product.brand}</h3>
                <p>{product.item}</p>
                <button onClick={(e)=>deleteproduct(product.id,e)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      );
    };
    export default FeaturedProducts;
  