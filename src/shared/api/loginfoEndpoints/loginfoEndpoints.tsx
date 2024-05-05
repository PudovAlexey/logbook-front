import { builder } from '../apiHandlers';
import {
 GetLogInfoByIdParams, GetLogInfoListParams, GetLogbookListReqItem, PostLogInfoListParams, PutLogInfoByIdParams,
} from './types';

const loginfoEndpoints = {

    getLogInfoList: builder.query<GetLogbookListReqItem[], GetLogInfoListParams>({
        query: (params) => ({
            url: 'log_info',
        }),
    }),

    getLogInfoById: builder.query<any, GetLogInfoByIdParams>({
        query: ({ id }: GetLogInfoByIdParams) => ({
            url: `log_info/${id}`,
        }),
    }),

    postLogInfoList: builder.mutation<any, PostLogInfoListParams>({
        query: ({ body }) => ({
            url: 'log_info',
            method: 'POST',
            body,
        }),
    }),

    putLogInfoList: builder.mutation<any, PutLogInfoByIdParams>({
        query: ({ body, id }) => ({
            url: `log_info/${id}`,
            method: 'PUT',
            body,
        }),
    }),

};

export {
    loginfoEndpoints,
};
