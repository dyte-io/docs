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

## Plugins

First, you would need to list out the plugins and add methods to activate them on click of a button.

```html
<script>
  // assuming meeting object is available
  const listPluginsEl = document.getElementById('listPluginsEl');

  const plugins = meeting.plugins.all.toArray();

  for (const plugin of plugins) {
    const el = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = 'Activate';
    button.onclick = () => {
      plugin.activate();
    };

    el.innerText = plugin.name;
    el.appendChild(button);

    listPluginsEl.appendChild(el);
  }
</script>

<div id="list-plugins"></div>
```

This snippet will list all the available plugins and a button for each which will activate the respective plugin.

To view a plugin, you will need to listen to the `stateUpdate` event on plugins and show plugins accordingly.

```html
<script>
  const pluginsEl = document.getElementById('plugins');

  meeting.plugins.all.on('stateUpdate', (plugin, { active }) => {
    const pluginId = `plugin-${plugin.id}`;
    if (active) {
      const pluginEl = document.createElement('dyte-plugin-main');
      pluginEl.id = pluginId;
      pluginEl.meeting = meeting;
      pluginEl.plugin = plugin;

      pluginsEl.appendChild(pluginEl);
    } else {
      const existingPlugin = document.getElementById(pluginId);
      if (existingPlugin) {
        existingPlugin.remove();
      }
    }
  });
</script>

<div id="plugins"></div>
```
