[io.dyte.core.incallmanager](../index.md)/[InCallManagerModule](index.md)/[startBusytone](start-busytone.md)

# startBusytone


fun [startBusytone](start-busytone.md)(busytoneUriType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

This is part of start() process. busytoneUriType must not empty. empty means do not play. return false to indicate play tone failed and should be stop() immediately otherwise, it will stop() after a tone completed.
