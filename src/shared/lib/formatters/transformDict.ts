type TransformDictProps<T> = {
    dict: Record<string, T>
    parser: (key: string, value: unknown) => {
        key: string,
        value: unknown
    }
}

function transformDict<T>({ dict, parser }: TransformDictProps<T>) {
  return Object.keys(dict).reduce((acc, key) => {
    const { key: newKey, value: newValue } = parser(key, dict[key]);

    acc[newKey] = newValue;

    return acc;
  }, {});
}

export {
    transformDict,
};
