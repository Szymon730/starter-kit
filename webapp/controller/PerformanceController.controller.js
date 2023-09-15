sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.PerformanceController", {
            onInit: function () {

            },


            //Add functions for those 2 buttons! Need to be Motivate and Fire functions!
           

            onMotivate: function(oEvent){

                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<domain>.com";
                var sSubject = "Good job!";
                var sBody = "You're doing well!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
               
               
            },

            fireEmployee: function(oEvent){

               
               
            },


           
        });
    });
