/*
 * Todas as regras de negócio do App estão implementadas aqui.
 *
 * Inicialização de variáveis
 * Controle do Dispositivo
 * Chamadas AJAX
 *
 * Autor: Ricardo LIma Caratti.
 *
 */


// Variáveis globais

var latitude = 0.0;
var longitude = 0.0;
var accuracy = 0.0;
var _url_base = 'http://euopino.consultoriaavaliar.com.br:3002/';

var push_id;

var device_model;
var device_platform;
var device_uuid;
var device_version;
var connection_type;
var versao = "1.1.31";
// Armazena os objetos retornados via Ajax.

var _pessoa_registrada; // Contem a info. da pessoa registrada no banco
var _enquete;
var _resposta;
var _dispositivo;
var deviceOnLine = true;

var pushEvent = {
    isMessage: false,
    data: null
};


document.addEventListener("deviceready", onDeviceReady, false);
window.onload = function () {


}


// Cordova is ready
//
function onDeviceReady() {


    FastClick.attach(document.body);
    // Informa que a função onPause deve ser chamada quanto o App
    // é colocado em background
    document.addEventListener("pause", onPause, false);
    // Informa que a função onResume deve ser chamada quando o App
    // retorna da condição de background
    document.addEventListener("resume", onResume, false);
    // Informa que as funções onOffline e onLine devem ser chamadas quando o
    // dispositivo perde ou obter a conexão com a Internet.
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);

    // Desabilita o botão de Voltar do Android e Windows
    document.addEventListener("backbutton", function (e) {
        e.preventDefault();
    }, false);


    // Atribui a versão do sistema.
    $('#euopino_info').empty();
    $('#euopino_info').append('<b><i>Versão do Aplicativo:</i></b> ' + versao)
    $('#euopino_info').enhanceWithin();


    initPushwoosh();

    // Obtem o uuid via Pushwoosh API no lugar do Cordova.
    // Isso resolve o problema do WIndowsPhone.
    var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
    pushNotification.getPushwooshHWID(
            function (token) {
                // alert('getPushwooshHWID: ' + token);
                device_uuid = token;
                push_id = token;
                // As demais informações dos dispositivo são obtidas
                // do ambiente Cordova/PhoneGap
                device_model = device.model;
                device_platform = device.platform;
                device_version = device.version;
                // Obtem a informação da localização.


                latitude = 0;
                longitude = 0;
                accuracy = 0;
                registraAcesso();

                /* Retira temporariamente a coleta da localização
                 if (device.platform !== "Win32NT" && device.platform !== "windows") {
                 navigator.geolocation.getCurrentPosition(onSuccessGeoLocation, onErrorGeoLocation, {maximumAge: 5000, timeout: 9000, enableHighAccuracy: false});
                 } else {
                 latitude = 0;
                 longitude = 0;
                 accuracy = 0;
                 registraAcesso();
                 }
                 */

                // Verifica se há algum usuário registrado com esse dispositivo móvel
                // Casa não exista um usuário registrado (primeira vez), o processo de
                // registro será apresentado.

                // alert('Obtendo Token: ' + device_uuid);

                obtemInformacaoUsuario();

            }
    );

    // Captura mensagem push
    document.addEventListener('push-notification',
            function (event) {
                var title = event.notification.title;
                var userData = event.notification.userdata;
                //dump custom data to the console if it exists
                if (typeof (userData) !== "undefined") {

                    pushEvent.isMessage = true;
                    pushEvent.data = userData;

                    // alert('Evento do PushNotification - Dados da mensagem: ' + JSON.stringify(userData));
                    // Vai para questionário.
                }

            }
    );


    var networkState = navigator.connection.type;
    switch (networkState) {
        case Connection.UNKNOWN:
            connection_type = 'Desconhecida';
            break;
        case Connection.ETHERNET:
            connection_type = 'Ethernet';
            break;
        case Connection.WIFI:
            connection_type = 'WiFi';
            break;
        case Connection.CELL_2G:
            connection_type = '2G';
            break;
        case Connection.CELL_3G:
            connection_type = '3G';
            break;
        case Connection.CELL_4G:
            connection_type = '4G';
            break;
        case Connection.CELL:
            connection_type = 'Generic';
            break;
        case Connection.NONE:
        default:
            connection_type = 'Não Conectado';
            navigator.notification.alert('Este dispositivo não está conectado a Internet.\nConecte seu celular a uma rede 3G ou WiFi.', 'Atenção', 'OK');
    }
}

function fSpinner(strShowOrHide) {
    setTimeout(function () {
        $.mobile.loading(strShowOrHide);
    }, 1);
}

/*
 * Esta função será executada toda vez que o aplicativo for para
 * background.
 *
 * @returns {undefined}
 */
function onPause() {
    // alert('Fui!!!!');
}


