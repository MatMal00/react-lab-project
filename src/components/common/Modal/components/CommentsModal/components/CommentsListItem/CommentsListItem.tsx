import { FC } from "react";
import { IComment } from "src/types";
import { Card } from "src/components/common/Card";
import styles from "./CommentsListItem.module.scss";

interface ICommentsListItemProps extends IComment {}

export const CommentsListItem: FC<ICommentsListItemProps> = ({ email, body }) => {
    return (
        <li>
            <Card className={styles.commentListItem}>
                <Card.Body>
                    <h6>{email}</h6>
                    <p>{body}</p>
                </Card.Body>
            </Card>
        </li>
    );
};
