public class wrapper {  
        
        @AuraEnabled  
        public string kpi { get; set; }  
        
        @AuraEnabled  
        public decimal ServiceCategoryWeightningScore { get; set; }  
        
        @AuraEnabled  
        public string someInput { get; set; }  
        
        @AuraEnabled  
        public string picklist1 { get; set; }
        
        @AuraEnabled  
        public string picklist2 { get; set; }
        
        @AuraEnabled  
        public Boolean check { get; set; }
        
    }