/*
 * onResume
 *
 *  Esta função é executada toda vez que o aplicativo volta de
 *  da condição de "background"
 *
 * @param {type} position
 * @returns {undefined}
 */
function onResume() {
    var page = $(':mobile-pagecontainer').pagecontainer('getActivePage')[0].id;
    if (page !== 'pg_enquete' && page !== 'pg_confirmacao' && page !== 'pg_reenviacodigo' && page !== 'pg_termos' && page !== 'pg_identificacao') {
        // Processa como se estivesse entrando no App
        obtemInformacaoUsuario();
        $.mobile.changePage("#pg_bemvindo");
    }
}


/*
 *  onOffline
 *
 *  Alerta o usuário sobre a perda da conexão com a Internet
 *
 * @param {type} position
 * @returns {undefined}
 */
function onOffline() {
    // O alerta só deve ser apresentado uma vez
    if (deviceOnLine) {
        navigator.notification.alert('Seu dispositivo perdeu a conexão com a Internet.\nPor favor verifique a conexão com a Internet.', function () {
        }, "Atenção", "OK");
        deviceOnLine = false;
    }
}

function onOnline() {
    deviceOnLine = true;
}

/* onSuccessGeoLocation
 *
 * Esta função é chamada quando há exito na obtenção da localização
 * pelo dispositivo móvel.
 *
 * @param {type} error
 * @returns {undefined}
 */
function onSuccessGeoLocation(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    accuracy = position.coords.accuracy; // precisão em metros
    registraAcesso();
}



/* onErrorGeoLocation
 *
 * Esta função é chamada quando os recursos de localização do
 * dispositivo nóvel falham.
 *
 * @returns {undefined}
 */
function onErrorGeoLocation(error) {

    latitude = 0.0;
    longitude = 0.0;
    accuracy = -1.0; // precisão em metros
    navigator.notification.alert('O serviço de localização do dispositivo não está configurado.', function () {
    }, "Atenção", "OK");
    registraAcesso();
}


/* showSplash
 *
 * @returns {undefined}
 */
function showSplash() {
    navigator.splashscreen.show();
    setTimeout(hideSplash, 20000);
}


/* hideSplash
 *
 * @returns {undefined}
 */
function hideSplash() {
    navigator.splashscreen.hide();
}



/*
 * processaNovoUsuario
 *
 * Monta a mensagem destinada aos novos usuários.
 * Esta função é chamada quando o dispositivo móvel não é encontrado
 * na base de dados. É possível que o usuário já seja registrado com
 * outro dispositivo móvel. O processo iniciado a partir desta função
 * vincula o dispositivo móvel ao usuário.
 *
 * @param {type} enquete
 * @returns {undefined}
 */

function processaNovoUsuario() {

    $('#bemvindo').empty();
    $('#bemvindo').append('<p>Olá, você está executando este aplicativo pela primeira vez neste dispositivo móvel.');
    $('#bemvindo').append(' Por esta razão, precisamos que você confirme o Código de Identificação que você recebeu por e-mail ou SMS. Toque no botão <b>Prosseguir</b> para informar o seu código.</p>');

    $('#div_bt_acao').empty();
    $('#div_bt_acao').append('<input type="button" onClick="gotoPage(\'#pg_identificacao\');" value="Prosseguir" />');
    $('#div_bt_acao').enhanceWithin();

}

/*
 * processaEnquete
 *
 * Processa uma enquete pendente para o usuário.
 * Esta função é chamada quando o dispositivo móvel está registrado e
 * vinculado à um usuário. Neste caso o aplicativo verifica se há enquete
 * pendente. Caso exista alguma enquete pendente, esta função monta a enquete
 * e inícia o fluxo de telas para o preenchimento da enquete.
 *
 * @param {type} enquete
 * @returns {undefined}
 */
function processaEnquete(enquete) {

    montaEnquete(enquete);

    if (enquete.tipo_questao === 'mensagem') {
        mostraMensagem('Há uma nova mensagem para você', '#pg_mensagem', '#pg_mensagem');
        $('#div_bt_acao').empty();
        $('#div_bt_acao').append('<input type="button" onClick="gotoPage(\'#pg_mensagem\');" value="Ler Mensagem" />');
        $('#div_bt_acao').enhanceWithin();
    } else {
        mostraMensagem('Há uma nova enquete para você. Clique no Botão a seguir para responder a enquete', '#pg_enquete', '#pg_enquete');
        $('#div_bt_acao').empty();
        $('#div_bt_acao').append('<input type="button" onClick="gotoPage(\'#pg_enquete\');" value="Responder Enquete" />');
        $('#div_bt_acao').enhanceWithin();
    }

    // alert('Saindo do processaEnquete');
}


/* montaEnquete
 *
 * Com base nas informação obtidas do servidor (parâmetro data no formato JSON),
 * esta função monta um enquete conforme as orientações contidas no metadados da enquete.
 *
 *
 * @param {type} device_id
 * @returns {undefined}
 */
