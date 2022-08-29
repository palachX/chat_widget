export class CSContent extends HTMLElement {

    get close() {
        return this.hasAttribute('close');
    }

    set close(val) {
        if (val) {
            this.setAttribute('close', '');
        } else {
            this.removeAttribute('close');
        }
    }


    connectedCallback() {
        // браузер вызывает этот метод при добавлении элемента в документ
        // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    }

    disconnectedCallback() {
        // браузер вызывает этот метод при удалении элемента из документа
        // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    }

    static get observedAttributes() {
        return [/* массив имён атрибутов для отслеживания их изменений */];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // вызывается при изменении одного из перечисленных выше атрибутов
    }

    adoptedCallback() {
        // вызывается, когда элемент перемещается в новый документ
        // (происходит в document.adoptNode, используется очень редко)
    }


    constructor() {
        super();
        this.addEventListener('click', e => {
            if (this.close)
                this.closeContent()
        });

    }


    closeContent() {
        this.close = false
        const close = document.getElementsByTagName('cs-chat-close')
        const messages = document.getElementsByTagName('cs-chat-messages')
        const input = document.getElementsByTagName('cs-chat-input')
        close[0].toggleAttribute('hidden')
        messages[0].toggleAttribute('hidden')
        input[0].toggleAttribute('hidden')

        const message_close = document.getElementsByTagName('cs-chat-message-close')
        message_close[0].toggleAttribute('hidden')
    }
}

