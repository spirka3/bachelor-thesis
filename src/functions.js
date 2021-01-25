export const getUser = JSON.parse(sessionStorage.getItem('user'))
export const setUser = (user) => sessionStorage.setItem('user', JSON.stringify(user))