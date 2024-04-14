type CamelCaseFromTokenProps = {
  value: string;
  token?: string;
};

function camelCaseFromToken({ value, token = '_' }: CamelCaseFromTokenProps) {
  return value
    .split(token)
    .reduce((acc, val, idx) => `${acc}${(idx === 0 ? val[0] : val[0].toUpperCase()) + val.slice(1)}`, '');
}

export { camelCaseFromToken };
