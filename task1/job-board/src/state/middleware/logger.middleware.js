const loggerMiddleware = store => next => action => {
    console.group(action.type)
    console.log('Prev State:', store.getState())
    console.log('dispatching:', action)
    const result = next(action)
    console.log('Next State:', store.getState())
    return result
}

export default loggerMiddleware