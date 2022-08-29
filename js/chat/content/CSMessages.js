import CSMessage from "../message/CSMessage";

export class CSMessages extends HTMLElement {

    messages = []
    #default_message = {
        text: 'Напиши Привет или Пожелай доброго дня, мы уже настроили чат для автоматических ответов!',
        time: ''
    }

    connectedCallback() {
        this.appendDefaultMessage()
        // браузер вызывает этот метод при добавлении элемента в документ
        // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    }


    appendDefaultMessage() {
        const message = new CSMessage(this.#default_message)
        this.addMessage(message)
    }

    addMessage(message) {
        this.messages.push(message)
        this.appendChild(message)
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
    }
}
