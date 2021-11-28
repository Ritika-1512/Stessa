import { LightningElement, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import Property__c_OBJECT from '@salesforce/schema/property__c';
import Name_FIELD from '@salesforce/schema/Property__c.Name';
import Date__c_FIELD from '@salesforce/schema/Property__c.Date__c';
import Amount__c_FIELD from '@salesforce/schema/Property__c.Amount__c';
import Category__c_FIELD from '@salesforce/schema/Property__c.Category__c';
import Notes__c_FIELD from '@salesforce/schema/Property__c.Notes__c';
import createProperty from '@salesforce/apex/Property.createProperty';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Testing extends LightningElement {
    @track name = Name_FIELD;
    @track date = Date__c_FIELD;
    @track amount = Amount__c_FIELD;
    @track category = Category__c_FIELD;
    @track notes = Notes__c_FIELD;



    @track isModalOpen = false;
    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }

    record = {
        Name: this.name,
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


    submitDetails() {
        this.isModalOpen = false;
        createProperty({ prop: this.record })
            .then(result => {
                this.message = result;
                if (this.message !== undefined) {
                    this.record.name = '';
                    this.record.date = '';
                    this.record.amount = '';
                    this.record.category = '';
                    this.record.notes = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Record created',
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
                        title: 'Record Not Created Something went wrong',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
}