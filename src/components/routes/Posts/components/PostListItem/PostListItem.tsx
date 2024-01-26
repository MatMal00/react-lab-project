import { FC, useState } from "react";
import { IPost } from "src/types";
import { Avatar, Card, Modal, RemoveButton } from "src/components";
import ManAvatarIcon from "icons/man-avatar.svg?react";
import CommentsIcon from "icons/comments.svg?react";
import cn from "classnames";
import styles from "./PostListItem.module.scss";

interface IPostListItemProps extends IPost {
    isRemovable: boolean;
    remove: (postId: number) => void;
}

export const PostListItem: FC<IPostListItemProps> = ({ title, body, userId, id, isRemovable, remove }) => {
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
    const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

    const handleToggleUserInfoModal = () => setIsUserInfoModalOpen((prev) => !prev);
    const handleToggleCommentsModal = () => setIsCommentsModalOpen((prev) => !prev);

    return (
        <li>
            <Card className={cn(styles.card)}>
                <>{isRemovable && <RemoveButton onClick={() => remove(id)} />}</>
                <Card.Body>
                    <Avatar className={styles.avatar} onClick={handleToggleUserInfoModal}>
                        <ManAvatarIcon />
                    </Avatar>
                    <article className={styles.textBox}>
                        <h4>{title}</h4>
                        <p>{body}</p>
                    </article>
                </Card.Body>
                <Card.Footer>
                    <button className={styles.commentsBtn} onClick={handleToggleCommentsModal}>
                        <CommentsIcon />
                        <span>comments</span>
                    </button>
                </Card.Footer>
            </Card>
            <Modal handleClose={handleToggleUserInfoModal} isOpen={isUserInfoModalOpen}>
                <Modal.UserInfo userId={userId} />
            </Modal>
            <Modal handleClose={handleToggleCommentsModal} isOpen={isCommentsModalOpen}>
                <Modal.Comments postTitle={title} postId={id} />
            </Modal>
        </li>
    );
};
