# TP2 - Parcial

## Instalacion

* [ ] Asegurate de tener la ultima version de [node](https://nodejs.org/en)

* [ ] Instala las dependencias `npm install`

## Correr el proyecto

script `npm start` o `npm run watch`

## Probar

El proyecto corre en el puerto 8080: `http://localhost:8080`

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