const useActiveLink = () => {
    const location = window.location.href
    const pathSegments = location.split('/').filter((segment) => segment !== '')

    return pathSegments.length === 2 ? '/' : `/${pathSegments[2]}`
}

export default useActiveLink;
