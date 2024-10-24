import React from "react";
import { Navbar } from "@components";
import { StatusProvider } from "@/assets/context";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
    return (
        <StatusProvider>
            <Navbar />
            {children}
            <div
            //  className="pt-32"
            ></div>
        </StatusProvider>
    );
};

export default Layout;
