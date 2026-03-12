

export type OperationLifeCycleStage = "idle" | "loading" | "success" | "error" | "stale";

export type OperationConcurrencyStrategy = "latest" | "queue" | "parallel"


export interface OperationState<T> {
    stage: OperationLifeCycleStage
    data: T | null;
    error: Error | null;
    attemptCount: number;
    lastUpdatedAt: number | null;
}
export type Listener<T> = (state: OperationState<T>) =>void


function initialState<T>(): OperationState<T> {
  return {
    stage: "idle",
    data: null,
    error: null,
    attemptCount: 0,
    lastUpdatedAt: null,
  };
}
 export class Operation<T> {
    private state: OperationState<T>;
    private listeners=  new Set<Listener<T>>();
    private stragery: OperationConcurrencyStrategy;


    constructor() {
    this.state = initialState();
    this.stragery = 'latest'
    }

    run () : void {
        switch(this.stragery) {
            case "latest":
                return this.runLatest()
            case "parallel":
                return this.runParallel()
            case "queue":
                return this.runQueued()
        }
    }

    subscribe(listener: Listener<T>): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener)
    }


    private runLatest() : void {
        // run the query
    }

    private runQueued() : void {
        // add to queue
    }

    private runParallel() : void {
        // run in parallel
    }
}