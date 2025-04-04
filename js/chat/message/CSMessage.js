import CSMessageBody from "./CSMessageBody";

export default class CSMessage extends HTMLElement {
    time;
    text;

    connectedCallback() {
        const message_body = new CSMessageBody({text: this.text, time: this.time})
        this.appendChild(message_body)
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


    constructor({text, time}) {
        super();
        this.time = time;
        this.text = text
        // const message_html = document.createElement(this.#name)
        // message_html.text = text
        // message_html.time = time
        // document.getElementsByTagName('cs-chat-messages')[0].append(message_html)
    }
}
