public with sharing class Stessa {
    @AuraEnabled
    public static Property__c createProperty(Property__c prop) {
        system.debug('Property'+prop);
        insert prop;
        return prop;
    }
}
