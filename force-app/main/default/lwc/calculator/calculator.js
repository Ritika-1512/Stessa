import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track num1;
    @track num2;
    @track result;
    @track previousResult = [];
    @track showPreResult = true;

    handleChange1(event) {
        this.num1 = event.target.value;
    }

    handleChange2(event) {
        this.num2 = event.target.value;
    }

    sumExp() {
        this.result = Number(this.num1) + Number(this.num2);
        this.previousResult.push(this.result);

    }

    subExp() {
        this.result = Number(this.num1) - Number(this.num2);
        this.previousResult.push(this.result);

    }

    mulExp() {
        this.result = Number(this.num1) * Number(this.num2);
        this.previousResult.push(this.result);

    }

    divExp() {
        this.result = Number(this.num1) / Number(this.num2);
        this.previousResult.push(this.result);

    }
    showPreValues(event) {
        this.showPreResult = event.target.checked;
    }
}