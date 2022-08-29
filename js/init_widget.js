import {CSWidget} from "./CSWidget";
import {CSBody} from "./chat/CSBody";
import {CSContent} from "./chat/content/CSContent";
import {CSMessages} from "./chat/content/CSMessages";
import {CSClose} from "./chat/content/CSClose";
import {CSMessageClose} from "./chat/content/CSMessageClose";
import {CSInput} from "./chat/input/CSInput";
import {CSTextArea} from "./chat/input/CSTextArea";
import {CSSend} from "./chat/input/CSSend";
import CSMessage from "./chat/message/CSMessage";
import CSMessageBody from "./chat/message/CSMessageBody";
import CSMessageBodyText from "./chat/message/CSMessageBodyText";
import CSMessageBodyTime from "./chat/message/CSMessageBodyTime";




const elements_widget = [
    {
        name: 'cs-widget',
        class: CSWidget,
        create: true
    },
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
                        name: 'cs-chat-message-body-text',
                        class: CSMessageBodyText,
                        create: false
                    },
                    {
                        name: 'cs-chat-message-body-time',
                        class: CSMessageBodyTime,
                        create: false
                    },
                ]
            },
        ]
    },
    {
        name: 'cs-chat-body',
        class: CSBody,
        create: true,
        children: [
            {
                name: 'cs-chat-content',
                class: CSContent,
                create: true,
                children: [
                    {
                        name: 'cs-chat-messages',
                        class: CSMessages,
                        create: true
                    },
                ]
            },
            {
                name: 'cs-chat-message-close',
                class: CSMessageClose,
                create: true,
                parent: 'cs-chat-content'
            },
            {
                name: 'cs-chat-input',
                class: CSInput,
                create: true,
                children: [
                    {
                        name: 'cs-chat-textarea',
                        class: CSTextArea,
                        create: true,
                        extends: 'textarea'
                    },
                    {
                        name: 'cs-chat-send',
                        class: CSSend,
                        create: true,
                        parent: 'cs-chat-input'
                    },
                ]
            },
        ]
    },
    {
        name: 'cs-chat-close',
        class: CSClose,
        create: true
    },


]

const create_elements = (elements, parent_element_append = null, create_element = null) => {

    elements.forEach((element, key) => {
        if (element.extends)
            customElements.define(element.name, element.class, {extends: element.extends});
        else
            customElements.define(element.name, element.class);

        if (element.create) {
            if (element.extends) {
                create_element = document.createElement(element.extends, {is: element.name})
            } else {
                create_element = document.createElement(element.name)
            }


            if (!parent_element_append) {
                parent_element_append = document.body
            }

            if (element.parent) {
                const parent = document.getElementsByTagName(`${element.parent}`)
                if (parent.length) {
                    parent[0].appendChild(create_element)
                }
            } else {
                parent_element_append = parent_element_append.appendChild(create_element)

            }
        }

        if (element.children) {
            create_elements(element.children, parent_element_append)
        }

    })
}

document.addEventListener("DOMContentLoaded", function (event) {
    create_elements(elements_widget)
})

