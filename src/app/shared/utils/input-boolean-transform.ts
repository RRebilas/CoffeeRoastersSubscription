export default {
  transform: (value: boolean | string) =>
    typeof value === 'string' ? value === '' : value,
};
