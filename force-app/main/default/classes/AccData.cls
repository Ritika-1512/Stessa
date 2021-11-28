public with sharing class AccData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name FROM Account];
    }
    @AuraEnabled
    public static List<Opportunity> getOpportunities(String accountId){
        return [Select Id, Name,StageName,CloseDate from Opportunity where accountId=:accountId];
         
    }  
}