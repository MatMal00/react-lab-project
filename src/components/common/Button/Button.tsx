import { FC, ReactNode } from "react";
import AddIcon from "icons/add.svg";
import RemoveIcon from "icons/remove.svg";
import EditIcon from "icons/edit.svg";
import cn from "classnames";
import styles from "./Button.module.scss";

type TActionTypeIcon = {
    add: ReactNode;
    remove: ReactNode;
    edit: ReactNode;
};

const ACTION_ICON: TActionTypeIcon = {
    add: <AddIcon />,
    remove: <RemoveIcon />,
    edit: <EditIcon />,
};

interface IButtonProps {
    text: string;
    theme: "primary" | "secondary";
    icon?: ReactNode;
    actionType?: keyof TActionTypeIcon;
    onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ text, icon, onClick, actionType, theme = "primary" }) => {
    const actionIcon = actionType ? ACTION_ICON[actionType] : undefined;

    return (
        <button onClick={onClick} className={(styles.button, cn([styles[theme]]))}>
            {(icon || actionIcon) && <span>{icon}</span>}
            {text}
        </button>
    );
};
