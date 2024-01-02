import { FC } from "react";
import { useParams } from "react-router-dom";

interface IAlbumProps {}

export const Album: FC<IAlbumProps> = () => {
    const { albumId } = useParams();
    console.log(albumId);

    return <div></div>;
};
