import CSMessageBodyText from "./CSMessageBodyText";
import CSMessageBodyTime from "./CSMessageBodyTime";


export default class CSMessageBody extends HTMLElement {

    connectedCallback() {
        const message_text = new CSMessageBodyText(this.text)
        const message_time = new CSMessageBodyTime( this.time)
        this.appendChild(message_text)
        this.appendChild(message_time)
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


    constructor({text,time}) {
        super();
        this.time = time;
        this.text = text
    }
}
