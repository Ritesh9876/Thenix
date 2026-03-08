import Query from "./query";
import QueryCache from "./queryCache";
class QueryClient {
    queryCache: QueryCache;
    constructor() {
        this.queryCache = new QueryCache();
    }

    addQuery(query: Query) {
        this.queryCache.addQuery(query);
    }

    getQuery(key: string) {
        return this.queryCache.getQuery(key);
    }
}

export default QueryClient;