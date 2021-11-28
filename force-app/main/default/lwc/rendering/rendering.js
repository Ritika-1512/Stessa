import { LightningElement, track } from 'lwc';

export default class Rendering extends LightningElement {
    @track changeValue = false;
    handleChange() {
        this.changeValue = true;
    }
}