/*import { LightningElement, track } from 'lwc';
import Property__c_OBJECT from '@salesforce/schema/property__c';
import Name_FIELD from '@salesforce/schema/Property__c.Name';
import Date__c_FIELD from '@salesforce/schema/Property__c.Date__c';
import Amount__c_FIELD from '@salesforce/schema/Property__c.Amount__c';
import Category__c_FIELD from '@salesforce/schema/Property__c.Category__c';
import Dependent__c_FIELD from '@salesforce/schema/Property__c.Dependent__c'
import Notes__c_FIELD from '@salesforce/schema/Property__c.Notes__c';
import createProperty from '@salesforce/apex/Stessa.createProperty';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Stessa extends LightningElement {
    @track Name = Name_FIELD;
    @track date = Date__c_FIELD;
    @track amount = Amount__c_FIELD;
    @track category = Category__c_FIELD;
    @track dependent = Dependent__c_FIELD;
    @track notes = Notes__c_FIELD;

    //for dependent picklist value 

    handleCategoryChange(event) {
        // Selected Meal Preference Value
        this.selectedCategory = event.target.value;
        this.isEmpty = false;
        let dependValues = [];

        if (this.selectedCategory) {
            // if Selected Meal Preference is none returns nothing
            if (this.selectedCategory === '--None--') {
                this.isEmpty = true;
                dependValues = [{ label: '--None--', value: '--None--' }];
                this.selectedCategory = null;
                this.selectedType = null;
                return;
            }

            // filter the total dependent values based on selected meal preference value 
            this.totalDependentValues.forEach(conValues => {
                if (conValues.validFor[0] === this.controlValues[this.selectedCategory]) {
                    dependValues.push({
                        label: conValues.label,
                        value: conValues.value
                    })
                }
            })

            this.dependentValues = dependValues;
        }
    }

    handleDependentChange(event) {
        this.selectedType = event.target.value;
    }


    record = {
        Name: this.Name,
        Date: this.date,
        Amount: this.amount,
        Category: this.category,
        Dependent: this.dependent,
        Notes: this.notes
    }
    handleDateChange(event) {
        this.record.Name = event.target.value;
    }

    handleDateChange(event) {
        this.record.Date = event.target.value;
    }

    handleAmountChange(event) {
        this.record.Amount = event.target.value;
    }

    handleCategoryChange(event) {
        this.record.Category = event.target.value;
    }

    handleNotesChange(event) {
        this.record.Notes = event.target.value;
    }


    handleClick() {
        createProperty({ prop: this.record })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if (this.message !== undefined) {
                    this.record.Name = '';
                    this.record.date = '';
                    this.record.amount = '';
                    this.record.category = '';
                    this.record.notes = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account created',
                            variant: 'success',
                        }),
                    );
                }
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
}*/