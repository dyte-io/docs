---
sidebar_position: 13
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DytePluginMap"></a>

This is a map of plugins, indexed by `plugin.id`.
This map emits an event whenever a plugin present in the map emits an event.
For example, when a plugin is added to this map, a `pluginAdded` event is
emitted from the map. When a plugin object emits an event `stateUpdate`, the map
re-emits that event (provided the plugin is present in the map).