function montaEnquete(data) {

    var html = '';
    var tipo = 'text';
    $('#enquete').empty();
    $('#enquete_enunciado').empty();
    $('#enquete_enunciado').append('<p><b>' + data.enunciado + '</b></p>');
    $('#enquete_enunciado').trigger('create');

    // Verifica o tipo da questão
    if (data.tipo_questao === 'simples') {
        html += '<legend>Selecione uma opção</legend>';
        for (i in data.item) {
            html += '<input type="radio" name="radioEnquete" id="radio' + i + '" value="' + i + '"  >';
            html += '<label for="radio' + i + '">' + data.item[i].enunciado + '</label>';
            // Trata item do tipo outro
            if (data.item[i].outro) {
                html += '<p>' + data.item[i].outro_texto + '</p>';
                html += '<input name="item_' + i + '" id="item_' + i + '"  type="text">';
            }
        }
    } else if (data.tipo_questao === 'multipla') {
        html += '<legend>Selecione uma ou mais opções</b></legend>';
        for (i in data.item) {

            html += '<label><input type="checkbox" name="chkEnquete' + i + '" id="chkEnquete' + i + '" value="1">' + data.item[i].enunciado + '</label>';
            // Trata item do tipo outro
            if (data.item[i].outro) {
                html += '<p>' + data.item[i].outro_texto + '</p>';
                html += '<input name="item_' + i + '" id="item_' + i + '"  type="text">';
            }
        }
    } else if (data.tipo_questao === 'aberta') {
        html += 'Digite o(s) dado(s) solicitado(s)';
        html += '</div>';
        for (i in data.item) {
            // html += '<label for="item_' + i +  '">' + data.item[i].enunciado + '</label>';
            switch (data.item[i].tipo_dado) {
                case 'TEXTO':
                    tipo = 'text';
                    break;
                case 'NUMERO':
                    tipo = 'number';
                    break;
                case 'DATA':
                    tipo = 'date';
                    break;
                case 'TELEFONE':
                    tipo = 'tel';
                    break;
                case 'LINK':
                    tipo = 'url';
                    break;
                case 'EMAIL':
                    tipo = 'email';
                    break;
                default:
                    tipo = 'text';
            }

            if (data.item[i].outro) {
                html += '<p>' + data.item[i].enunciado + ' (' + data.item[i].outro_texto + ') </p>';
                html += '<input name="item_' + i + '" id="item_' + i + '"  type="text">';
            } else {
                html += '<p>' + data.item[i].enunciado + '</p>';
                html += '<input name="item_' + i + '" id="item_' + i + '"  type="' + tipo + '">';
            }
        }
    } else if (data.tipo_questao === 'mensagem') {
        // navigator.notification.alert(data.enunciado, function () {}, "Atenção", "OK");
        $('#mensagem').empty();
        $('#mensagem').append("<p>" + data.enunciado + "</p>");
        $('#mensagem').trigger('create');
    }
    $('#enquete').append(html);
    $('#enquete').trigger('create');

}

/*
 * montaConfirmacao
 *
 * Monta uma página de confirmação da resposta do consultado.
 * Esta página solicitará a confirmação da resposta com base no
 * conteúdo apresentado.
 *
 * @param {type} questao
 * @param {type} resposta
 * @returns {undefined}
 */
function montaConfirmacao(questao, resposta) {

    $('#confirmacao_enunciado').empty();
    $('#confirmacao_enunciado').append(questao.enunciado);
    $('#confirmacao_enunciado').trigger('create');

    $('#confirmacao_resposta').empty();

    var jresp = JSON.parse(resposta);

    if (questao.tipo_questao === 'multipla') {
        jresp.resposta.forEach(function (doc) {
            $('#confirmacao_resposta').append('<br>' + doc.numero + ' - ' + doc.item);
        });
    } else if (questao.tipo_questao === 'simples') {
        $('#confirmacao_resposta').append('<br>' + jresp.numero + ' - ' + jresp.resposta);
    } else if (questao.tipo_questao === 'aberta') {
        jresp.resposta.forEach(function (doc) {
            $('#confirmacao_resposta').append('<br>' + doc.item + ': ' + doc.resposta);
        });
    } else {
        $('#confirmacao_resposta').append('<br> Erro desconhecido. Entre e contato com o suporte.');
    }

    $('#confirmacao_resposta').trigger('create');

    gotoPage('#pg_enquete_confirmacao');
}


/*
 * obtemEsteDispositivo
 * Obtem do usuário as informações deste dispositivo.
 *
 * @param {type} device_id
 * @returns {undefined}
 */
function obtemEsteDispositivo(dispositivo) {

    var dadosDispositivo = null;
    dispositivo.forEach(function (device) {
        if (device.device_id === device_uuid.toString()) {
            dadosDispositivo = device;
            return device;
        }
    });
    return dadosDispositivo;
}


