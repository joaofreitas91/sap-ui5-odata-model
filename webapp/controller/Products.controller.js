sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    "com/lab2dev/stockcontrol/model/models",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel, JSONModel, models, MessageToast) {
        "use strict";

        return Controller.extend("com.lab2dev.stockcontrol.controller.Products", {
            onInit: function () {

                // Consumindo o oDataModel vindo do component
                // const oComponent = this.getOwnerComponent()

                // Declarando um oDataModel pela controller
                // var oModel = new ODataModel("/northwind/northwind.svc/")
                // const oModel = oComponent.oDataModel

                // oModel.attachMetadataLoaded(() => {
                //     oModel.read("/Products", {
                //         success: (oData) => {
                //             console.log(oData)

                //             var oModel = new JSONModel({
                //                 Products: oData.results
                //             })
                //             this.getView().setModel(oModel)
                //         },
                //         error: (oError) => {
                //             console.log(oError)
                //         }
                //     })
                // });

                // oModel.attachMetadataFailed(() => {
                //     var msg = 'Serviço não disponível no momento. Tente novamente mais tarde.'
                //     MessageToast.show(msg);
                // });


                // Usando o oDataModel pela pasta models.js
                const products = models.getProducts()

                products
                    .then((aProducts) => {
                        var oModel = new JSONModel({
                            Products: aProducts
                        })

                        this.getView().setModel(oModel)
                    })
                    .catch((sError) => {
                        var msg = sError
                        MessageToast.show(msg);
                    })
            },
        });
    });
