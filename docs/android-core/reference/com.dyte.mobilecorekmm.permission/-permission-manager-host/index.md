[io.dyte.core.permission](../index.md)/[PermissionManagerHost](index.md)

# PermissionManagerHost


interface [PermissionManagerHost](index.md)

should be implemented by Activity/Fragment/ViewControlled.

## Functions

| Name | Summary |
|---|---|
| [requestPermission](request-permission.md) | <br/>abstract fun [requestPermission](request-permission.md)(permissions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;)<br/>called when host should call for these permissions from system |
| [shouldShowPermissionRational](should-show-permission-rational.md) | <br/>abstract fun [shouldShowPermissionRational](should-show-permission-rational.md)(permission: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>android specific. |
