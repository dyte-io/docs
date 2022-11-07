---
id: "States"
title: "Interface: States"
custom_edit_url: null
---

Global States object which are shared among components

## Indexable

▪ [state: `string`]: `any`

## Properties

### activeBreakoutRoomGrid

• `Optional` **activeBreakoutRoomGrid**: `boolean`

___

### activeBreakoutRooms

• `Optional` **activeBreakoutRooms**: `boolean`

___

### activeBreakoutRoomsManager

• `Optional` **activeBreakoutRoomsManager**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `data?` | `any` |
| `mode?` | ``"create"`` \| ``"edit"`` |

___

### activeBroadcastMessageModal

• `Optional` **activeBroadcastMessageModal**: `boolean`

___

### activeConfirmationModal

• `Optional` **activeConfirmationModal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `cancelText?` | `string` |
| `case?` | `string` |
| `content?` | `string` |
| `ctaText?` | `string` |
| `data?` | `any` |
| `onClick?` | (...`args`: `any`) => `void` |
| `onClose?` | (...`args`: `any`) => `void` |
| `variant?` | `ButtonVariant` |

___

### activeJoinStage

• `Optional` **activeJoinStage**: `boolean`

___

### activeLeaveConfirmation

• `Optional` **activeLeaveConfirmation**: `boolean`

___

### activeMoreMenu

• `Optional` **activeMoreMenu**: `boolean`

___

### activeMuteAllConfirmation

• `Optional` **activeMuteAllConfirmation**: `boolean`

___

### activeOverlayModal

• `Optional` **activeOverlayModal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `description?` | `string` |
| `icon?` | `string` |
| `timeout?` | `number` |
| `title?` | `string` |

___

### activePermissionsMessage

• `Optional` **activePermissionsMessage**: `boolean`

___

### activePipMode

• `Optional` **activePipMode**: `boolean`

___

### activePlugin

• `Optional` **activePlugin**: `boolean`

___

### activeRemoteAccessManager

• `Optional` **activeRemoteAccessManager**: `boolean`

___

### activeScreenShare

• `Optional` **activeScreenShare**: `boolean`

___

### activeSettings

• `Optional` **activeSettings**: `boolean`

___

### activeSidebar

• `Optional` **activeSidebar**: `boolean`

___

### activeSpotlight

• `Optional` **activeSpotlight**: `boolean`

___

### image

• `Optional` **image**: `ImageMessage`

___

### maxPeers

• `Optional` **maxPeers**: `number`

___

### meeting

• `Optional` **meeting**: ``"joined"`` \| ``"idle"`` \| ``"setup"`` \| ``"ended"`` \| ``"waiting"``

___

### page

• `Optional` **page**: `number`

___

### prefs

• `Optional` **prefs**: [`UserPreferences`](UserPreferences.md)

___

### roomLeftState

• `Optional` **roomLeftState**: `RoomLeftState`

___

### sidebar

• `Optional` **sidebar**: ``"chat"`` \| ``"polls"`` \| ``"participants"`` \| ``"plugins"`` \| ``"none"``