/*******************************************************************
 * Chamadas AJAX ao Servidor NODEJS
 ******************************************************************/


/*
 * obtemInformacaoUsuario
 *
 * Obtem a informação do usuário consultando o registro do dispositivo.
 * Esta função faz uma chamada ao Servidor via AJAX solicitando informações
 * do usuário com base no código de identificação do dispositivo móvel.
 *
 * @returns {undefined}
 */
function obtemInformacaoUsuario() {

    var _data = {
        device_id: device_uuid
    };
    jQuery.ajax({
        type: "POST",
        url: _url_base + 'pessoa/obtempessoa',
        data: _data,
        cache: false,
        datatype: 'json',
        beforeSend: function () {
            fSpinner('show');
        },
        complete: function () {
            fSpinner('hide');
        },
        success: function (pessoa) {

            // alert('Usuário obtido: ' + JSON.stringify(pessoa));

            _pessoa_registrada = pessoa;
            // Obtem da lista de dispositivos do usuário, informações
            // deste dispositivo
            _dispositivo = obtemEsteDispositivo(pessoa.dispositivo);

            if (pushEvent.isMessage) {
                obtemEnquetePush(pushEvent.data);
                pushEvent.isMessage = false;
            } else {

                // Se este dispositivo está confirmado, obtem enquete
                if (_dispositivo.confirmacao.status) {
                    dadosEnquete = obtemEnquete('INFO_USUARIO');
                } else {
                    // Reenvia código de confirmação
                    alert('SMS: Seu código de confirmação é: ' + _dispositivo.confirmacao.numero);
                    // Apresenta a tela para confirmação de código
                    $.mobile.changePage("#pg_confirmacao");
                }
            }

        },
        error: function (result) {
            // Verifica se há alguém com este dispositivo no banco de dados
            if (result.status === 404) {
                processaNovoUsuario();
            } else {
                navigator.notification.alert('Não foi possível acessar o servidor.\nTente mais tarde.', function () {
                }, "Atenção", "OK");
            }
        }
    });
}

/*
 * obtemEnquete
 *
 * Obtem a primeira enquete disponível para o usuário
 *
 * @returns {undefined}
 */
function obtemEnquete(acao) {


    var _data = {
        id_pessoa: _pessoa_registrada._id
    };
    $('#div_bt_acao').empty();
    jQuery.ajax({
        type: "POST",
        url: _url_base + 'controleEnquete/obtemenquete',
        data: _data,
        cache: false,
        datatype: 'json',
        beforeSend: function () {
            fSpinner('show');
        },
        complete: function () {
            fSpinner('hide');
        },
        success: function (enquete) {
            // alert('Sucesso ao obter enquete. Ação: ' + acao);
            processaEnquete(enquete.questao);
            _enquete = enquete;

            if (acao === 'CONFIRMAR' || acao === 'GRAVAR') {
                // alert('TENTANDO MUDAR PARA Página de Enquete');
                if (enquete.questao.tipo_questao === 'mensagem') {
                    $.mobile.changePage("#pg_mensagem");
                } else {
                    $.mobile.changePage("#pg_enquete");
                }
            } else if (acao === 'DECLINAR') {
                $.mobile.changePage("#pg_agradecimento");
            } else {
                $.mobile.changePage("#pg_bemvindo");
            }
            return response;
        },
        error: function (result) {

            if (result.status === 404) {
                if (acao !== 'DECLINAR') {
                    if (acao === 'GRAVAR' || acao === 'CONFIRMAR') {
                        mostraMensagem('Obrigado por responder a nossa enquete. Você será notificado quando uma nova enquete for criada.', '#', '#');
                    }
                    if (acao === 'MENSAGEM') {
                        mostraMensagem('Obrigado por ler a nossa mensagem. Você será notificado quando uma nova mensagem ou enquete for criada.', '#', '#');
                    } else {
                        mostraMensagem('Não há enquete disponível para você. Você será notificado quando uma nova enquete for criada.', '#', '#');
                    }
                    $.mobile.changePage("#pg_bemvindo");
                }
            } else {
                mostraMensagem('O serviço de enquete não está disponível no momento. Tente mais tarde.', '#', '#');
                $.mobile.changePage("#pg_bemvindo");
            }
        }
    });
    return null;
}


/**
 * obtemEnquetePush
 * Esta função obtem a enquete a partir da mensagem do PushNotification.
 *
 * A chamada ajax retorna a pessoa e a enquete enviada em pushData
 *
 * @param {type} pushData
 * @returns {undefined}
 */
