import { AlbumId } from './album';

enum PhotoIdBrand {}
export type PhotoId = string & PhotoIdBrand;

export interface Photo {
    albumId: AlbumId;
    id: PhotoId;
    title: string;
    url: string;
    thumbnailUrl: string;
}
