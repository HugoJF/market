import React, {useState}                from "react";
import {Loader}                         from "react-feather";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useDispatch}                    from "react-redux";
import useAsyncEffect                   from "../../hooks/useAsyncEffect";
import {load}                           from "../../google";

export const Splash: React.FC = ({children}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useAsyncEffect(async () => {
        await Promise.all([
            dispatch.auth.me(),
            load(),
        ]);
        setLoading(false);
    }, []);

    return <TransitionGroup className="relative min-h-full">
        <CSSTransition
            key={String(loading)}
            classNames="fade"
            timeout={1000}
        >
            {loading ?
                <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 justify-center">
                    <h1 className="mb-8 text-5xl text-white font-bold">DiCasa</h1>
                    <Loader size={48} className="text-white animate-spin"/>
                </div>
                :
                <>
                    {children}
                </>
            }
        </CSSTransition>
    </TransitionGroup>

};