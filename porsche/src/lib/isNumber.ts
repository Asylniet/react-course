export const isNumber = (value: any): value is number => {
    return !isNaN(parseInt(value));
}