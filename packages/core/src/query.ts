class Query {
    key: string;
    deps: string[];
    data: unknown;
    queryFn: () => Promise<any>;
    status: "idle" | "loading" | "success" | "error";
    error: unknown;
    currentResult: unknown;
    // listenrers to synnc with the store and re render react componnets
    listeners: (() => void)[] = []
    constructor(key: string, deps: string[], queryFn: () => Promise<any>) {
        this.key = key;
        this.deps = deps;
        this.queryFn = queryFn;
        this.status = "idle";
        this.error = null;
        this.data = null;
        this.fetch();
    }

    subscribe(listener) {
        this.listeners = [...this.listeners, listener];
        return () => {
          this.listeners = this.listeners.filter(l => l !== listener);
        };
      }

    unsubscribe(listener: () => void) {
        
        return ()  => {
            this.listeners = this.listeners.filter(l => l !== listener);
        }
    }
    async fetch() {

        this.status = "loading";
        try {
            this.data = await this.queryFn();
            this.status = "success";
            this.currentResult  = {
                data: this.data,
                statu: 'success',
                error: null,
                isLoading: false,
                isSuccess: true,
                isError: false,
            }
        } catch (error) {
            this.status = "error";
            this.error = error;
            this.currentResult  = {
                data: this.data,
                statu: 'error',
                error: error,
                isLoading: false,
                isSuccess: false,
                isError: true,
            }
        } finally {
            console.log('**/query fetch finally',this.listeners)
            this.listeners.forEach(listener => listener());
        }
    }

    getData () {
        return this.currentResult
    }


}


export default Query;