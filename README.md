Proyecto Ecommerce React - Comisión 39665 - Antonio Fernandez
=========================================

Levantar el Proyecto
--------------------

Para ejecutar el proyecto, sigue estos pasos:

1.  Ve a la raíz del proyecto, dentro de la carpeta "primera-pre-entrega".
2.  Ejecuta el comando `npm run dev` para iniciar el proyecto con Vite (en lugar de Create React App).

Repositorio
-----------

Este proyecto utiliza Firebase como repositorio de datos. Las colecciones utilizadas son "products" y "orders". Ten en cuenta que los productos insertados son ficticios, es decir, no son reales.

Cumplimiento
------------

El proyecto cumple con la mayoría, si no con todos, los puntos aprendidos durante el curso, incluyendo:

-   Uso de componentes.
-   Utilización de Hooks.
-   Manejo de promesas.
-   Consumo de APIs.
-   Uso de children y patrones.
-   Implementación de enrutamiento y navegación.
-   Manejo de eventos (se utilizó Formik para el formulario).
-   Uso de Context para variables globales.
-   Aplicación de técnicas de rendering.

Flujo de la Aplicación
----------------------

La aplicación permite navegar por la tienda y agregar productos al carrito, siempre y cuando no se supere el stock disponible.

Carrito: Puedes agregar y eliminar productos del carrito, así como vaciar completamente la lista de productos.

Checkout: El proceso de pago (checkout) solo está habilitado si hay productos en el carrito. De lo contrario, se mostrará un mensaje indicando que el carrito está vacío.

Orden: Una vez que tienes productos en el carrito, puedes completar el formulario de pago (checkout) para realizar una orden. El formulario cuenta con validaciones.

Orden Exitosa: Cuando se completa con éxito una orden, se guarda el registro en la colección "orders".

Ejemplo de funcionamiento
----------------------
https://youtu.be/tKyWU51xB0E
