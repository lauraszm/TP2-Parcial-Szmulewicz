# TP2 - Parcial

## Instalacion

* [ ] Asegurate de tener la ultima version de [node](https://nodejs.org/en)

* [ ] Instala las dependencias `npm install`

## Correr el proyecto

script `npm start` o `npm run watch`

## Probar

El proyecto corre en el puerto 8080: `http://localhost:8080`

## Persistencia de datos
El proyecto trabaja con persistencia en memoria usando FileSystem, la informacion se encuentra en el archivo `transactions.json`.
En caso de querer probar la memoria del servidor:
1. Abrir el archivo `\src\services\transaction.service.js`
2. En el constructor, comentar la linea `this.model = Factory.get("FS")` y descomentar `//this.model = Factory.get("MEM")`
3. Probar las mismas rutas

### Rutas disponibles

- Insertar una nueva transaccion: POST "/newTransaction"
```
    {
        “tipo”: “retiro”, 
        “monto”: 1000, 
        “destinatario”: “Juan Perez”
    }
```
- Ver todas las transacciones: GET "/transactions"
- Ver cantidad de movimientos en la cuenta: GET "/transactions/amount"
- Borrar una transaccion: DELETE "/deleteTransaction/{{id}}"

## Autora
** Laura Szmulewicz - Curso YA-21A **