public class MassUpdateAttendeeStatusController {
    
    @AuraEnabled//Get Account Records
    public static List<Account> getAccountList(Integer pageSize, Integer pageNumber){
        Integer offset = (pageNumber - 1) * pageSize;
        List<Account> accList = new List<Account>();
        accList = [SELECT Id, Name, AccountNumber, Industry, Phone FROM Account LIMIT :pageSize OFFSET :offset];
        return accList;
    }
    
    @AuraEnabled//Get MetaData Records
    public static List<wrapper> getMdtList(){
        List<KPI_List__mdt> listEmailDomain = [SELECT Id,KPI__c,Service_Category_Weightning_score__c from KPI_List__mdt];
		System.debug('--listEmailDomain->'+listEmailDomain);
        List<wrapper> wrapperList = new List<wrapper>();
        for( KPI_List__mdt kpiMdt : [ SELECT Id,KPI__c,Service_Category_Weightning_score__c from KPI_List__mdt ] ){
            wrapper wr = new wrapper();
            wr.kpi = kpiMdt.KPI__c;
            wr.ServiceCategoryWeightningScore = kpiMdt.Service_Category_Weightning_score__c;
            wr.someInput = 'test';
            wr.picklist1 = '';
            wr.picklist2 = '';
            wr.check = false;
            
            wrapperList.add( wr );
        }
        
        return wrapperList;
    }
    
    @AuraEnabled
    public static void createRecord( String payload ){
        List<kpiChild__c> kChildList = new List<kpiChild__c>();
        List<Object> dataDeserialized = (List<Object>) JSON.deserializeUntyped(payload);
        for (Object resultss : dataDeserialized) {
            Map<String, Object> resultsAttributes = (Map<String, Object>)resultss;
            System.debug('ServiceCategoryWeightningScore --> '+resultsAttributes.get( 'ServiceCategoryWeightningScore' ));
            kpiChild__c kpich = new kpiChild__c();
            kpich.someInput__c = String.valueOf(resultsAttributes.get( 'someInput' ));
            kpich.status__c = Boolean.valueOf(resultsAttributes.get( 'check' )) == true ? 'Completed' : 'InProgress';
            kpich.type__c = String.valueOf(resultsAttributes.get( 'picklist1' ));
            kChildList.add(kpich);
        }
        if( kChildList.size() > 0 ){
            insert kChildList;
        }
    }
    
}