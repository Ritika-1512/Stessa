({
    getAccounts : function(component, event) {
        var action = component.get("c.getMdtList");
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var arr = [];
                console.log('result',result);
                component.set("v.accList", result);
                for(var key in result){
                    arr.push(result[key]);
                    console.log('result',result[key]);
                }
                //component.set("v.wrapperList", arr);
                //console.log('result js cotrl',component.get("v.wrapperList"));
            }
        });
        $A.enqueueAction(action);
    },
    
    createRecords : function(component, event, payload) {
        var action = component.get("c.createRecord");
        action.setParams({
            'payload' : payload
        });
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                
            }
        });
        $A.enqueueAction(action);
    },
    
    checkValidation : function(component, event, tableData) {
        var flag = false;
        for(var key in tableData){
            if( tableData[key].someInput == '' || tableData[key].picklist1 == '' || tableData[key].picklist2 == ''){
                flag = true;
            }
        }
        return flag;
    },
})