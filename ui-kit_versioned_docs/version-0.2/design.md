---
sidebar_position: 1
---

# About

- Built with **[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)**
- 0️⃣ Zero external dependencies
- 🚀 Blazing fast. Uses browser provided **[ShadowDOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)**
- 🤏 Small bundle size (<500KB) for the entire UI (less if you use individual components)
- 🏳️ Works with React, Angular, Vue, Svelete and everything else
- ShadowDOM provides style encapsulation, your css styles wouldn't affect our styles and vice versa

## Atomic Design

Inspired by Atomic Design pricinciples, our UI Kit is built in layers.
What that means is you can quickly get started by using just one component in single line of code that will give you an entire prebuilt UI.

But you can also go down layers as your need for customization evolves.

![Atomic Design Illustration](/atomic.png)


## Pages

Our topmost, easiest to use layer

A single line of code 

```html
<dyte-meeting id="my-meeting"></dyte-meeting>
```

gives you something like this

![Sample UI](/UIKit_meeting.png)


Comes with everything included - Chats, Polls, Plugins, Recording, Notifications etc

Now going down layers for more customization.

## Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input, image or a button.

Design tokens such as brand colors, font, spacing are also part of atoms.

## Molecules

Things start getting more interesting and tangible when we start combining atoms together.
A text label is not too useful by themselve, but combine many text label and you get a chat message

```html
<dyte-chat-message></dyte-chat-message>
```

gives you

![Sample UI](/UIKit_chat.png)

### Tight integration with our Core SDK

You don't need to pass time, message and sender seperately. You just pass the objects you recieve in the core SDKs

```js
chatMessageElement.message = meeting.chat.messages[0]
```
and it gets all the data it needs on its own

## Organisms

Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.
Extending on the chat example, combining all chat messages and chat input you get the entire chat

```html
<dyte-chat> </dyte-chat>
```

gives you

![Sample UI](/UIKit_chatview.png)


### Tight integration with our Core SDK

Again you don't need to pass each message seperately or handle button clicks to send message. You just pass the objects you recieve in the core SDKs

```js
chatElement.meeting = meeting
```

and it takes all the data on its own, listens to all the events and call every method chat needs to call on its own
