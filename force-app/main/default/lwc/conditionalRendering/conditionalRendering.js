import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisiable = true
    showMe = false
    hello
    users = ["Avinash","Rizwan","Ritika"]
    info = [
        {
            id : 1,
            name : "Avinash",
            Role : "Admin"
        },
        {
            id : 2,
            name : "Rizwan",
            Role : "Developer"
        },
        {
            id : 3,
            name : "Ritika",
            Role : "Consultant"
        }
    ]

    changehandler( event ){
        this.hello = event.target.value
    }

    get isHello(){
        return this.hello == "hello"
    }

}