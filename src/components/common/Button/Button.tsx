import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import AddIcon from "icons/add.svg?react";
import RemoveIcon from "icons/remove.svg?react";
import EditIcon from "icons/edit.svg?react";
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

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
    actionType?: keyof TActionTypeIcon;
}

export const Button: FC<IButtonProps> = ({ text, icon, onClick, actionType, variant = "primary", ...props }) => {
    const iconToRender = actionType ? ACTION_ICON[actionType] : icon;

    return (
        <button
            {...props}
            onClick={onClick}
            className={cn(styles.button, styles[actionType ? `${actionType}Variant` : variant])}
        >
            {iconToRender && <span>{iconToRender}</span>}
            {text}
        </button>
    );
};
