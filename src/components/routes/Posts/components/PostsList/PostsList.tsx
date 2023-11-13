import { FC, useState } from "react";
import { IPost } from "src/types";
import { PostListItem } from "../PostListItem";
import { Modal } from "src/components";
import styles from "./PostsList.module.scss";

interface IPostsListProps {
    posts: IPost[];
}

export const PostsList: FC<IPostsListProps> = ({ posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ul className={styles.list}>
                {posts.map((post) => (
                    <PostListItem {...post} key={post.id} />
                ))}
            </ul>
            <button onClick={() => setIsOpen(true)}>openModal</button>
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                <div>
                    <h1>content</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum autem, aut expedita in
                        officia deleniti. Pariatur sunt, qui illum est vitae ex quas ullam ut assumenda reiciendis
                        tempore veniam magni!
                    </p>
                </div>
            </Modal>
        </>
    );
};
