[io.dyte.core.permission](../index.md)/[PermissionManager](index.md)

# PermissionManager


expect class [PermissionManager](index.md)


actual class [PermissionManager](index.md)(permissionManagerHost: [PermissionManagerHost](../-permission-manager-host/index.md), permissions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;Permission&gt;, onPermissionChangeListener: OnPermissionChangeListener)

## Constructors

| | |
|---|---|
| [PermissionManager](-permission-manager.md) | <br/>fun [PermissionManager](-permission-manager.md)(permissionManagerHost: [PermissionManagerHost](../-permission-manager-host/index.md), permissions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;Permission&gt;, onPermissionChangeListener: OnPermissionChangeListener) |

## Functions

| Name | Summary |
|---|---|
| [askPermissions](ask-permissions.md) | [common, android]<br/><br/>expect fun [askPermissions](ask-permissions.md)()<br/><br/>actual fun [askPermissions](ask-permissions.md)() |
| [processPermissions](process-permissions.md) | [common, android]<br/><br/>expect fun [processPermissions](process-permissions.md)(results: [IntArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int-array/index.html))<br/><br/>actual fun [processPermissions](process-permissions.md)(results: [IntArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int-array/index.html)) |
