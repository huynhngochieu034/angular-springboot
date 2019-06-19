export class News{
    
    constructor(
        public id: number,
        public title:string,
        public shortDescription:string,
        public content:string,
        public categoryCode:string,
        public thumbnail:string
    ) {}
}