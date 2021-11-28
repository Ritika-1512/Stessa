import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResults;
    @track previousResults = [];
    @track showPreviousResults = false;

    firstNumber;
    secondNumber;

    numberChangeHandler( event ){
        const inputBoxName = event.target.name;
        if ( inputBoxName === 'firstNumber' ) {
            this.firstNumber = event.target.value;
        } else if ( inputBoxName === 'secondNumber' ){
            this.secondNumber = event.target.value;
        }
    }

    showPreviousResultToggle( event ){
        this.showPreviousResults = event.target.checked;
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResults = 'result of '+firstN+' + '+secondN+' is '+(firstN+secondN);
        this.currentResults = `result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.previousResults.push(this.currentResults);
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResults = 'result of '+firstN+' + '+secondN+' is '+(firstN+secondN);
        this.currentResults = `result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.currentResults);
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResults = 'result of '+firstN+' + '+secondN+' is '+(firstN+secondN);
        this.currentResults = `result of ${firstN}x${secondN} is ${firstN*secondN}`;
        this.previousResults.push(this.currentResults);
    }

    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResults = 'result of '+firstN+' + '+secondN+' is '+(firstN+secondN);
        this.currentResults = `result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResults.push(this.currentResults);
    }
}