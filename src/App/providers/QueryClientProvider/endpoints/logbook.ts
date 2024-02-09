const logbookEndpoints = {
    getLogbook: {
        key: 'getLogbook',
        query: (parameters: {todoId: number}) => `/todos/${parameters.todoId}`
    }
}

export {
    logbookEndpoints
}