public with sharing class GuestController {

    @AuraEnabled (cacheable = true)
    public static Guest__c createGuest(Guest__c newRecord) {
       insert newRecord;
       return null;
    }
}