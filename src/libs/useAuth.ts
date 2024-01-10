import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import useImmutableSWR from "swr/immutable";
import { getUserFromLocalStorage, sendLoginCall } from "src/actions";
import { useCallback, useState } from "react";
import { apiErrorHandler } from "src/helpers";
import { IUser } from "src/types";

export const useAuth = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | undefined>();
    const { data: user, mutate } = useImmutableSWR<IUser | undefined>("/user", getUserFromLocalStorage);
    const { trigger, isMutating: isLoading } = useSWRMutation("/users", sendLoginCall);

    const login = useCallback(
        async (email: string) => {
            try {
                const userToLogin = await trigger({ email });

                mutate(userToLogin, { revalidate: false });
                window.localStorage.setItem("user", JSON.stringify(userToLogin));

                navigate("/", { replace: true });
            } catch (error) {
                setError(apiErrorHandler(error));
            }
        },
        [mutate, navigate, trigger]
    );

    const logout = useCallback(() => {
        mutate(undefined, { revalidate: false });
        window.localStorage.removeItem("user");
    }, [mutate]);

    return { user, login, logout, isLoading, error };
};
