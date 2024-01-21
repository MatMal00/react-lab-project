import { FC } from "react";
import { IComment } from "src/types";
import { Card } from "src/components/common/Card";
import styles from "./CommentsListItem.module.scss";
import { RemoveButton } from "src/components/common/RemoveButton";

interface ICommentsListItemProps extends IComment {
    isRemovable: boolean;
}

export const CommentsListItem: FC<ICommentsListItemProps> = ({ email, body, isRemovable }) => {
    return (
        <li>
            <Card className={styles.commentListItem}>
                <>{isRemovable && <RemoveButton onClick={() => {}} />}</>
                <Card.Body>
                    <h6>{email}</h6>
                    <p>{body}</p>
                </Card.Body>
            </Card>
        </li>
    );
};
