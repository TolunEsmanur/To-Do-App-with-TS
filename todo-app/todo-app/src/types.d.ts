interface ITodoType {
    task:string;
    isDone:boolean;
    id:string | number;
    owner?: string //bu alan zorunlu değil, optinal. Varsa type'ı string
}
