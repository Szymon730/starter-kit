sap.ui.define([], function(){


    "use-strict";
    return {
        formatName: function(sFirstName, sLastName){

            let key = "-"; 

            if(sLastName.includes(key)){
                return sFirstName[0] + ". " + sLastName.substring(0,sLastName.indexOf(key));
                
            }else{
                return sFirstName[0] + ". " + sLastName;
            }
            
        }
    };
});