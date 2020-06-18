var paramTypes = require("swagger-node-express").paramTypes;
var moment = require("moment");

module.exports = {
    spec: {
        description: "Realiza o cadastro de um Workflow",
        path: "/workflow/cadastro",
        method: "POST",
        summary: "Realiza o cadastro de um workflow sem documentos",
        notes: "Nenhuma nota sobre esta API",
        type: "workflowGravarResponse",
        nickname: "workflowGravarResponse",
        produces: ["application/json"],
        parameters: [paramTypes.body("postWorkflowRequest", "Parâmetros do Cadastro de Workflow", "postWorkflowRequest")],
        errorResponses: [
            {
                code: "200",
                reason: "Workflow gravado com sucesso",
                responseModel: "workflowGravarResponse"
            },
            {
                code: "500",
                reason: "Erro ao gravar Workflow",
                responseModel: "errorResponse"
            }
        ]
    },
    action: function (req, res) {
        if (req.body.nome == undefined ) {
            res.status(500).send({
                error: {
                    code: "1",
                    message: "Envelope Request 'nome' não informado!"
                }
            });
        }else if (req.body.workflow.cpfcnpj == "") {
            res.status(500).send({
                error: {
                    code: "2",
                    message: "Necessário informar o número do CpfCnpj!"
                }
            });
        }else if (!moment(req.body.pessoa.dtNasc, moment.ISO_8601, true).isValid()) {
                res.status(500).send({
                    error: {
                        code: "3",
                        message: "Data nascimento fundação inválida!"
                   }
                });
        }else {

            var _response = {
                                "nome": "Angelo Antonello Borges",
                                "workflow": {
                                    "idWorkflow": 0,
                                    "cpfcnpj": 0,
                                    "msg": ""
                                },
                                "pessoa": {
                                    "dtNasc": "01/01/2020"
                                }
                            };

            //CPF/CNPJ utilizado nãopossui permissão
            if(req.body.workflow.cpfcnpj == "8289707049"){
                _response.workflow.idWorkflow = 1;
                _response.workflow.msg = "Este cliente não ter permissão.";
                res.status(200).json(_response);
            }
            else {
                _response.workflow.idWorkflow = 1;
                _response.workflow.msg = "Pré Análise realizada com sucesso!";
                res.status(200).json(_response);
            }
        }
    }
};
