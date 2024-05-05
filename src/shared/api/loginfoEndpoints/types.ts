type GetLogInfoListParams = {
    offset: number
    limit: number
    searchQuery: string
};

type PostLogInfoListParams = {
 body: {
    depth: number,
    description: string,
    endDatetime: string,
    endPressure: number,
    sideView: number,
    startDatetime: string,
    startPressure: number,
    title: string,
    userId: string,
    vawePower: number,
    waterTemperature: number
 }
}

type GetLogInfoByIdParams = {
    id: string
};

type PutLogInfoByIdParams = {
    id: string
    body: {
        depth: number,
        description: string,
        end_datetime: string,
        end_pressure: number,
        side_view: number,
        start_datetime: string,
        start_pressure: number,
        title: string,
        vawe_power: number,
        water_temperature: number
    }
};

export type {
    GetLogInfoListParams,
    PostLogInfoListParams,
    GetLogInfoByIdParams,
    PutLogInfoByIdParams,
};
