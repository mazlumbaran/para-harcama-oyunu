import React from "react";
import {moneyFormat} from "../helpers" ;

function Header ({money, total}) {
    return (
        <>
            <div className="header">
                {total >0 && (
                    <h3>Harcayacak ${moneyFormat(money-total)} Paranız Kaldı.</h3>
                ) || (
                    <h3>Harcamak İçin ${moneyFormat(money)} Paranız Var.</h3>
                )}
            </div>
        </>        
    )
} 

export default Header;