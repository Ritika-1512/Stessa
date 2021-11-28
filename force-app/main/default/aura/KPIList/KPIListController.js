({
    doInit : function(component, event, helper) {    
        //console.log('result js cotrl',component.get("v.wrapperList"));
        helper.getAccounts(component, event);
    },
     
    handleSave : function(component, event, helper) {
        
        var tableData = component.get("v.accList");
        console.log('table',tableData);
        var flag = helper.checkValidation( component, event, tableData );
        console.log('flag',flag);
        if( flag ){
            component.set('v.isVisible', true);
            return;
        }
        var arr = [];
        for(var key in tableData){
            console.log('flag',flag);
            arr.push(tableData[key]);
            console.log('result',tableData[key]);
        }
        console.log('json',JSON.stringify(arr));
        helper.createRecords(component, event, JSON.stringify(arr));
        $A.get("e.force:closeQuickAction").fire();
    },
     
    handleCancel : function(component, event, helper) {        
        $A.get("e.force:closeQuickAction").fire();
    },
    
    handleChange: function (component, event, helper) {
        alert(event.getParam('value'));
    },
    
    onIndustrychange: function (component, event, helper) {
        alert(component.find('select').get('v.value') + ' pie is good.');
    },
    
    textChange: function(cmp, event,helper) { 
            var target = event.getSource(); 
            var txtVal = target.get("v.value") ;
            console.log('Selected Value is '+txtVal); 
    }
})