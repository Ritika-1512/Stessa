import { LightningElement } from 'lwc';

export default class StylingLWC extends LightningElement {

    percent = 10

    onchnagehandler( event ){
        this.percent = event.target.value
    }

    get percentage(){
        return `width:${this.percent}%`
    }

}