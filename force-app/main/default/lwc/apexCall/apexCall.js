import { LightningElement, wire } from 'lwc';
import AccountRecord from '@salesforce/apex/accountData.searchAcc'
export default class ApexCall extends LightningElement {
    accountList
    @wire(AccountRecord)
    accounts
    @wire(AccountRecord)
    accountsHandler({ data, error }) {
        if (data) {
            this.accountList = data.map(item => {
                let newType = item.type === 'Customer-Channel' ? 'Channel' :
                    item.type === 'Customer-Direct' ? 'Direct' : '-----------'
                return {...item, newType }
            })
        }
        if (error) {
            console.error(error)
        }
    }
}