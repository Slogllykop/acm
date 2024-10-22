import React from "react";
import { Navbar } from "@components";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): React.ReactElement => {
    return (
        <>
            <Navbar />
            <div
            //  className="pt-32"
            >
                {children}
            </div>
        </>
    );
};

export default Layout;
