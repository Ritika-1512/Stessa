import { LightningElement, wire, track } from 'lwc';

import getAccountList from '@salesforce/apex/AccData.getAccountList';
//import getContacts from '@salesforce/apex/AccData.getopportunities';
import getOpportunities from '@salesforce/apex/AccData.getOpportunities';

const columns = [{
        label: 'Opportunity Name',
        fieldName: 'Name'
    },
    {
        label: 'Stage',
        fieldName: 'StageName'
    },
    {
        label: 'Close Data',
        fieldName: 'CloseDate',
        type: 'date'
    }
];
export default class AccountData extends LightningElement {
    @track accountId = '';
    @track opportunity;
    @track columns = columns;
    //  invoke apex method with wire property and fetch picklist options.
    // pass 'object information' and 'picklist field API name' method params which we need to fetch from apex
    @wire(getAccountList) accounts;
    onValueSelection(event) {
        // eslint-disable-next-line no-alert
        const selectedAccount = event.target.value;
        this.accountId = event.target.value;
        if (selectedAccount != null) {
            getOpportunities({
                    accountId: selectedAccount
                })
                .then(result => {
                    this.opportunity = result;
                    // eslint-disable-next-line no-console
                    console.log('result' + JSON.stringify(result) + selectedAccount);
                })
                .catch(error => {
                    this.error = error;
                });
        }
    }
}
//export default class AccountData extends LightningElement {