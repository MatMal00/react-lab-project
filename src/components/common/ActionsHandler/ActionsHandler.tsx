import { ReactNode } from "react";

// Define a generic type for ActionsHandler
interface ActionsHandlerProps<T> {
    isLoading: boolean;
    error: string | null;
    children: (data: T) => ReactNode | ReactNode[];
    skeleton?: ReactNode;
    data?: T;
}

export const ActionsHandler = <T,>({
    isLoading,
    error,
    children,
    skeleton,
    data,
}: ActionsHandlerProps<T>): ReactNode => {
    if (isLoading) return <>{skeleton ? skeleton : <h1>Is loading</h1>}</>;
    if (error) return <h1>ERROR</h1>;
    if (!data) return <h1>No data to display</h1>;
    if (data) return <>{children(data)}</>;
};
