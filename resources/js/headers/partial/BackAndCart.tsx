import React                       from 'react';
import {ChevronLeft, ShoppingCart} from "react-feather";
import {useHistory}                from "react-router";
import {useCart}                   from "../../selectors";
import {Cart}                      from "./Cart";

export const BackAndCart: React.FC = () => {
    const history = useHistory();

    return <div className="flex justify-between items-center px-6">
        <ChevronLeft size={24} className="cursor-pointer" onClick={history.goBack}/>
        <Cart/>
    </div>
};
