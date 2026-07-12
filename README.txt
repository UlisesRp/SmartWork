SMART WORK CAPITAL HUMANO - AJUSTES 01

Cambios aplicados:
- El menú ya no dice "Enviar CV"; ahora dice "Bolsa de empleo".
- REPSE y Nómina quedaron juntos en una sola página: repse-nomina.html.
- Se eliminó la parte de "Reportes y archivos bancarios".
- El formulario se movió a Contacto.
- El formulario envía a: capitalhumano@smartwork.mx.
- WhatsApp configurado a: 56 3089 6635.
- El texto "Hablemos de tus necesidades de capital humano" se colocó debajo del encabezado de Reclutamiento y selección.

Archivos principales:
- index.html
- nosotros.html
- servicios.html
- repse-nomina.html
- bolsa-empleo.html
- contacto.html
- styles.css
- app.js
- assets/

Pendientes:
- Reemplazar enlaces de Facebook, Instagram y TikTok cuando el cliente los proporcione.
- Confirmar si el WhatsApp debe ir con formato 521 o 52 según cómo lo reconozca WhatsApp en producción.


AJUSTES 02:
- Se aplicaron cambios de texto marcados en amarillo en el Word Modificaciones Smart Work1.docx.
- Se actualizó el texto de reclutamiento estratégico.
- Se actualizó la redacción de pruebas psicométricas y estudios socioeconómicos.
- Se actualizó el bloque de Nómina con trayectoria, optimización de tiempo y lista de cálculo/cumplimiento/IMSS.


AJUSTE 07
- Se rehizo la animación desde la versión limpia para evitar conflictos.
- Ahora sí es flip 3D real con rotateX(180deg).
- Frente y reverso están en la misma tarjeta y no se separan.
- Funciona con hover y click/tap.


AJUSTE 08
- Se reforzó la visibilidad de los números grandes en las tarjetas flip.
- Los números vuelven a verse al frente y también quedan visibles de forma discreta al reverso.


AJUSTE 09
- Los números de las tarjetas de valores cambiaron de 01, 02, 03... a 1, 2, 3...


AJUSTE 10
- Los números de las tarjetas se movieron un poco hacia el centro para que ya no se corten tanto.
- No quedan centrados totalmente, solo más visibles como marca de agua.


AJUSTE 11 - MODIFICACIÓN FINAL
- Se mantuvieron los recuadros/tarjetas de valores como estaban en el ajuste 10.
- Se cambió el texto principal por: Trabajamos en conjunto con las empresas...
- El menú ahora muestra "Reclutamiento" en lugar de "Servicios".
- En reclutamiento se cambió "Ahorro real..." por "Garantía en cada una de nuestras contrataciones".
- Estudio laboral y socioeconómico quedó como "Estudio socioeconómico" con el nuevo texto.
- Validaciones laborales quedó como "Análisis laboral" con el nuevo texto.
- REPSE quedó con texto específico de informativas cuatrimestrales ICSOE y SISUB.
- Nómina quedó con texto específico de administración de nómina a la medida.
- Se añadió cumplimiento REPSE en soluciones integrales.


AJUSTE 12 - DATOS FINALES DE CONTACTO
- Correo receptor del formulario: capitalhumano@smartwork.mx
- El formulario de contacto ahora contempla CV y solicitudes de cotización.
- WhatsApp configurado en app.js: 525630896635
- Teléfono visible: 5630896635


AJUSTE 13 - MODIFICACIÓN 2
- Se conservaron los recuadros/flip cards como estaban.
- Se ajustó la imagen de soluciones integrales para que se vean completas las letras.
- En REPSE se sustituyó la frase por: "que presten servicios especializados y pongan a sus trabajadores a disposición del cliente."
- En Nómina se quitó la frase repetida "Administración de nómina a la medida:".
- Se quitaron los puntos solicitados: CFDI, IMSS y seguridad social, y el listado de IMSS.
- Se agregaron iconos a Facebook, Instagram y TikTok.
- Se hizo el logo un poco más grande.


AJUSTE 14
- Se hizo un poco más grande el logo del header/navbar.
- Se reforzó el estilo para mostrar completa la imagen de soluciones integrales y que se vean las letras completas.


AJUSTE 15
- En redes sociales se dejó solo el icono en lugar de icono + texto.
- Se aplicó tanto en la sección de contacto como en el footer.


AJUSTE 16
- Se aplicó una corrección específica a la imagen de Soluciones Integrales.
- Ahora el arte se muestra más completo, con margen lateral para que no se corten las letras.


AJUSTE 17
- Se corrigió la clase de la tarjeta de Soluciones Integrales para que el CSS sí le pegue.
- La imagen ahora se reduce un poco dentro de la tarjeta (90%) para que se vean completas las letras laterales.


FIX DEFINITIVO IMAGEN SERVICIOS-RRHH
- Se incluyó una nueva imagen en assets/servicios-rrhh.jpg.
- La nueva imagen está convertida a proporción 4:3 con margen superior/inferior usando la imagen original completa.
- Esto evita que se corten las letras cuando el diseño la coloca dentro de tarjetas 4:3.
- Reemplaza también tu archivo assets/servicios-rrhh.jpg con el incluido en este ZIP.


CIERRE FINAL - ASSETS COMPLETOS
- Este ZIP vuelve a incluir TODOS los assets: logo, imágenes, video, REPSE, capital humano, etc.
- Se corrige el problema donde faltaba capital-humano.jpg.
- Se usa la imagen original completa para assets/servicios-rrhh.jpg.
- La tarjeta de Soluciones integrales ahora ocupa todo el ancho y la imagen no se recorta.


FIX MISIÓN IMAGEN COMPLETA
- El problema visible en "Quiénes somos" venía de la imagen de Misión: assets/capital-humano.jpg.
- .image-card img tenía aspect-ratio: 4 / 3 y object-fit: cover, por eso recortaba los textos de la imagen.
- Se agregó image-card-full/img-full-visible en nosotros.html.
- Se agregó CSS para mostrar completa la imagen de Capital Humano sin recorte.


CORRECCIÓN FINAL REAL - TARJETAS REPSE/NÓMINA
- Se regresó la sección de REPSE/Nómina a tres tarjetas como la versión anterior.
- La imagen de Soluciones integrales ya no ocupa todo el ancho.
- La imagen se muestra completa dentro de su tarjeta usando object-fit: contain.
- Se conservaron los assets completos y el arreglo de imagen de Misión.


FIX FINAL REPSE/NÓMINA - TARJETAS
- Se corrigió la imagen de la primera tarjeta: Soluciones integrales ahora usa reclutamiento-digital.jpg.
- Ventajas del servicio usa servicios-rrhh.jpg.
- Asesoría y regularización usa consultoria-laptop.jpg.
- Se quitó la repetición visual donde la primera y segunda tarjeta usaban la misma imagen.


CORRECCIÓN ÚLTIMO CAMBIO NÓMINA
- Se conserva "Nómina, IMSS y seguridad social".
- Solo se cambió el H2 "Nómina a la medida" por "Administración de nómina con enfoque profesional".
