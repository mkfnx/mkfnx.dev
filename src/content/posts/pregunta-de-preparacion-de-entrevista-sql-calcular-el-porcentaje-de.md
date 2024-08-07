---
title: "Pregunta De Preparacion De Entrevista  Sql  Calcular El Porcentaje De"
description: "pregunta de preparacion de entrevista  sql  calcular el porcentaje de"
date: 2024-08-04
image: "/images/posts/06.jpg"
categories: ['']
authors: ['Miguel López']
tags: ['SQL', 'AnálisisDeDatos', 'EntrevistaTécnica', 'PreparaciónEntrevista', 'BasesDeDatos']
draft: True
slug: "pregunta-de-preparacion-de-entrevista-sql-calcular-el-porcentaje-de"
---

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7277702985797373190}" data-video-id="7277702985797373190" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> pregunta de pre </section> <a title="SQL" target="_blank" href="https://www.tiktok.com/tag/SQL?refer=embed">#SQL</a><a title="AnálisisDeDatos" target="_blank" href="https://www.tiktok.com/tag/AnálisisDeDatos?refer=embed">#AnálisisDeDatos</a><a title="EntrevistaTécnica" target="_blank" href="https://www.tiktok.com/tag/EntrevistaTécnica?refer=embed">#EntrevistaTécnica</a><a title="PreparaciónEntrevista" target="_blank" href="https://www.tiktok.com/tag/PreparaciónEntrevista?refer=embed">#PreparaciónEntrevista</a><a title="BasesDeDatos" target="_blank" href="https://www.tiktok.com/tag/BasesDeDatos?refer=embed">#BasesDeDatos</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

preparation question for SQL interview calculate the confirmation percentage of phone number of users who register for that we are given two tables the emails of registered users and the records of the text messages sent for confirmation And it should be noted that the tables for this question,  email and texts. they may not contain the same users To begin,  we are going to perform a LEFT JOIN between the two tables. and these results from the JOIN that contains NULL are those that are in the email table but not in the text message board we only filter messages that have the status of confirmed The next step is to use the COUNT function. to obtain the amount of ids from each table and in the email table we use the DISTINCT instruction to delete duplicate emails,  if you uploaded them then we divide these quantities using the emails as the denominator since this is the base amount a small problem is that when we run this query we get a 0 to get a decimal number we use the ROUND function and here we indicate that we want two decimal digits as requested in the problem description when we execute it,  we already get a decimal number and it is an accepted response in the link of my profile You can find the link to the page where we are solving these exercises 