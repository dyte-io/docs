---
sidebar_position: 5
---

# Integration Guides

A pre-requisite to using any component is loading the `DyteClient` object from web-core.

Check [Basic Usage](./usage.md) to see more.

## Using Chat, Participants, Plugins

To integrate these components, just pass the `meeting` object to them:

```html
<script>
  document.getElementById('my-chat').meeting = meeting;
</script>

<dyte-chat id="my-chat" />
```

Similarly, use it for participants, plugins tag as well.

## Showing Peer View components

Following code will add the `peer-view` component to `#root` element whenever a participant joins.

```html
<script>
  const init = async () => {
    const root = document.getElementById('root');

    const meeting = await DyteClient.init(/** Pass options */);

    meeting.participants.active.on('participantJoined', (peer) => {
      const el = document.createElement('dyte-peer-view');
      el.setAttribute('data-peer-id', peer.id);
      el.variant = 'gradient';
      e.aspectRatio = '2:1';
      el.peer = peer;

      root.appendChild(el);
    });

    meeting.participants.active.on('participantLeft', (peer) => {
      document
        .querySelector(`dyte-peer-view[data-peer-id="${peer.id}"`)
        .remove();
    });
  };

  init();
</script>

<div id="root"></div>
```
