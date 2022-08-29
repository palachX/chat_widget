import {CSMessage} from "./message/CSMessage";
import {CSMessageBody} from "./message/CSMessageBody";
import {CSMessageBodyText} from "./message/CSMessageBodyText";
import {CSMessageBodyTime} from "./message/CSMessageBodyTime";

export class CSMessages extends HTMLElement {
    #default_message = [
        {
            name: 'cs-chat-message',
            class: CSMessage,
            create: false,
            children: [
                {
                    name: 'cs-chat-message-body',
                    class: CSMessageBody,
                    create: false,
                    children: [
                        {
                            name: 'cs-chat-message-text',
                            class: CSMessageBodyText,
                            create: false
                        },
                        {
                            name: 'cs-chat-message-time',
                            class: CSMessageBodyTime,
                            create: false
                        }
                    ]
                },
            ]
        },
    ]


    connectedCallback() {
        this.appendDefaultMessage(this.#default_message)

        // браузер вызывает этот метод при добавлении элемента в документ
        // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    }


    appendDefaultMessage(array_elements, append_parent_element = this) {
        array_elements.forEach((element, key) => {
            customElements.define(element.name, element.class);
            const create_element = document.createElement(element.name)

            const append_parent_element_local = append_parent_element.appendChild(create_element)

            if (element.children && element.children.length) {
                this.appendDefaultMessage(element.children, append_parent_element_local)
            }

        });
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
