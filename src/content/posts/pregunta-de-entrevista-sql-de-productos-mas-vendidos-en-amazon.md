---
title: "Pregunta De Entrevista Sql De Productos Mas Vendidos En Amazon"
description: "pregunta de entrevista sql de productos mas vendidos en amazon"
date: 2024-08-04
image: "/images/posts/03.jpg"
categories: ['']
authors: ['Miguel López']
tags: ['SQL', 'EntrevistaTécnica', 'PreparaciónEntrevista', 'AnálisisDeDatos']
draft: True
slug: "pregunta-de-entrevista-sql-de-productos-mas-vendidos-en-amazon"
---

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7270231182955285766}" data-video-id="7270231182955285766" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> pregunta de ent </section> <a title="SQL" target="_blank" href="https://www.tiktok.com/tag/SQL?refer=embed">#SQL</a><a title="EntrevistaTécnica" target="_blank" href="https://www.tiktok.com/tag/EntrevistaTécnica?refer=embed">#EntrevistaTécnica</a><a title="PreparaciónEntrevista" target="_blank" href="https://www.tiktok.com/tag/PreparaciónEntrevista?refer=embed">#PreparaciónEntrevista</a><a title="AnálisisDeDatos" target="_blank" href="https://www.tiktok.com/tag/AnálisisDeDatos?refer=embed">#AnálisisDeDatos</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

preparation question for SQL interview both products of each category must be obtained what more sales they generated on Amazon in 2022 We are given a "product expense" table. that contains a row for each sale made It is possible to have records for the same product in the same category. but carried out by a different user or at a different date it is assumed that the product does not repeat itself in different categories Let's start with a SELECT query We filter the purchases of 2022 with the DATE_PART function. the sum of what was spent on purchases grouped by product We note the category here in the GROUP BY it does not affect the calculation,  but we need it for the answer this is the result of our first consultation now we use the RANK function to create a column that indicates the order of the results that order is the sum of what was spent in a descending manner partitioned by category Here in the result it is clearer. The RANK increases as the value decreases. we already have everything needed for our response but we have to adjust it to the requested format Our query will now be a sub-query. within the FROM we specify the fields we want and we filter the first two products of each category and this is the result The link to my profile can be found the page where we are solving these exercises 