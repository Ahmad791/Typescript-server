import {Person} from "./ClassPerson";// in case of future reorgenization
export class Emplyee extends Person{
    private id: number;
    private salary: number;

    public constructor(name:string,age:number,id:number,salary:number){
        super(name,age);
        this.id=id;
        this.salary=salary;
    }
//------------------------------------------------------------   methods
    public work(){
        console.log("Employee with id "+ this.id+ " is working" );
        // note wanted to add name but didn't want to add methods without asking
    }
    public getSalary(){
        return this.salary;
    }
}