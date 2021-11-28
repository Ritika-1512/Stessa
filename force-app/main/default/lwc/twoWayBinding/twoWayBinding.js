import { LightningElement, track } from 'lwc';

export default class TwoWayBinding extends LightningElement {
    @track fullName = "Name";
    @track technology = "Technology";
    changeHandler(event) {
        this[event.target.name] = event.target.value;
    }
}