import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    num1 = 20
    num2 = 30
    str = "Hello World"
    greeting = "Hello Developers"
    @track obj = {
        name:"swapnil",
        city:"indore"
    }

    users = ["Avinash","Kratika","Ritika","Rizwan"]

    get username(){
        return this.users[0]
    }

    get multiply(){
        return this.num1 * this.num2
    }


    changeHandler( event ){
       this.obj.city = event.target.value         
    }

}