import { camelCaseIntoToken } from './camelCaseIntoToken';

type formatQueryParamsProps = {
    params?: Record<string, string | number>
}

function formatQueryParams({ params }: formatQueryParamsProps) {
    if (!params) return '';

    return Object.keys(params).reduce((acc, key) => {
        if (!params[key]) return acc;

        if (!acc) {
            acc = `?${camelCaseIntoToken({
                token: '_',
                value: key,
            })}=${params[key]}`;
        } else {
            acc = `${acc}&${camelCaseIntoToken({
                token: '_',
                value: key,
            })}=${params[key]}`;
        }

        return acc;
    }, '');
}

export {
    formatQueryParams,
};
