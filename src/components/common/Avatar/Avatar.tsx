import { FC, ReactElement } from "react";
import cn from "classnames";
import styles from "./Avatar.module.scss";

interface IAvatarProps {
    children: ReactElement;
    className?: string;
    onClick?: () => void;
}

export const Avatar: FC<IAvatarProps> = ({ children, className, onClick }) => {
    return (
        <>
            {onClick ? (
                <button
                    className={cn(styles.avatar, className, {
                        [styles.withAction]: onClick,
                    })}
                    onClick={onClick}
                >
                    {children}
                </button>
            ) : (
                <div className={cn(styles.avatar, className)}>{children}</div>
            )}
        </>
    );
};
