import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    percent = 10
    users = ["Ritika", "Anant", "Vishu", "Kratika", "Rizwan"]
    onChangeHandler(event) {
        this.percent = event.target.value
    }
    get percentage() {
        return `width:${this.percent}%`
    }

    clickHandler(event) {
        let data = this.template.querySelector('h1')
        console.log('query selector', data.innerText)
        const userData = this.template.querySelectorAll('.username');
        Array.from(userData).forEach(item => {
            console.log(item.innerText)
            item.setAttribute('title', item.innerText)
            item.style.color = 'red'
        });
    }

}