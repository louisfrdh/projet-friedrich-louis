import { IProduct } from "./iproduct";

export class Product implements IProduct{
    id: number;
    category: string;
    team: string;
    price: number;
    image: string;

    constructor(id: number, category: string, team: string, price: number, image: string){
        this.id = id;
        this.category = category;
        this.team = team;
        this.price = price;
        this.image = image;
    }

    static generateUID(): string {
        const stringArr = [];
        for(let i = 0; i< 4; i++){
            const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            stringArr.push(S4);
        }
        return stringArr.join('-');
    }
}