import React    from "react";
import {Menu}   from "../components/Menu";
import {Header} from "./Header";


export const Overlay: React.FC = ({children}) => {
    return <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col min-h-screen max-h-screen">
        {/* Header */}
        <Header/>

        {/* Content */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
            {children}
        </div>

        {/* Bottom */}
        <Menu/>
    </div>
};