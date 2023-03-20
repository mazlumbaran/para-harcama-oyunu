import React from "react";

function Basket ({ basketItem }) {
    
    

    return (
        <>
            <div className="basket">
            
            
            <div>
                <span>{basketItem.title} X </span>
                <span>{basketItem.amount}</span>
            </div>
            </div>
        </>        
    )
} 

export default Basket;