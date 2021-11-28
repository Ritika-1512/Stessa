import { LightningElement } from 'lwc';
export default class ComponentLWC extends LightningElement {
    greeting = 'World';
    change(event) {
        this.greeting = event.target.value;
    }

}