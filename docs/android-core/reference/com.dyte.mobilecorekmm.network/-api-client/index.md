[io.dyte.core.network](../index.md)/[ApiClient](index.md)

# ApiClient


class [ApiClient](index.md)(controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md), apiOptions: [ApiOptions](../-api-options/index.md)) : [IApiClient](../-i-api-client/index.md)

## Constructors

| | |
|---|---|
| [ApiClient](-api-client.md) | <br/>fun [ApiClient](-api-client.md)(controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md), apiOptions: [ApiOptions](../-api-options/index.md)) |

## Functions

| Name | Summary |
|---|---|
| [getClient](get-client.md) | <br/>open override fun [getClient](get-client.md)(): HttpClient |
| [getICEServers](get-i-c-e-servers.md) | <br/>open suspend override fun [getICEServers](get-i-c-e-servers.md)(): [IceServersWrapper](../../com.dyte.mobilecorekmm.network.models/-ice-servers-wrapper/index.md) |
| [getRoomNodeData](get-room-node-data.md) | <br/>open suspend override fun [getRoomNodeData](get-room-node-data.md)(): [MeetingSessionDataWrapper](../../com.dyte.mobilecorekmm.network.models/-meeting-session-data-wrapper/index.md) |
| [getUserDetails](get-user-details.md) | <br/>open suspend override fun [getUserDetails](get-user-details.md)(): [UserDataWrapper](../../com.dyte.mobilecorekmm.network.models/-user-data-wrapper/index.md) |
| [getUserPreset](get-user-preset.md) | <br/>open suspend override fun [getUserPreset](get-user-preset.md)(): [UserPresetDataWrapper](../../com.dyte.mobilecorekmm.network.models/-user-preset-data-wrapper/index.md) |
| [startRecording](start-recording.md) | <br/>open suspend override fun [startRecording](start-recording.md)(): [StartRecordingResponseWrapper](../../com.dyte.mobilecorekmm.network.models/-start-recording-response-wrapper/index.md) |
| [stopRecording](stop-recording.md) | <br/>open suspend override fun [stopRecording](stop-recording.md)(recordingData: [RecordingData](../../com.dyte.mobilecorekmm.network.models/-recording-data/index.md)) |

## Properties

| Name | Summary |
|---|---|
| [json](json.md) | <br/>val [json](json.md): Json |
