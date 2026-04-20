# Arquitectura final — TypeScript en UI

## Genéricos (`DataTable<T>`)

Las columnas usan `key: keyof T & string`, de modo que no se pueda referenciar una propiedad inexistente de `T`. En JavaScript estándar, un error de nombre de campo solo se descubre en runtime.

## `Partial<T>` en edición

El borrador de fila es `Partial<T>` porque el usuario puede guardar sin haber tocado todos los campos. TypeScript documenta la intención y evita inventar valores “placeholder”.

## Unión discriminada y `never` (módulo TypeScript)

En el laboratorio TypeScript (`modulo-2`), `EstadoMatricula` y `generarReporte` con `assertNever` obligan a mantener el `switch` al día. Eso reduce regresiones cuando crece el dominio.

## Comparación frente a JavaScript puro

TypeScript elimina una clase grande de errores estructurales antes del runtime: claves inválidas, estados no contemplados, APIs mal consumidas y datos inconsistentes en el borrador de edición.
