public with sharing class TextModalHandler {
    
    @auraEnabled (cacheable = true)
    
    public static void getPicklist (){
        List<Account> acc = New List<Account>([Select id, Rating, AccountNumber from Account]);
            
    }

}