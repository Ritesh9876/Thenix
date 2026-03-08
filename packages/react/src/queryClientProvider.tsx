import *  as React from "react";
import { QueryClient } from "@thenix/core";


export const QueryClientContext = React.createContext<QueryClient | undefined>(undefined);


export const useQueryClient = (queryClient?: QueryClient) => {
    const queryclient = React.useContext(QueryClientContext);

    if(!queryClient) {
        return queryclient
    }

    if(!queryclient) {
        throw new Error("No Query Client Found")
    }
    return queryclient

}
export type QueryClientProviderProps = {
    client: QueryClient;
    children?: React.ReactNode;
}

export const QueryClientProvider = ({
    children,
    client
}: QueryClientProviderProps) => {

    return (
        <QueryClientContext.Provider value={client}>
        {children}
    </QueryClientContext.Provider>
    )
}


