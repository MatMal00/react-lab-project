import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import useImmutableSWR from "swr/immutable";
import { getUserFromLocalStorage, sendLoginCall } from "src/actions";
import { IUser } from "src/types";
import { ROUTE } from "src/constants";

export const useAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data: user, mutate } = useImmutableSWR<IUser | undefined>("/user", {
        fallbackData: getUserFromLocalStorage(),
    });
    const { trigger, isMutating: isLoading, error } = useSWRMutation("/users", sendLoginCall);
    const { from } = location.state || { from: { pathname: ROUTE.HOME } };

    const login = useCallback(
        async (email: string) => {
            const userToLogin = await trigger({ email });

            mutate(userToLogin, { revalidate: false });
            window.localStorage.setItem("user", JSON.stringify(userToLogin));

            navigate(from, { replace: true });
        },
        [mutate, navigate, trigger, from]
    );

    const logout = useCallback(() => {
        mutate(undefined, { revalidate: false });
        window.localStorage.removeItem("user");
    }, [mutate]);

    return { user, login, logout, isLoading, error, isLoggedIn: !!user };
};
