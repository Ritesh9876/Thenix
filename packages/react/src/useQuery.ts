import { Query } from "@thenix/core";
import { useQueryClient } from "./queryClientProvider";
import * as React from 'react';

export type UseQueryProps = {
    queryKey: string;
    queryFn: () => Promise<unknown>;
}

export const useQuery = ({ queryKey, queryFn }: UseQueryProps) => {

    const queryClient = useQueryClient();
    if(!queryClient) {
        throw new Error("No Query Client Found");
    }
    console.log('**/useQuery',queryClient)
    const query =queryClient.getQuery(queryKey) || new Query(queryKey, [], queryFn);

   
    queryClient?.addQuery(query);

    React.useSyncExternalStore(
        React.useCallback((onStoreChange) => {
            console.log('**/useQuery useSyncExternalStore',onStoreChange)
            // onStoreChange();
           if(query.listeners.length ===0) 
             query.subscribe(onStoreChange);

             return(
           query.listeners.length ===0 ? () => {}:
            query.unsubscribe(onStoreChange))
        }, [query]),
        () => {
            return query.getData();
    }
    // , () => {
    //    return query.getData();
    // }
)

    return query.getData();

}