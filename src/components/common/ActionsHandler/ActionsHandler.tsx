import { FC, ReactNode } from "react";

interface IActionsHandlerProps {
    isLoading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
    children: ReactNode | ReactNode[];
    skeleton?: ReactNode;
}

export const ActionsHandler: FC<IActionsHandlerProps> = ({ children, isLoading, error, skeleton }) => {
    if (isLoading) return <>{skeleton ? skeleton : <h1>Is loading</h1>}</>;
    if (error) return <h1>ERROR</h1>;
    return children;
};
