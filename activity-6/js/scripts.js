
var messages = [];


var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data =[
{
    type: messageType.out,
    user: 'Mike',
    message: 'Hey, you have lunch plans?'
},
{
    type: messageType.in,
    user: 'Joe',
    message: 'Hello Mike, No, How about QDoba?'
},
{
type: messageType.out,
user: 'Mike',
message: 'Alright, lets get going?'
}
];

function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement (message){
    var messageText = document.createTextNode(
        message.user +': ' + message.message );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById ('message-input');
    var messageContainerEl = document.getElementById('message-container');

    switch (event.target.id) {
        case 'send-button':
        user = 'Mike';
        type = messageType.out;
        break;
        case 'replay-button':
        user = 'Joe';
        type = messageType.in;
        break;
        default:
        user= 'unknown'
        type = messageType.unknown;
        break;
    };

    if (messageInput.value != ''){

        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);

        messageContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function loadSeedData() {
    for (var i = 0; i <data.length; i++) {
        var item = data[i];
        var message = new Message(item.type, item.user, item.message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {

    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('replay-button').onclick = addMessageHandler;

    loadSeedData();
};


init();