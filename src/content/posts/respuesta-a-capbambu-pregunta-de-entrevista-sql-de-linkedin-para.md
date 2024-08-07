---
title: "Respuesta A  Capbambu Pregunta De Entrevista Sql De Linkedin Para"
description: "respuesta a  capbambu pregunta de entrevista sql de linkedin para"
date: 2024-08-04
image: "/images/posts/05.jpg"
categories: ['']
authors: ['Miguel López']
tags: ['SQL', 'AnálisisDeDatos', 'EntrevistaTécnica', 'PreguntasDeEntrevista', 'CienciaDeDatos']
draft: True
slug: "respuesta-a-capbambu-pregunta-de-entrevista-sql-de-linkedin-para"
---

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7268467959142632709}" data-video-id="7268467959142632709" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> respuesta a  ca </section> <a title="SQL" target="_blank" href="https://www.tiktok.com/tag/SQL?refer=embed">#SQL</a><a title="AnálisisDeDatos" target="_blank" href="https://www.tiktok.com/tag/AnálisisDeDatos?refer=embed">#AnálisisDeDatos</a><a title="EntrevistaTécnica" target="_blank" href="https://www.tiktok.com/tag/EntrevistaTécnica?refer=embed">#EntrevistaTécnica</a><a title="PreguntasDeEntrevista" target="_blank" href="https://www.tiktok.com/tag/PreguntasDeEntrevista?refer=embed">#PreguntasDeEntrevista</a><a title="CienciaDeDatos" target="_blank" href="https://www.tiktok.com/tag/CienciaDeDatos?refer=embed">#CienciaDeDatos</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

SQL interview question for analysis and data science positions.  For this question we will have a table with information about the candidates,  their ID and the skills they handle.  We have to find candidates who have exactly those three skills.  The first thing we will do is to add a WHERE with an  IN to filter candidates who have the skills we want.  So we will go from a result in which we  list even skills that we are not looking for,  such as SQL Server,  to a result in which there are only those that interest us.  However,  we see that there are multiple records for one candidate,  one for each skill,  so we will use the COUNT aggregation function and group by candidate ID.  This gives us the number of skills each candidate has.  Now what remains is to keep the  candidates who have the three skills we require,  so we use the HAVING statement with this condition  that the candidate records count is equal to three.  Then we run it and we are left with only the rows and the  data that we think is only the ID. We click here on  submit to evaluate it and see that it is an accepted solution.  On my profile page you can find the link to DataLemur,  which is where we are solving these exercises. 