function obtemEnquetePush(pushData) {

    var _data = {
        device_id: device_uuid,
        id_pessoa: _pessoa_registrada._id,
        id_enquete: pushData.id_enquete,
        id_questao: pushData.id_questao
    };

    // alert('Obtendo para: ' + _data.id_pessoa);

    jQuery.ajax({
        type: "POST",
        url: _url_base + 'controleEnquete/obtemenquetepush',
        data: _data,
        cache: false,
        datatype: 'json',
        beforeSend: function () {
            fSpinner('show');
        },
        complete: function () {
            fSpinner('hide');
        },
        success: function (retorno) {

            _pessoa_registrada = retorno.pessoa;
            _enquete = retorno.enquete;

            // alert('Retorno Enquete Push: ' + JSON.stringify(retorno));

            if (retorno.status !== 'RESPONDIDA') {
                montaEnquete(retorno.enquete.questao);
                if (retorno.enquete.questao.tipo_questao === 'mensagem') {
                    $.mobile.changePage("#pg_mensagem");
                } else {
                    $.mobile.changePage("#pg_enquete");
                }
            } else {
                showMsg('Você já respondeu esta enquete.')
            }

        },
        error: function (result) {
            navigator.notification.alert('Não foi possível acessar o servidor.\nTente mais tarde.', function () {
            }, "Atenção", "OK");
        }
    });

}


/*
 * montaResposta
 *
 * Esta função prepara a resposta para ser gravada
 *
 * @param {type} acao
 * @returns {undefined}
 */
function montaResposta(acao) {

    var resposta;
    var nAux;
    var respondido = false;


    if (_enquete.questao.tipo_questao === 'simples') {

        // TO DO: Verifica se foi houve resposta
        //

        // Monta a resposta to tipo simples
        nAux = parseInt($('input[name=radioEnquete]:checked').val());
        if (isNaN(nAux)) {
            respondido = false;
        } else {
            resposta = '{"status" : "RESPONDEU", "resposta" : "' + _enquete.questao.item[nAux].enunciado + '", "numero" : ' + (nAux + 1) +
                    ', "proxima_questao": ' + _enquete.questao.item[nAux].proxima_questao +
                    ', "nome_atributo": "' + _enquete.questao.item[nAux].nome_atributo +
                    '", "valor_atributo": "' + _enquete.questao.item[nAux].valor_atributo + '"}';
            respondido = true;
        }

    } else if (_enquete.questao.tipo_questao === 'multipla') {

        // TO DO: Verifica se existe quantidade mínima ou máxima selecionada.
        //        Caso exista, verificar se a resposta está de acordo com a regra

        // TO DO: Verificar se há discordância entre itens selecionados.
        //        Isto é, se há contradição na resposta segundo a regra.

        nAux = 0;
        resposta = '{"status" : "RESPONDEU", "resposta" : [';
        for (i in _enquete.questao.item) {
            if ($('#chkEnquete' + i).is(':checked')) {
                nAux = parseInt(i) + 1;
                resposta += '{"item" : "' + _enquete.questao.item[i].enunciado + '", "numero": ' + nAux +
                        ', "proxima_questao": ' + _enquete.questao.item[i].proxima_questao +
                        ', "nome_atributo": "' + _enquete.questao.item[i].nome_atributo +
                        '", "valor_atributo": "' + _enquete.questao.item[i].valor_atributo + '"},';
            }
        }

        if (nAux > 0) {
            resposta += "]}";
            // retira a vírgula do último alemento adicionada indevidamente.
            resposta = resposta.replace('},]', '}]');
            respondido = true;
        } else {
            respondido = false;
        }

    } else if (_enquete.questao.tipo_questao === 'aberta') {

        // TO DO:  Analisa se há alguma regra de domínio a ser verificada.
        //         Caso afirmativo, valida cada item respondido segundo a regra
        nAux = 0;
        resposta = '{"status" : "RESPONDEU", "resposta" : [';

        var valido = true;

        _enquete.questao.item.forEach(function (item, i) {
            nAux = i + 1;
            var valor = $('#item_' + i).val();

            if (item.regra_validacao !== '' && item.regra_validacao !== null) {

                var token =  ( item.tipo_dado === 'NUMERO')? '':"'";

                var expr = "var valor = " +  token + valor + token + "; " + item.regra_validacao;

                var resultado;
                try {
                    resultado = eval(expr);
                    if (!resultado) {
                        showMsg(item.mensagem_erro);
                        valido = false;
                        return;
                    }
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        showMsg("Erro de Sintaxe na expressão de validação. Chame o suporte.");
                    } else {
                        showMsg('Um erro não sperado ocorreu ao tentar validar o campo')
                    }
                    valido = false;
                }
            }

            resposta += '{"item" : "' + item.enunciado + '", "numero": ' + nAux +
                    ', "resposta": "' + valor + '"},';

        });

        if ( !valido ) return;

        if (nAux > 0) {
            resposta += "]}";
            // retira a vírgula do último alemento adicionada indevidamente.
            resposta = resposta.replace('},]', '}]');
            respondido = true;
        } else {
            respondido = false;
        }
    } else { // Quando for Mensagem/Aviso
        respondido = true;
        resposta = '{"status" : "LIDA", "resposta" : "MENSAGEM LIDA"}';
        _resposta = resposta;
        gravaResposta('MENSAGEM');
        return;

    }


    if (!respondido) {
        navigator.notification.alert('Esta ação requer que você responda a questão. Caso não queira responder agora, clique em Adiar. Caso não queira responder de forma alguma, clique em Declinar.', function () {
        }, "Atenção", "OK");
        return;
    }


    _resposta = resposta;

    if (_enquete.controle.confirmacao) {
        montaConfirmacao(_enquete.questao, resposta);
        return;
    }

    gravaResposta('GRAVAR');

}


