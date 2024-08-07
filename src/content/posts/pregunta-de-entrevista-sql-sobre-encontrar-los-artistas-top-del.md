---
title: "Pregunta De Entrevista Sql Sobre Encontrar Los Artistas Top Del"
description: "pregunta de entrevista sql sobre encontrar los artistas top del"
date: 2024-08-04
image: "/images/posts/01.jpg"
categories: ['']
authors: ['Miguel López']
tags: ['SQL', 'AnálisisDeDatos', 'PreguntasDeEntrevista', 'EntrevistaTécnica']
draft: True
slug: "pregunta-de-entrevista-sql-sobre-encontrar-los-artistas-top-del"
---

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7271002744217996549}" data-video-id="7271002744217996549" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> pregunta de ent </section> <a title="SQL" target="_blank" href="https://www.tiktok.com/tag/SQL?refer=embed">#SQL</a><a title="AnálisisDeDatos" target="_blank" href="https://www.tiktok.com/tag/AnálisisDeDatos?refer=embed">#AnálisisDeDatos</a><a title="PreguntasDeEntrevista" target="_blank" href="https://www.tiktok.com/tag/PreguntasDeEntrevista?refer=embed">#PreguntasDeEntrevista</a><a title="EntrevistaTécnica" target="_blank" href="https://www.tiktok.com/tag/EntrevistaTécnica?refer=embed">#EntrevistaTécnica</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

SQL interview preparation question.  Find the 5 artists who appeared most  frequently in the top 10 songs in the year.  In they give us an artists table,  a song chart and a song ranking table indicating  the day a song was in a certain ranking position.  The first thing we will do is to check with JOINS between the three  tables and filtering only the songs that were in position 10 or higher,  this is how this result would look like.  We then used the COUNT function to calculate the  number of top 10 songs each artist had in the ranking.  We will also use the D_RANK function to create a column that  indicates the artist's ranking based on the number of songs he had in the top.  The position in the ranking can be repeated if there  is a tie and will continue with the next number even  though there is a tie because we use the D_RANK function.  With this information we can now answer this question.  We define our query as a CTE,  select the required fields and filter  only artists who are in position 5 or lower.  This is an accepted solution.  In the link to my profile you can find the  page where we are solving these exercises. 