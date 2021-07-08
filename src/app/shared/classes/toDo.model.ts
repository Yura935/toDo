import { IToDo } from "../interfaces/toDo.interface";

export class ToDo implements IToDo {
    constructor(
        public userId: number,
        public title: string,
        public completed: boolean
    ) { }
}