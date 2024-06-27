sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myui5app.controller.MainView", {
            onInit: function () {debugger;
                this.oModel = this.getOwnerComponent().getModel();
                this.oModel.read("/ZCommandesAchatSet", {
                    success: function (oData) {
                        debugger;
                    },
                    error: function (oError) {debugger;
                    },
                });

            }
        });
    });
