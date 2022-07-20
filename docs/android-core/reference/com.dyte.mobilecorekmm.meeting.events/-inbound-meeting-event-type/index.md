[io.dyte.core.meeting.events](../index.md)/[InboundMeetingEventType](index.md)

# InboundMeetingEventType


enum [InboundMeetingEventType](index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[InboundMeetingEventType](index.md)&gt;

## Entries

| | |
|---|---|
| [WEB_SOCKET_ROOM_STATE](-w-e-b_-s-o-c-k-e-t_-r-o-o-m_-s-t-a-t-e/index.md) | <br/>[WEB_SOCKET_ROOM_STATE](-w-e-b_-s-o-c-k-e-t_-r-o-o-m_-s-t-a-t-e/index.md) |
| [WEB_SOCKET_ROUTER_CAPABILITY](-w-e-b_-s-o-c-k-e-t_-r-o-u-t-e-r_-c-a-p-a-b-i-l-i-t-y/index.md) | <br/>[WEB_SOCKET_ROUTER_CAPABILITY](-w-e-b_-s-o-c-k-e-t_-r-o-u-t-e-r_-c-a-p-a-b-i-l-i-t-y/index.md) |
| [WEB_SOCKET_CREATE_TRANSPORT](-w-e-b_-s-o-c-k-e-t_-c-r-e-a-t-e_-t-r-a-n-s-p-o-r-t/index.md) | <br/>[WEB_SOCKET_CREATE_TRANSPORT](-w-e-b_-s-o-c-k-e-t_-c-r-e-a-t-e_-t-r-a-n-s-p-o-r-t/index.md)<br/>gets called twice, one to receive and another to transmit |
| [WEB_SOCKET_JOIN_ROOM](-w-e-b_-s-o-c-k-e-t_-j-o-i-n_-r-o-o-m/index.md) | <br/>[WEB_SOCKET_JOIN_ROOM](-w-e-b_-s-o-c-k-e-t_-j-o-i-n_-r-o-o-m/index.md)<br/>getting called twice, which it shouldn't |
| [WEB_SOCKET_PEER_JOINED](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-j-o-i-n-e-d/index.md) | <br/>[WEB_SOCKET_PEER_JOINED](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-j-o-i-n-e-d/index.md)<br/>when someone else joins in the room |
| [WEB_SOCKET_PEER_LEFT](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-l-e-f-t/index.md) | <br/>[WEB_SOCKET_PEER_LEFT](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-l-e-f-t/index.md) |
| [WEB_SOCKET_WAITLIST_PEER_ADDED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-a-d-d-e-d/index.md) | <br/>[WEB_SOCKET_WAITLIST_PEER_ADDED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-a-d-d-e-d/index.md)<br/>waitlist events |
| [WEB_SOCKET_WAITLIST_PEER_ACCEPTED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-a-c-c-e-p-t-e-d/index.md) | <br/>[WEB_SOCKET_WAITLIST_PEER_ACCEPTED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-a-c-c-e-p-t-e-d/index.md) |
| [WEB_SOCKET_WAITLIST_PEER_REJECTED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-r-e-j-e-c-t-e-d/index.md) | <br/>[WEB_SOCKET_WAITLIST_PEER_REJECTED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-r-e-j-e-c-t-e-d/index.md) |
| [WEB_SOCKET_WAITLIST_PEER_CLOSED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-c-l-o-s-e-d/index.md) | <br/>[WEB_SOCKET_WAITLIST_PEER_CLOSED](-w-e-b_-s-o-c-k-e-t_-w-a-i-t-l-i-s-t_-p-e-e-r_-c-l-o-s-e-d/index.md) |
| [WEB_SOCKET_SELECTED_PEERS](-w-e-b_-s-o-c-k-e-t_-s-e-l-e-c-t-e-d_-p-e-e-r-s/index.md) | <br/>[WEB_SOCKET_SELECTED_PEERS](-w-e-b_-s-o-c-k-e-t_-s-e-l-e-c-t-e-d_-p-e-e-r-s/index.md) |
| [WEB_SOCKET_NEW_CONSUMER](-w-e-b_-s-o-c-k-e-t_-n-e-w_-c-o-n-s-u-m-e-r/index.md) | <br/>[WEB_SOCKET_NEW_CONSUMER](-w-e-b_-s-o-c-k-e-t_-n-e-w_-c-o-n-s-u-m-e-r/index.md) |
| [WEB_SOCKET_RESUME_CONSUMER](-w-e-b_-s-o-c-k-e-t_-r-e-s-u-m-e_-c-o-n-s-u-m-e-r/index.md) | <br/>[WEB_SOCKET_RESUME_CONSUMER](-w-e-b_-s-o-c-k-e-t_-r-e-s-u-m-e_-c-o-n-s-u-m-e-r/index.md) |
| [WEB_SOCKET_CLOSE_CONSUMER](-w-e-b_-s-o-c-k-e-t_-c-l-o-s-e_-c-o-n-s-u-m-e-r/index.md) | <br/>[WEB_SOCKET_CLOSE_CONSUMER](-w-e-b_-s-o-c-k-e-t_-c-l-o-s-e_-c-o-n-s-u-m-e-r/index.md) |
| [WEB_SOCKET_CONNECT_TRANSPORT](-w-e-b_-s-o-c-k-e-t_-c-o-n-n-e-c-t_-t-r-a-n-s-p-o-r-t/index.md) | <br/>[WEB_SOCKET_CONNECT_TRANSPORT](-w-e-b_-s-o-c-k-e-t_-c-o-n-n-e-c-t_-t-r-a-n-s-p-o-r-t/index.md) |
| [WEB_SOCKET_PRODUCER_CONNECT](-w-e-b_-s-o-c-k-e-t_-p-r-o-d-u-c-e-r_-c-o-n-n-e-c-t/index.md) | <br/>[WEB_SOCKET_PRODUCER_CONNECT](-w-e-b_-s-o-c-k-e-t_-p-r-o-d-u-c-e-r_-c-o-n-n-e-c-t/index.md) |
| [WEB_SOCKET_PRODUCER_CLOSED](-w-e-b_-s-o-c-k-e-t_-p-r-o-d-u-c-e-r_-c-l-o-s-e-d/index.md) | <br/>[WEB_SOCKET_PRODUCER_CLOSED](-w-e-b_-s-o-c-k-e-t_-p-r-o-d-u-c-e-r_-c-l-o-s-e-d/index.md) |
| [WEB_SOCKET_PEER_MUTED](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-m-u-t-e-d/index.md) | <br/>[WEB_SOCKET_PEER_MUTED](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-m-u-t-e-d/index.md) |
| [WEB_SOCKET_PEER_UNMUTED](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-u-n-m-u-t-e-d/index.md) | <br/>[WEB_SOCKET_PEER_UNMUTED](-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-u-n-m-u-t-e-d/index.md) |
| [WEB_SOCKET_MUTE_ALL_VIDEO](-w-e-b_-s-o-c-k-e-t_-m-u-t-e_-a-l-l_-v-i-d-e-o/index.md) | <br/>[WEB_SOCKET_MUTE_ALL_VIDEO](-w-e-b_-s-o-c-k-e-t_-m-u-t-e_-a-l-l_-v-i-d-e-o/index.md) |
| [WEB_SOCKET_MUTE_ALL_AUDIO](-w-e-b_-s-o-c-k-e-t_-m-u-t-e_-a-l-l_-a-u-d-i-o/index.md) | <br/>[WEB_SOCKET_MUTE_ALL_AUDIO](-w-e-b_-s-o-c-k-e-t_-m-u-t-e_-a-l-l_-a-u-d-i-o/index.md) |
| [WEB_SOCKET_ON_CHAT_MESSAGES](-w-e-b_-s-o-c-k-e-t_-o-n_-c-h-a-t_-m-e-s-s-a-g-e-s/index.md) | <br/>[WEB_SOCKET_ON_CHAT_MESSAGES](-w-e-b_-s-o-c-k-e-t_-o-n_-c-h-a-t_-m-e-s-s-a-g-e-s/index.md) |
| [WEB_SOCKET_ON_CHAT_MESSAGE](-w-e-b_-s-o-c-k-e-t_-o-n_-c-h-a-t_-m-e-s-s-a-g-e/index.md) | <br/>[WEB_SOCKET_ON_CHAT_MESSAGE](-w-e-b_-s-o-c-k-e-t_-o-n_-c-h-a-t_-m-e-s-s-a-g-e/index.md) |
| [WEB_SOCKET_ON_POLL](-w-e-b_-s-o-c-k-e-t_-o-n_-p-o-l-l/index.md) | <br/>[WEB_SOCKET_ON_POLL](-w-e-b_-s-o-c-k-e-t_-o-n_-p-o-l-l/index.md) |
| [WEB_SOCKET_ON_POLLS](-w-e-b_-s-o-c-k-e-t_-o-n_-p-o-l-l-s/index.md) | <br/>[WEB_SOCKET_ON_POLLS](-w-e-b_-s-o-c-k-e-t_-o-n_-p-o-l-l-s/index.md) |
| [WEB_SOCKET_GET_PAGE](-w-e-b_-s-o-c-k-e-t_-g-e-t_-p-a-g-e/index.md) | <br/>[WEB_SOCKET_GET_PAGE](-w-e-b_-s-o-c-k-e-t_-g-e-t_-p-a-g-e/index.md) |

## Properties

| Name | Summary |
|---|---|
| [name](../../com.dyte.mobilecorekmm.models/-dyte-message-type/-p-o-l-l/index.md#-372974862%2FProperties%2F-132266010) | <br/>val [name](../../com.dyte.mobilecorekmm.models/-dyte-message-type/-p-o-l-l/index.md#-372974862%2FProperties%2F-132266010): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [ordinal](../../com.dyte.mobilecorekmm.models/-dyte-message-type/-p-o-l-l/index.md#-739389684%2FProperties%2F-132266010) | <br/>val [ordinal](../../com.dyte.mobilecorekmm.models/-dyte-message-type/-p-o-l-l/index.md#-739389684%2FProperties%2F-132266010): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [type](type.md) | <br/>val [type](type.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
