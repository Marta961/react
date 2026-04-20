# Arquitectura final
## Genéricos (`DataTable<T>`)
Las columnas usan `key: keyof T & string`, para que no se pueda referenciar una propiedad inexistente de `T`. 
## `Partial<T>` en edición
El borrador de fila se usa `Partial<T>` para que el usuario puede guardar sin haber tocado todos los campos dado que TypeScript registra la intención y evita valores “placeholder”.
## Unión discriminada y `never`
En el laboratorio 2: `EstadoMatricula` y `generarReporte` con `assertNever` obligan a mantener el `switch` al día. Por lo tanto, reduce regresiones cuando crezca el dominio.
## Comparación frente a JavaScript puro
Gracias al uso de TypeScript se elimina una clase grande de errores estructurales antes del runtime: 
- claves inválidas
- estados no contemplados
- APIs mal consumidas
- datos inconsistentes en el borrador de edición
