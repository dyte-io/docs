[io.dyte.core.permission](index.md)

# Package com.dyte.mobilecorekmm.permission

## Types

| Name | Summary |
|---|---|
| [OnPermissionChangeListener](-on-permission-change-listener/index.md) | <br/>interface [OnPermissionChangeListener](-on-permission-change-listener/index.md) |
| [Permission](-permission/index.md) | <br/>enum [Permission](-permission/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[Permission](-permission/index.md)&gt; |
| [PermissionManager](-permission-manager/index.md) | [common, android]<br/><br/>expect class [PermissionManager](-permission-manager/index.md)<br/><br/>actual class [PermissionManager](-permission-manager/index.md)(permissionManagerHost: [PermissionManagerHost](-permission-manager-host/index.md), permissions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;Permission&gt;, onPermissionChangeListener: OnPermissionChangeListener) |
| [PermissionManagerHost](-permission-manager-host/index.md) | <br/>interface [PermissionManagerHost](-permission-manager-host/index.md)<br/>should be implemented by Activity/Fragment/ViewControlled. |
