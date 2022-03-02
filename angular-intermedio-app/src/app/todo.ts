export class Todo {
    [x: string]: any;
    id!: number;
    title: string = '';
    complete: boolean = false;

    constructor(values: Object = {}) {
    Object.assign(this, values);
       
    }
       
}