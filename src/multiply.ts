export function multiply(...args: number[]): number {
    return args.reduce((acc, cur) => acc * cur);
}