export const setUser = (user) => sessionStorage.setItem('user', JSON.stringify(user))
export const defUser = () => sessionStorage.setItem('user', JSON.stringify({name: "admin", pass: "admin", image: "/avatar1.png"}))
export const getUser = () => JSON.parse(sessionStorage.getItem('user'))
export const removeUser = () => sessionStorage.removeItem('user')

