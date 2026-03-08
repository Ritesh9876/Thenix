import Query from "./query";

class QueryCache {
   queries: Map<string, Query> = new Map();
   constructor() {
    this.queries = new Map();
   }

   addQuery(query: Query) {
    if(!this.queries.has(query.key)) 
    this.queries.set(query.key, query);
   }

   getQuery(key: string) {
    return this.queries.get(key);
   }

   removeQuery(key: string) {
    this.queries.delete(key);
   }

   clear() {
    this.queries.clear();
   }
}

export default QueryCache;