---
title: "El Algoritmo De Java Que Estuvo Roto 10 años"
description: "algoritmos de  java rotos   softwarebugs  bugs  errores  programacionjava  ingenieriadesoftware"
date: 2022-08-30
image: "/images/posts/02.jpg"
categories: ['Video Corto']
authors: ['Miguel López']
tags: ['algoritmos', 'java', 'softwarebugs', 'bugs', 'errores', 'programacionjava', 'ingenieriadesoftware']
draft: False
slug: "algoritmos-de-java-rotos-por-casi-10-anios"
---

Algunos de los algoritmos de Java estuvieron rotos por casi 10 años. Así lo cuenta Joshua Bloch, uno de los creadores del lenguaje. Publicó este post en un blog de Google en el ya lejano 2006, con el título de "¡Extra, extra! Casi todos los mergesort están rotos".

Comienza contando cómo, durante su clase de algoritmos para el PhD, les pidieron implementar un binary search, pero ninguna de las implementaciones estaba libre de errores. Y esto, en una clase de posgrado con gente bastante brillante, que en un futuro estaría creando cosas tan importantes como el lenguaje Java. Además, el profesor de esa clase era John Bentley, otro reconocido investigador e ingeniero del software, que es justo el autor de un libro bastante conocido llamado Programming Pearls.

Pues en este libro, el profesor también había cometido el mismo error que tenían los algoritmos de Java. ¿Cuál era el error? Bueno, pues en el post nos muestran el código que contiene el error, y el error está ahí, en la línea 6. ¿Puedes detectarlo? El error era un overflow, que ocurre cuando intentas almacenar un valor más grande que lo que tu tipo de dato soporta, en este caso, un entero. Parte del error era que, en los ochentas, cuando se escribió el libro Programming Pearls, era muy difícil que un array tuviera índices tan altos como para exceder el tamaño de un entero. Pero, pues, las ideas de algoritmos tan fundamentales como esos sobreviven por mucho tiempo.

Aún así, ahí no acaban los errores. Todavía en 2008 se publicó una corrección del post para arreglar una de las posibles soluciones que se habían propuesto si se implementaba ese algoritmo en C y C++. Pues esto es una gran prueba de lo difícil que es crear código 100% libre de errores para todos los casos. Por eso, en el post de Joshua Bloch nos sugiere implementar todas las medidas posibles para intentar asegurar la calidad del código, pero que, aún así, es más que probable que los bugs siempre vayan a estar con nosotros.

<blockquote class="tiktok-embed" cite="{https://www.tiktok.com/@mkfnx/video/7137799532477222149}" data-video-id="7137799532477222149" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mkfnx" href="https://www.tiktok.com/@mkfnx?refer=embed">@mkfnx</a> algoritmos de   </section> <a title="algoritmos" target="_blank" href="https://www.tiktok.com/tag/algoritmos?refer=embed">#algoritmos</a><a title="java" target="_blank" href="https://www.tiktok.com/tag/java?refer=embed">#java</a><a title="softwarebugs" target="_blank" href="https://www.tiktok.com/tag/softwarebugs?refer=embed">#softwarebugs</a><a title="bugs" target="_blank" href="https://www.tiktok.com/tag/bugs?refer=embed">#bugs</a><a title="errores" target="_blank" href="https://www.tiktok.com/tag/errores?refer=embed">#errores</a><a title="programacionjava" target="_blank" href="https://www.tiktok.com/tag/programacionjava?refer=embed">#programacionjava</a><a title="ingenieriadesoftware" target="_blank" href="https://www.tiktok.com/tag/ingenieriadesoftware?refer=embed">#ingenieriadesoftware</a> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>