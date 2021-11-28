public with sharing class accountData {
    @AuraEnabled(Cacheable=true)
    public static list<Account> searchAcc(){
       return[select id, name, type, industry from account limit 10];
    }
}