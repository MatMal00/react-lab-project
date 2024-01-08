export const useFetchAuth = () => {
    const login = ({ email, userState }) => {
        const loggedUser = userState.data.find((x) => x.email === email);

        return loggedUser;
    };

    return { login };
};
