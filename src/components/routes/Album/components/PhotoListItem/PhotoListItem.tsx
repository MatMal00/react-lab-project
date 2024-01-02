import { FC } from "react";
import { IPhoto } from "src/types";

interface IPhotosListItemProps extends IPhoto {}

export const PhotoListItem: FC<IPhotosListItemProps> = ({ url }) => {
    return <img src={url}></img>;
};