/*
 * declinaResposta
 *
 * Esta função marca a resposta como RESPONDIDA com a RESPOSTA DECLINOU
 *
 * @returns {undefined}
 */
function declinaResposta() {
    showMsg('Esta questão NÃO será mais enviada para você.');
    _resposta = '{"status" : "RECUSOU", "resposta" : null }';
    gravaResposta('DECLINAR');
}


/*
 * adiaResposta
 *
 * Esta função não ALTERA o STATUS da questão.
 * A questão continuará na fila de questão para ser respondida.
 *
 * @returns {undefined}
 */
function adiaResposta(acao) {
    showMsg('Esta questão ficará na fila de questões para ser respondida por você em outra oportunidade.');
}

/*
 * gravaResposta
 *
 * Esta função grava a resposta no banco de dados.
 *
 * @param {type} resposta - estrutura JSON com a resposta
 * @param {type} acao   - DECLINAR, ADIAR ou RESPONDER
 * @returns {undefined}
 */
function gravaResposta(acao) {

    var _data = {
        id_pessoa: _pessoa_registrada._id,
        id_enquete: _enquete.id_enquete,
        id_questao: _enquete.questao.id_questao,
        tipo_questao: _enquete.questao.tipo_questao,
        enunciado: _enquete.questao.enunciado,
        resposta: _resposta
    };

    jQuery.ajax({
        type: "POST",
        url: _url_base + 'controleEnquete/gravaresposta',
        data: _data,
        cache: false,
        datatype: 'json',
        beforeSend: function () {
            fSpinner('show');
        },
        complete: function () {
            fSpinner('hide');
        },
        success: function (response) {
            // obtemInformacaoUsuario();
            dadosEnquete = obtemEnquete(acao);
            return response;
        },
        error: function (result) {
            if (result.status === 404) {
                showMsg('Ocorreu um problema ao tentar gravar a sua resposta.');
            } else {
                navigator.notification.alert('O serviço de enquete não está disponível no momento.\nTente mais tarde.', function () {
                }, "Atenção", "OK");
            }
        }
    });
}

/*
 * registraAcesso
 *
 * Esta função registra o acesso de um dispositivo móvel independente
 * da execução de qualquer função do aplicativo.
 * Grava no banco de dadosas informações de geolocalização  e do
 * dispositivo móvel.
 *
 * @returns {unresolved}
 */
function registraAcesso() {

    var _data = {
        device_id: device_uuid,
        device_model: device_model,
        device_platform: device_platform,
        device_version: device_version,
        network_type: connection_type,
        latitude: latitude,
        longitude: longitude
    };
    jQuery.ajax({
        type: "POST",
        url: _url_base + 'monitor/',
        data: _data,
        cache: false,
        datatype: 'json',
        success: function (response) {
            return response;
        },
        error: function () {
            navigator.notification.alert('Registro de Acesso. Não foi possível acessar o servidor.\nTente mais tarde.', function () {
            }, "Atenção", "OK");
        }
    });
}


function adicionaNovoDispositivo() {



    var acao = radioChecked($('input[name=radioNovoDispositivoMovel]:checked').val());
    var ddd = $('#ddd_novo_dispositivo').val();
    var numero = $('#numero_novo_dispositivo').val();


    if (acao === '' || acao === null) {
        showMsg('Você deve informar se este dispositivo deve ser adicional ou substituído');
        return;
    }

    if (ddd === '' || ddd === null) {
        showMsg('Você deve informar o ddd do seu celular');
        return;
    }

    if (numero === '' || numero === null) {
        showMsg('Você deve informar o número do seu celular');
        return;
    }

    var parametros = {
        "acao": acao,
        "id_pessoa": _pessoa_registrada._id,
        "ddd": ddd,
        "numero_celular": numero,
        "push_id": push_id,
        "device_id": device_uuid,
        "device_model": device_model,
        "device_platform": device_platform,
        "device_version": device_version,
        "pin": _pessoa_registrada.pin,
        "status": true
    };

    adicionaDispositivo(parametros);

}


