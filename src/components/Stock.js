import React from 'react'

const Stock = (props) => (
  <div>

    <div onClick={()=> props.handleStock(props.stock)} className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{props.stock.ticker}:{props.stock.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
