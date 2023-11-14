import { FC } from "react";
import styles from "./CommentsModal.module.scss";
import { useFetchComments } from "src/libs";
import { ActionsHandler } from "src/components/common/ActionsHandler";
import { IComment } from "src/types";

interface ICommentsModalProps {
    postId: number;
}

export const CommentsModal: FC<ICommentsModalProps> = ({ postId }) => {
    const comments = useFetchComments(postId);
    console.log(comments);
    return (
        <div className={styles.commentsModal}>
            <ActionsHandler<IComment[]> {...comments}>
                {() => (
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque explicabo officiis quaerat
                        exercitationem ex excepturi animi aspernatur dicta, nobis beatae ipsum in impedit aut
                        consequuntur laudantium? Voluptas id dolorem dolores.
                    </div>
                )}
            </ActionsHandler>
        </div>
    );
};
