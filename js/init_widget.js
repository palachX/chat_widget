import {CSWidget} from "./CSWidget";
import {CSBody} from "./chat/CSBody";
import {CSContent} from "./chat/CSContent";
import {CSMessages} from "./chat/CSMessages";
import {CSMessage} from "./chat/message/CSMessage";
import {CSMessageBody} from "./chat/message/CSMessageBody";
import {CSMessageBodyText} from "./chat/message/CSMessageBodyText";
import {CSMessageBodyTime} from "./chat/message/CSMessageBodyTime";
import {CSClose} from "./chat/CSClose";
import {CSInput} from "./chat/CSInput";
import {CSMessageClose} from "./chat/CSMessageClose";


const elements_widget = [
    {
        name: 'cs-widget',
        class: CSWidget,
        create: true
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
                create: true
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
        customElements.define(element.name, element.class);

        if (element.create) {
            create_element = document.createElement(element.name)

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
