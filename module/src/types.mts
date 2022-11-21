export type DesmosSource = {
    hash: string
} | {
    graphState: string
};


export function sourceIsHash(a: DesmosSource): a is { hash: string } {
    //@ts-ignore
    return a.hash !== undefined;
}



export function sourceIsGraphState(a: DesmosSource): a is { graphState: string } {
    //@ts-ignore
    return a.graphState !== undefined;
}

export type DesmosTest = {
    source: DesmosSource, // source for desmos testing
    duration: number, // milliseconds
    name: string // what to call the test
}