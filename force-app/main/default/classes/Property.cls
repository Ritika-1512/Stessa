public with sharing class Property {
    @AuraEnabled
    public static Property__c createProperty(Property__c prop) {
        system.debug('Property'+prop);
        insert prop;
        return prop;
    }
}