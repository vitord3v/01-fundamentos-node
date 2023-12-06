// /users/:id

export function buildRoutePath (path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g 
    const pathWhitParams = path.replaceAll(routeParametersRegex,'(?<$1>[a-z0-9-\-_]+)')

    const pathRegex = new RegExp(`^${pathWhitParams}(?<query>\\?(.*))?$`)

    return pathRegex
}