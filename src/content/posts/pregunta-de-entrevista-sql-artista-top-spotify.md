---
title: "Pregunta De Entrevista Sql Artistas Top Spotify"
description: "pregunta de entrevista sql sobre encontrar los artistas top del año"
date: 2023-08-24
image: "/images/posts/01.jpg"
categories: ['Short Video']
authors: ['Miguel López']
tags: ['SQL', 'AnálisisDeDatos', 'PreguntasDeEntrevista', 'EntrevistaTécnica']
draft: False
slug: "pregunta-de-entrevista-sql-artista-top-spotify"
---

Pregunta de preparación para entrevista SQL. Encuentra los 5 artistas que más frecuentemente aparecieron en las 10 canciones más populares del año. Si nos dan una tabla de artistas, una tabla de canciones y una tabla de clasificación de canciones que indica el día en que una canción estaba en cierta posición de clasificación. Lo primero que haremos es verificar con JOINs entre las tres tablas y filtrar solo las canciones que estuvieron en posición 10 o superior, así es como se vería este resultado. Luego, usamos la función COUNT para calcular el número de canciones top 10 que cada artista tenía en la clasificación. También usaremos la función RANK para crear una columna que indica el ranking del artista basado en el número de canciones que tuvo en el top. La posición en el ranking puede repetirse si hay un empate y continuará con el próximo número, incluso si hay un empate, porque usamos la función RANK. Con esta información, ahora podemos responder a esta pregunta. Definimos nuestra consulta como una CTE, seleccionamos los campos requeridos y filtramos solo a los artistas que están en posición 5 o inferior. Esta es una solución aceptada. En el enlace a mi perfil puedes encontrar la página donde estamos resolviendo estos ejercicios.

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7271002744217996549}" data-video-id="7271002744217996549" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> pregunta de ent </section> <a title="SQL" target="_blank" href="https://www.tiktok.com/tag/SQL?refer=embed">#SQL</a><a title="AnálisisDeDatos" target="_blank" href="https://www.tiktok.com/tag/AnálisisDeDatos?refer=embed">#AnálisisDeDatos</a><a title="PreguntasDeEntrevista" target="_blank" href="https://www.tiktok.com/tag/PreguntasDeEntrevista?refer=embed">#PreguntasDeEntrevista</a><a title="EntrevistaTécnica" target="_blank" href="https://www.tiktok.com/tag/EntrevistaTécnica?refer=embed">#EntrevistaTécnica</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>