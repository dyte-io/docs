[io.dyte.core.network](../index.md)/[IApiClient](index.md)

# IApiClient


interface [IApiClient](index.md)

## Functions

| Name | Summary |
|---|---|
| [getClient](get-client.md) | <br/>abstract fun [getClient](get-client.md)(): HttpClient |
| [getICEServers](get-i-c-e-servers.md) | <br/>abstract suspend fun [getICEServers](get-i-c-e-servers.md)(): [IceServersWrapper](../../com.dyte.mobilecorekmm.network.models/-ice-servers-wrapper/index.md) |
| [getRoomNodeData](get-room-node-data.md) | <br/>abstract suspend fun [getRoomNodeData](get-room-node-data.md)(): [MeetingSessionDataWrapper](../../com.dyte.mobilecorekmm.network.models/-meeting-session-data-wrapper/index.md) |
| [getUserDetails](get-user-details.md) | <br/>abstract suspend fun [getUserDetails](get-user-details.md)(): [UserDataWrapper](../../com.dyte.mobilecorekmm.network.models/-user-data-wrapper/index.md) |
| [getUserPreset](get-user-preset.md) | <br/>abstract suspend fun [getUserPreset](get-user-preset.md)(): [UserPresetDataWrapper](../../com.dyte.mobilecorekmm.network.models/-user-preset-data-wrapper/index.md) |
| [startRecording](start-recording.md) | <br/>abstract suspend fun [startRecording](start-recording.md)(): [StartRecordingResponseWrapper](../../com.dyte.mobilecorekmm.network.models/-start-recording-response-wrapper/index.md) |
| [stopRecording](stop-recording.md) | <br/>abstract suspend fun [stopRecording](stop-recording.md)(recordingData: [RecordingData](../../com.dyte.mobilecorekmm.network.models/-recording-data/index.md)) |

## Inheritors

| Name |
|---|
| [ApiClient](../-api-client/index.md) |
