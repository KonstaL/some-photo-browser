enum AlbumIdBrand {}

export type AlbumId = string & AlbumIdBrand;

export interface Album {
    userId: string;
    id: AlbumId;
    title: string;
}
