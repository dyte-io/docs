# Basic Usage

There are two ways you can use the ui-kit:

1. Use the standalone `dyte-meeting` component which uses the **default config** or your defined config from the ui editor from the dev portal.
2. Use individual components as you wish.

:::info
This assumes you have set up UI Kit as described in [Installation Guide](./installation.md)
:::

## Standalone `dyte-meeting` component

If you don't wish to create the entire UI from scratch with individual components, you can create a custom UI config in the dev portal and use it to create a meeting.

Now just use the `dyte-meeting` component and use the appropriate `roomName`.

```html
<script>
  const init = async () => {
    const meeting = await DyteClient.init({
      authToken: '',
      roomName: '<use-your-room-name>',
    });
    document.getElementById('my-meeting').meeting = meeting;
  };
  init();
</script>

<dyte-meeting id="dyte-meeting"></dyte-meeting>
```

## Using individual components

The UI Kit package offers a wide array of components, which you can use individually to create your own UI however you wish!

For example, if you just wish to use the chat component, you can do it easily:

```html
<script>
  const meeting = /* fetch meeting object */;
  document.getElementById('my-chat').meeting = meeting;
</script>

<dyte-chat id="my-chat"></dyte-chat>
```

Or if you wish to use multiple components:

```html
<script>
  const elements = document.getElementsByClassName('dyte');
  for (const element of elements) {
    element.meeting = meeting;
  }
</script>

<dyte-chat class="dyte"></dyte-chat>
<dyte-participants class="dyte"></dyte-participants>
```
