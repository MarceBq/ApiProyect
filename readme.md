# Ejercicio 06 - Type Ahead

## Sobre el reto

La aplicación es un buscador de Ciudades que te muestra también su población

## Conocimientos previos

- Array map
- Javascript fetch()
- DOM Manipulation
- HTML Events

## Pistas

- Tendrás que crear un arreglo de ciudades haciendo `fetch()` al siguiente recurso: <https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json>

- La busqueda de texto mediante al evento `keyup` deberá buscar el texto en cada city y state

- Para que se muestren los resultados, deberás modificar el `innerHTML` del elemento `.suggestions` con un código HTML que tu mismo deberás crear. Ejemplo:

```js
const codeForSuggestionInnerHTML = `
  <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${population}</span>
  </li>
`
```

- Para que se muestre una palabra resaltada usar la clase `.hl`. Ejemplo:

```js
const highlightAngeles = `Los <span class="hl">Angeles</span>`
```

# Demo

<https://jennifertran.github.io/JavaScript30/06%20-%20City%20Search/index.html>
