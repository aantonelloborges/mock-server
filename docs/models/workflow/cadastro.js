exports.models = {
    "postWorkflowRequest":{
        "id": "postWorkflowRequest",
        "properties":{
            "workflow": {
                "$ref": "workflowGravarIRequest",
                "description": "Workflow Item Request",
                "requerid": true
            }
        }
    },
    "workflowGravarIRequest":{
        "id": "workflowGravarIRequest",
        "properties":{
            "idWorkflow":{
                "type": "number",
                "description": "código Proposta",
                "requerid": true
            },
            "nrReservaPedido":{
                "type": "string",
                "description": "Número Reserva Pedido",
                "requerid": false
            },
            "idResponsavelLoja":{
                "type": "string",
                "description": "id Responsavel Loja",
                "requerid": false
            }
        }
    },
    "workflowGravarResponse":{
        "id": "workflowGravarResponse",
        "properties":{
            "workflow":{
                "$ref": "workflowGravarItemResponse",
                "description": "Retorna workflow Gravar Item Response",
                "requerid": true
            }
        }
    },
    "workflowGravarItemResponse":{
        "id": "workflowGravarItemResponse",
        "properties":{
            "nome": {
                "type": "string",
                "description": "Nome do Cliente",
                "requerid":true
            },
            "workflow":{
                "idWorkflow": {
                    "type": "string",
                    "description": "Id do Workflow",
                    "requerid": true
                },
                "cpfcnpj": {
                    "type": "string",
                    "description": "CPF/CNPJ do Workflow",
                    "requerid": true
                },
                "msg": {
                    "type": "string",
                    "description": "Mensagem do Workflow",
                    "requerid": true
                }
            },
            "pessoa": {
                "dtNasc": {
                    "type": "string",
                    "description": "Nome do Cliente",
                    "requerid":true
                }
            },
        }

    }
};