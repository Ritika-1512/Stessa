import { LightningElement, api } from 'lwc';

export default class ParentSlider extends LightningElement {
    val = 20
    changeHandler(event) {
        this.val = event.target.value
    }
    resetSlider() {
        this.val = 50
    }
}