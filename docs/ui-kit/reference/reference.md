---
id: "reference"
title: "Reference"
custom_edit_url: null
---

## Classes

- [DyteNotificationsAudio](classes/DyteNotificationsAudio.md)

## Interfaces

- [Notification](interfaces/Notification.md)
- [PollObject](interfaces/PollObject.md)
- [States](interfaces/States.md)
- [UIConfig](interfaces/UIConfig.md)
- [UserPreferences](interfaces/UserPreferences.md)

## Type Aliases

### DyteI18n

Ƭ **DyteI18n**: (`key`: keyof [`LangDict`](reference.md#langdict) \| `string` & {}) => `string`

#### Type declaration

▸ (`key`): `string`

i18n helper method type

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof [`LangDict`](reference.md#langdict) \| `string` & {} |

##### Returns

`string`

___

### IconPack

Ƭ **IconPack**: typeof [`defaultIconPack`](reference.md#defaulticonpack)

Icon Pack object type.
- Oject key denotes name of icon
- Object value stores the SVG string

___

### LangDict

Ƭ **LangDict**: typeof [`defaultLanguage`](reference.md#defaultlanguage)

Language dictionary object type

___

### Size

Ƭ **Size**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"xl"``

Screen breakpoints

___

### Sound

Ƭ **Sound**: keyof typeof `SOUNDS`

## Variables

### defaultConfig

• `Const` **defaultConfig**: [`UIConfig`](interfaces/UIConfig.md)

The default UI Config

___

### defaultIconPack

• `Const` **defaultIconPack**: `Object`

Default Icon Pack for UI Kit

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add` | `string` |
| `attach` | `string` |
| `back` | `string` |
| `breakout_rooms` | `string` |
| `call_end` | `string` |
| `chat` | `string` |
| `checkmark` | `string` |
| `chevron_down` | `string` |
| `chevron_left` | `string` |
| `chevron_right` | `string` |
| `chevron_up` | `string` |
| `clock` | `string` |
| `copy` | `string` |
| `delete` | `string` |
| `disconnected` | `string` |
| `dismiss` | `string` |
| `download` | `string` |
| `edit` | `string` |
| `emoji_multiple` | `string` |
| `full_screen_maximize` | `string` |
| `full_screen_minimize` | `string` |
| `image` | `string` |
| `image_off` | `string` |
| `join_stage` | `string` |
| `leave_stage` | `string` |
| `mic_off` | `string` |
| `mic_on` | `string` |
| `more_vertical` | `string` |
| `participants` | `string` |
| `people` | `string` |
| `pin` | `string` |
| `pin_off` | `string` |
| `pip_off` | `string` |
| `pip_on` | `string` |
| `poll` | `string` |
| `recording` | `string` |
| `rocket` | `string` |
| `save` | `string` |
| `search` | `string` |
| `send` | `string` |
| `settings` | `string` |
| `share` | `string` |
| `share_screen_person` | `string` |
| `share_screen_start` | `string` |
| `share_screen_stop` | `string` |
| `shuffle` | `string` |
| `speaker` | `string` |
| `speaker_off` | `string` |
| `spinner` | `string` |
| `spotlight` | `string` |
| `stop_recording` | `string` |
| `subtract` | `string` |
| `video_off` | `string` |
| `video_on` | `string` |
| `wand` | `string` |
| `warning` | `string` |
| `web` | `string` |
| `wifi` | `string` |

___

### defaultLanguage

• `Const` **defaultLanguage**: `Object`

Default language dictionary

#### Type declaration

| Name | Type |
| :------ | :------ |
| `audio` | `string` |
| `cancel` | `string` |
| `chat` | `string` |
| `chat.new` | `string` |
| `connection` | `string` |
| `dismiss` | `string` |
| `end_meeting_for_all` | `string` |
| `full_screen` | `string` |
| `full_screen.exit` | `string` |
| `kick` | `string` |
| `leave` | `string` |
| `leave_confirmation` | `string` |
| `left_meeting` | `string` |
| `mic_off` | `string` |
| `mic_on` | `string` |
| `mute` | `string` |
| `mute_all` | `string` |
| `mute_all.allow_unmute` | `string` |
| `mute_all.description` | `string` |
| `mute_all.header` | `string` |
| `page` | `string` |
| `participant.turn_off_video` | `string` |
| `participants` | `string` |
| `perm.sys_denied.message` | `string` |
| `perm_browser_denied` | `string` |
| `perm_denied_text` | `string` |
| `perm_denied_title` | `string` |
| `perm_sys_denied` | `string` |
| `pip_off` | `string` |
| `pip_on` | `string` |
| `plugins` | `string` |
| `polls` | `string` |
| `recording.started` | `string` |
| `recording.stopped` | `string` |
| `settings` | `string` |
| `setup_screen.join_in_as` | `string` |
| `setup_screen.joining_as` | `string` |
| `setup_screen.your_name` | `string` |
| `share_screen_start` | `string` |
| `share_screen_stop` | `string` |
| `stage.add_to_stage` | `string` |
| `stage.empty_host` | `string` |
| `stage.empty_host_summary` | `string` |
| `stage.empty_viewer` | `string` |
| `stage.join_cancel` | `string` |
| `stage.join_confirm` | `string` |
| `stage.join_summary` | `string` |
| `stage.join_title` | `string` |
| `stage.reconnecting` | `string` |
| `stage.remove_from_stage` | `string` |
| `stage_request.accept_all` | `string` |
| `stage_request.accept_request` | `string` |
| `stage_request.approval_pending` | `string` |
| `stage_request.denied` | `string` |
| `stage_request.denied_tip` | `string` |
| `stage_request.deny_all` | `string` |
| `stage_request.deny_request` | `string` |
| `stage_request.header_title` | `string` |
| `stage_request.leave_stage` | `string` |
| `stage_request.leave_tip` | `string` |
| `stage_request.pending_tip` | `string` |
| `stage_request.request` | `string` |
| `stage_request.request_tip` | `string` |
| `video` | `string` |
| `video_off` | `string` |
| `video_on` | `string` |
| `waitlist.accept_all` | `string` |
| `waitlist.accept_request` | `string` |
| `waitlist.body_text` | `string` |
| `waitlist.deny_request` | `string` |
| `waitlist.header_title` | `string` |

## Functions

### extendConfig

▸ **extendConfig**(`config`, `baseConfig?`): [`UIConfig`](interfaces/UIConfig.md)

Extend the default UI Config with your own

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`UIConfig`](interfaces/UIConfig.md) | Your extended UI Config |
| `baseConfig?` | [`UIConfig`](interfaces/UIConfig.md) | - |

#### Returns

[`UIConfig`](interfaces/UIConfig.md)

New extended UI Config object

___

### generateConfig

▸ **generateConfig**(`oldConfig`, `toExtend?`, `options?`): `Object`

Generates a config with older theme value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldConfig` | `DyteThemePresetV1` | V1 Theme object |
| `toExtend?` | [`UIConfig`](interfaces/UIConfig.md) | UI Config object to extend the generated config |
| `options?` | `ConfigOptions` | Options for toggling components |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `config` | [`UIConfig`](interfaces/UIConfig.md) |
| `data` | `ConfigData` |

___

### provideDyteDesignSystem

▸ **provideDyteDesignSystem**(`el`, `tokens`): `void`

Provides the design system new tokens to consume values from for styling the Dyte UI Kit's UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | The element/node you want to _provide_ Dyte's design system. |
| `tokens` | `DesignTokens` | The design tokens you want to updated. |

#### Returns

`void`

___

### sendNotification

▸ **sendNotification**(`notification`, `playSound?`): `boolean`

Send notification which will be displayed in the `<dyte-notifications />` component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [`Notification`](interfaces/Notification.md) | Notification object |
| `playSound?` | ``"joined"`` \| ``"left"`` \| ``"message"`` | Sound type, if sound type is sent plays that sound with the notification. |

#### Returns

`boolean`

Return value of emitting the event
