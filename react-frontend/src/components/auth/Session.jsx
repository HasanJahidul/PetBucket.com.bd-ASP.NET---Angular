
export const setSession = (header) => {
    sessionStorage.setItem("user", JSON.stringify(header));
}
export const removeSession = () => {
    sessionStorage.removeItem("user");
}
export const getSession = () => {
    const user = sessionStorage.getItem("user");

    if(user) return JSON.parse(user);
    else return null;
}
