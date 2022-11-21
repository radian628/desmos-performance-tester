export type DesmosSource = {
    desmoscriptFile: string
} | {
    url: string
} | {
    graphState: string
};

export type DesmosTest = {
    source: DesmosSource, // source for desmos testing
    duration: number, // milliseconds
}