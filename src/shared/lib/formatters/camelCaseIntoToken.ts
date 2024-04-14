type CamelCaseIntoTokenProps = {
    value: string
    token?: string
  };

  export function camelCaseIntoToken({
    value,
    token = '_',
  }: CamelCaseIntoTokenProps) {
    return value.replace(/[A-Z]/g, (letter) => `${token}${letter.toLowerCase()}`);
  }
