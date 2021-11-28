public with sharing class SearchAccount {
    @AuraEnabled(cacheable=true)
    public static List<Account> accQuery(string name){
        String searchKey= '%' + name +'%';
        return[select Id, Name, Type, Industry from Account WHERE Name LIKE:searchKey limit 10];
        }
}