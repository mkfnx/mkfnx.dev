---
title: "Pregunta De Entrevista SQL De Linkedin Para Análisis De Datos"
description: "pregunta de entrevista sql de linkedin para"
date: 2023-08-17
image: "/images/posts/05.jpg"
categories: ['Short Video']
authors: ['Miguel López']
tags: ['SQL', 'AnálisisDeDatos', 'EntrevistaTécnica', 'PreguntasDeEntrevista', 'CienciaDeDatos']
draft: False
slug: "pregunta-entrevista-sql-linkedin-analisis-de-datos"
---

Pregunta de entrevista SQL para posiciones de análisis y ciencia de datos. Para esta pregunta, tendremos una tabla con información sobre los candidatos, su ID y las habilidades que manejan. Tenemos que encontrar a los candidatos que tienen exactamente esas tres habilidades. Lo primero que haremos es agregar un WHERE con un IN para filtrar a los candidatos que tienen las habilidades que queremos. Así, pasaremos de un resultado en el que listamos incluso habilidades que no estamos buscando, como SQL Server, a un resultado en el que solo hay las que nos interesan. Sin embargo, vemos que hay múltiples registros para un solo candidato, uno por cada habilidad, así que usaremos la función de agregación COUNT y agruparemos por el ID del candidato. Esto nos da el número de habilidades que cada candidato tiene. Ahora lo que nos queda es mantener a los candidatos que tienen las tres habilidades que requerimos, así que usaremos la instrucción HAVING con esta condición de que el conteo de registros del candidato es igual a tres. Luego ejecutamos y nos quedamos solo con las filas y los datos que pensamos que son solo el ID. Hacemos clic aquí en enviar para evaluarlo y ver que es una solución aceptada. En mi página de perfil puedes encontrar el enlace a DataLemur, que es donde estamos resolviendo estos ejercicios.

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7268467959142632709}" data-video-id="7268467959142632709" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> respuesta a  ca </section> <a title="SQL" target="_blank" href="https://www.tiktok.com/tag/SQL?refer=embed">#SQL</a><a title="AnálisisDeDatos" target="_blank" href="https://www.tiktok.com/tag/AnálisisDeDatos?refer=embed">#AnálisisDeDatos</a><a title="EntrevistaTécnica" target="_blank" href="https://www.tiktok.com/tag/EntrevistaTécnica?refer=embed">#EntrevistaTécnica</a><a title="PreguntasDeEntrevista" target="_blank" href="https://www.tiktok.com/tag/PreguntasDeEntrevista?refer=embed">#PreguntasDeEntrevista</a><a title="CienciaDeDatos" target="_blank" href="https://www.tiktok.com/tag/CienciaDeDatos?refer=embed">#CienciaDeDatos</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>