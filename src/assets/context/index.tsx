"use client";
import { createContext, useContext, useState } from "react";

export type navbarStateType = "loading" | "loaded" | "expanded";

export type initialStatusType = {
    hasFinishedLoading: boolean;
    setHasFinishedLoading: React.Dispatch<React.SetStateAction<boolean>>;
    navbarState: navbarStateType;
    setNavbarState: React.Dispatch<React.SetStateAction<navbarStateType>>;
};

const initialStatus: initialStatusType = {
    hasFinishedLoading: false,
    setHasFinishedLoading: () => {},
    navbarState: "loaded",
    setNavbarState: () => {},
};

const Status = createContext<initialStatusType>(initialStatus);

/**
 * Provides a context for managing the loading status of the application.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components that will have access to the context.
 *
 * @returns {JSX.Element} A context provider component that supplies the loading status and its setter function.
 */
export const StatusProvider = ({ children }: { children: React.ReactNode }) => {
    const [hasFinishedLoading, setHasFinishedLoading] = useState<boolean>(
        initialStatus.hasFinishedLoading,
    );
    const [navbarState, setNavbarState] = useState<navbarStateType>(
        initialStatus.navbarState as navbarStateType,
    );

    return (
        <Status.Provider
            value={{
                hasFinishedLoading,
                setHasFinishedLoading,
                navbarState,
                setNavbarState,
            }}
        >
            {children}
        </Status.Provider>
    );
};

/**
 * A hook to access the status context of whether the site has finished loading. This hook must be used within a
 * `StatusProvider` component.
 *
 * @returns {Object} An object containing the status state and its setter.
 * @property {boolean} hasFinishedLoading Indicates whether the app has finished
 *   loading.
 * @property {(finishedLoading: boolean) => void} setHasFinishedLoading Sets
 *   `hasFinishedLoading` to the given value.
 */
export const useStatus = (): initialStatusType => {
    const context = useContext(Status);
    if (!context) {
        throw new Error(
            "useStatus must be used within a StatusProvider component",
        );
    }

    return context;
};
