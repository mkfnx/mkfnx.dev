---
title: "Resolviendo El Ejercicio 2 De  Sql De La Web Sql Practice En"
description: "resolviendo el ejercicio 2 de  sql de la web sql practice en"
date: 2024-08-04
image: "/images/posts/04.jpg"
categories: ['']
authors: ['Miguel López']
tags: ['SQL', 'datos', 'BasesDeDatos', 'AnálisisDeDatos']
draft: True
slug: "resolviendo-el-ejercicio-2-de-sql-de-la-web-sql-practice-en"
---

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7386778250850077957}" data-video-id="7386778250850077957" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> resolviendo el  </section> <a title="SQL" target="_blank" href="https://www.tiktok.com/tag/SQL?refer=embed">#SQL</a><a title="datos" target="_blank" href="https://www.tiktok.com/tag/datos?refer=embed">#datos</a><a title="BasesDeDatos" target="_blank" href="https://www.tiktok.com/tag/BasesDeDatos?refer=embed">#BasesDeDatos</a><a title="AnálisisDeDatos" target="_blank" href="https://www.tiktok.com/tag/AnálisisDeDatos?refer=embed">#AnálisisDeDatos</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

resolviendo ejercicios de SQL en sql-practice vamos apenas en el segundo así que damos clic aquí y aquí vemos lo que se pide mostrar nombre y apellido de los pacientes que no tengan alergias vamos a comenzar ejecutando esta consulta para inspeccionar los datos de la tabla aquí podemos ver que los pacientes sin alergias tienen el valor de este campo como nulo así que en la consulta para nuestra solución tendremos que filtrar con ese criterio y también especificar únicamente nombre y apellido ya que la tabla tiene bastantes campos más comenzamos cambiando este símbolo de asterisco que indica que queremos todos los campos y vamos a especificar los que nos piden que son nombre que está como first_name y apellido que está como last_name y podemos ejecutar la query para verificar que solamente estos campos van a ser seleccionados y vemos que ya solo tenemos las dos columnas indicadas pero nos falta filtrar únicamente aquellos que no tengan alergias eso lo hacemos con una sentencia WHERE indicamos la columna por la que vamos a filtrar, que es allergies para verificar si los valores son nulos usamos la instrucción IS esta sería la query completa de la solución y vamos a probarla para ver si funciona en la query sin filtrar teníamos 4 530 resultados si la ejecutamos ahora, los resultados se reducen a 2 059 y además recibimos la indicación del sitio de que es una respuesta correcta para más contenido como este puedes revisar mi perfil y consultar la lista "ejercicios sql practice" aquí estaré colocando los videos de solución de los ejercicios de esta página 