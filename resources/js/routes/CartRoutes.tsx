import React                   from 'react';
import useRelativePath         from "../hooks/useRelativePath";
import {SwitchWithTransitions} from "../components/ui/SwitchWithTransition";

export const CartRoutes: React.FC = () => {
    const relative = useRelativePath();

    return <SwitchWithTransitions>
        {/*<Route exact path={relative('/')} children={<CartIndexContainer/>}/>*/}
        {/*<Route exact path={relative('/endereco')} children={<CartAddress/>}/>*/}
    </SwitchWithTransitions>
};
