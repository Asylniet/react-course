export const useCustomState = (value: any) => {
  const setValue = (newValue: typeof value) => {
    value = newValue;
  }

  return [value, setValue];
}