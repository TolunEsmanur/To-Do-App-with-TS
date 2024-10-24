interface ITodoType {
    task:string;
    isDone:boolean;
    id:string | number;
    owner?: string //bu alan zorunlu değil, optinal. Varsa type'ı string
}

type AddFn=(task:string)=>Promise<void>
type ToogleFn=(todo:ITodoType)=>Promise<void>
type DeleteFn=(id:string | number)=>Promise<void>
