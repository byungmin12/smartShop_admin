export interface ITableRow {    id: number;    title: string;    description : string;    price: number;    rating: number;    brand: string;}export interface IProduct extends ITableRow{    rating: number,    stock: number,    category: string,    thumbnail: string,    images: string[]}export interface IDataDto {    products: IProduct[];    total: number;    skip: number;    limit: number;}