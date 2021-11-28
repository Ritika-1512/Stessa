import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20
    changeHandler(event){
        console.log('calling from child') 
        this.val = event.target.value
    }

    @api resetSlider(){ 
        console.log('reset from child') 
        this.val = 50
    }
}