/*
 * adicionaDispositivo
 *
 * Adiciona um novo dispositivo a pessoa
 *
 * @returns {undefined}
 */
function adicionaDispositivo(parametros) {


    var _data = parametros;

    jQuery.ajax({
        url: _url_base + 'pessoa/adicionadispositivo',
        data: _data,
        dataType: 'json',
        cache: false,
        type: "POST",
        accepts: "application/json",
        beforeSend: function () {
            fSpinner('show');
        },
        complete: function () {
            fSpinner('hide');
        },
        success: function (aluno, textStatus, jqXHR) {

            showMsg('Novo Dispositivo registrado com sucesso');

            obtemInformacaoUsuario();
        },
        error: function () {
            navigator.notification.alert('Ocorreu um erro ao tentar acessar o servidor.\nTente mais tarde.', function () {
            }, "Atenção", "OK");
        }
    });
}

/*
 *
 * @returns {undefined}
 */
function obtemDocumento(pessoa, tipo) {

    var numero = null;
    pessoa.documento.forEach(function (doc) {

        if (doc.tipo === tipo) {
            numero = doc.numero;
            return;
        }
    });
    return numero;
}


/*
 * validaIdentificacao
 *
 * Esta função critica os dados relativo a uma pessoa.
 * Caso seja uma pessoa nova, chama a função registraPessoa
 * @returns {unresolved}
 */
function validaIdentificacao() {

    // Critica CPF
    var pin = $('#PIN').val().toString().toUpperCase();

    if (pin === '') {
        showMsg('Você deve informar o Código de Identificação que você recebeu via e-mail ou SMS.\nVerifique suas mensagens de e-mail ou SMS para mais instruções.');
        return;
    }

    var data = {
        tipoDoc: 'PIN',
        numDoc: pin
    }

    jQuery.ajax({
        url: _url_base + 'pessoa/obtempessoapordocumento',
        data: data,
        dataType: 'json',
        cache: false,
        type: "POST",
        accepts: "application/json",
        beforeSend: function () {
            fSpinner('show');
        },
        complete: function () {
            fSpinner('hide');
        },
        success: function (pessoa, status, xhr) {

            _pessoa_registrada = pessoa;

            $('#termo_nome_pessoa').empty();
            $('#termo_nome_pessoa').append('<b>Sr(a) ' + pessoa.nome + '</b>');
            $('#termo_nome_pessoa').enhanceWithin();

            // Verificar se já há outro dispositivo móvel registrado.
            // Caso afirmativo:
            // O que o usuário quer?
            //      Adicionar mais este dispositivo;
            //      Substituir o dispositivo anterior por este;
            //
            //      Alterou o número do telefone?
            //
            // alert('Qtd dispositivos: ' + pessoa.dispositivo.length + '-> ' + JSON.stringify(pessoa.dispositivo));
            if (pessoa.dispositivo.length > 0) {
                $.mobile.changePage("#pg_outro_dispositivo");
            } else {

                $('#nome_respondente').val(pessoa.nome);
                // $('#ddd').val(pessoa.contato.celular.ddd);

                $.mobile.changePage("#pg_termos");
            }

        },
        error: function (xhr, status, error) {

            if (xhr.status === 404) {
                showMsg('O código de identificação informado não foi localizado. Verifique em seu e-mail ou SMS se o código está correto.');
            } else {
                showMsg('Ocorreu um erro ao tentar fazer o seu registro.\nTente mais tarde.');
            }
        }

    });



}

/*
 * registraPessoa
 *
 *  Registra uma pessoa no banco de dados
 *
 * @returns {undefined}
 */
