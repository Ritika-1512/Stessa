import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/SearchAccount.accQuery';
export default class SearchAccount extends LightningElement {
    accSearch
    AccountData
    @wire(getAccount, { name: `$accSearch` })
    changeHandler(event) {
        this.accSearch = event.target.value
    }
    accData({ data, error }) {
        if (data) {
            this.AccountData = data
        } else if (error) {
            console.error(error)
        }
    }
}