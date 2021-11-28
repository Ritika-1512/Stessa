import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    users = ["A","B","C","D","E"]

    clickHandler( event ){
        let data = this.template.querySelector('h1')
        console.log('query selector',data.innerText)
        const userData = this.template.querySelectorAll('.user-name')
        Array.from(userData).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute('title',item.innerText)
            item.style.color = 'red'
        })
    }
}