function gravaPessoa(acao) {

    var sexo = radioChecked($('input[name=radioSexoPessoa]:checked').val());
    var nome = $('#nome_respondente').val();
    var dia, mes, ano, dataNascimento;
    var url_acao;

    var pessoa = {
        "_id": _pessoa_registrada._id,
        "nome": _pessoa_registrada.nome,
        "sexo": null,
        "documento": {
            "RG": _pessoa_registrada.documento.RG,
            "CPF": _pessoa_registrada.documento.CPF
        },
        "data": {
            "nascimento": null,
            "cadastro": new Date().toISOString()
        },
        "contato": {
            "email": _pessoa_registrada.contato.email,
            "emailAlternativo": null, //$('#email').val(),
            "celular": {
                "ddd": _pessoa_registrada.contato.celular.ddd,
                "numero": _pessoa_registrada.contato.celular.numero
            },
            "whatsapp": {
                "ddd": null, // $('#ddd').val(),
                "numero": null // $('#whatsapp').val()
            }
        },
        "atributo": [
            {
                "nome": "AUTENTICADO",
                "valor": "SIM",
                "data": new Date().toISOString()
            }
        ],
        "dispositivo": [
            {
                "ddd": _pessoa_registrada.contato.celular.ddd,
                "numero_celular": _pessoa_registrada.contato.celular.numero,
                "push_id": push_id,
                "device_id": device_uuid,
                "device_model": device_model,
                "device_platform": device_platform,
                "device_version": device_version,
                "data_registro": new Date().toISOString(),
                "confirmacao": {
                    "numero": _pessoa_registrada.pin,
                    "status": true
                }
            }
        ]
    };

    if (acao === 'UPDATE') {
        url_acao = 'pessoa/atualizapessoa';
    } else {
        url_acao = 'pessoa/registrapessoa';
    }

    // Converte para string porque há um bug no NodeJS/Express (até onde estou endedendo)
    var data = {pessoa: JSON.stringify(pessoa)};

    jQuery.ajax({
        url: _url_base + url_acao,
        data: data,
        dataType: 'json',
        cache: false,
        type: "POST",
        accepts: "application/json",
        beforeSend: function () {
            fSpinner('show');
        },
        complete: function () {
            fSpinner('hide');
        },
        success: function (pessoa, status, xhr) {
            _pessoa_registrada = pessoa;

            showMsg('Obrigado pela confirmação.\nVocê agora está habilitado para participar das pesquisas.');

            obtemInformacaoUsuario();
        },
        error: function (xhr, status, error) {
            showMsg('Ocorreu um erro ao fazer a autenticação.\nTente mais tarde. Se este erro persistir, procure o suporte.');
        }

    });
}


/**
 * reenviaCodigo
 * Reenvia o código de identificação do respondente.
 * @returns {undefined}
 */
function reenviaCodigo() {


    var ddd = $('#ddd_reenvio').val();
    var celular = $('#celular_reenvio').val();
    var email = $('#email_reenvio').val();

    if ((ddd === null && celular === null) || (ddd === '' && celular === '') && (email === null || email === '')) {
        showMsg('Você deve preencher o número do celular com o DDD ou o e-mail');
        return;
    } else if ((celular !== null && celular !== '') && (ddd === null || ddd === '')) {
        showMsg('Informe o número do DDD');
        return;
    }

    var _data = {ddd: ddd, celular: celular, email: email};

    jQuery.ajax({
        url: _url_base + 'pessoa/reenviacodigo',
        data: _data,
        dataType: 'json',
        cache: false,
        type: "POST",
        accepts: "application/json",
        success: function (codigo, textStatus, jqXHR) {
            showMsg('O seu código de identificação foi reenviado. Verifique sua caixa de e-mail ou SMS.')
            $.mobile.changePage("#pg_identificacao");
        },
        error: function () {
            navigator.notification.alert('Os dados que você informou não constam em nossa base de dados. Verifique se o celular ou e-mail estão corretos.', function () {
            }, "Atenção", "OK");
        }
    });

}


/*
 * verificaCodigoPIN
 *
 * Esta função verifica se o código atribuído ao usuário pelo
 * sistema é igual ao informado.
 * Este código deverá ser enviado por SMS ao usuário no processo de
 * registro para então ser confirmado.
 *
 */
function verificaCodigoPIN(componente) {

    var codigo_informado = $(componente).val();

    if (_dispositivo.confirmacao.numero != codigo_informado) {
        showMsg('O código informado não confere com o código enviado. Verifique o código enviado e tente novamente.');
        return;
    }

    var _data = {id_pessoa: _pessoa_registrada._id, device_id: _dispositivo.device_id};

    jQuery.ajax({
        url: _url_base + 'pessoa/confirmacao',
        data: _data,
        dataType: 'json',
        cache: false,
        type: "POST",
        accepts: "application/json",
        success: function (codigo, textStatus, jqXHR) {
            $.mobile.changePage("#pg_confirmacao_agradecimento");
        },
        error: function () {
            navigator.notification.alert('Ocorreu um erro ao tentar acessar o servidor.\nTente mais tarde.', function () {
            }, "Atenção", "OK");
        }
    });
}

function gotoPage(page) {
    $.mobile.changePage(page);
}

/*
 * mostraMensagem
 *
 * Mostra uma mensagem e conduz o fluxo do programa para outra página
 */
function mostraMensagem(msg, proximaPagina, pagina) {
    var html = '<p><i>' + msg + '</i></p>';
    $('#bemvindo').empty();
    $('#bemvindo').append(html);
    // $('#proximo_bemvindo').attr('href', proximaPagina);
    $('#verifica_enquete').attr('href', pagina);
}



function showMsg(msg) {
    navigator.notification.alert(msg, function () {
    }, "Atenção", "OK");
}

// Sai do Aplicativo
function exitFromApp()
{
    navigator.app.exitApp();
}


/*
 *  radioChecked
 *
 *  Retorna o nome do elemento
 *
 */
function radioChecked(elemento) {

    return elemento ? elemento : -1;
}
