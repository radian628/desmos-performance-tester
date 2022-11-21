export type DesmosSource = {
    hash: string;
} | {
    graphState: string;
};
export declare function sourceIsHash(a: DesmosSource): a is {
    hash: string;
};
export declare function sourceIsGraphState(a: DesmosSource): a is {
    graphState: string;
};
export type DesmosTest = {
    source: DesmosSource;
    duration: number;
    name: string;
};
