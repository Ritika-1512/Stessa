import { LightningElement } from 'lwc';

export default class ChildCalculatorCToP extends LightningElement {
    first;
    second;
    result;
    changeHandler1(event){
        this.first= event.target.value
    }
    changeHandler2(event){
        this.second=event.target.value
    }
    sumHandler(){ 
        const myEvent = new CustomEvent('result', { 
            detail: { 
                sum: this.result= Number(this.first)+Number(this.second)
            }
        })
        this.dispatchEvent(myEvent)
    }
}