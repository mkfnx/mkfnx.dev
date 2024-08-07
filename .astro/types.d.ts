declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"about": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "about";
  data: any
} & { render(): Render[".md"] };
};
"authors": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
"miguel-lopez.md": {
	id: "miguel-lopez.md";
  slug: "miguel-lopez";
  body: string;
  collection: "authors";
  data: InferEntrySchema<"authors">
} & { render(): Render[".md"] };
};
"pages": {
"404.md": {
	id: "404.md";
  slug: "404";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"contact.md": {
	id: "contact.md";
  slug: "contact";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"elements.mdx": {
	id: "elements.mdx";
  slug: "elements";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".mdx"] };
"privacy-policy.md": {
	id: "privacy-policy.md";
  slug: "privacy-policy";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
};
"posts": {
"-index.md": {
	id: "-index.md";
  slug: "-index";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algoritmos-de-java-rotos--softwarebugs-bugs-errores-programacionjava-ingenieriadesoftware.md": {
	id: "algoritmos-de-java-rotos--softwarebugs-bugs-errores-programacionjava-ingenieriadesoftware.md";
  slug: "algoritmos-de-java-rotos--softwarebugs-bugs-errores-programacionjava-ingenieriadesoftware";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algoritmos-inteligenciaartificial-programacion-programador-alprincipionoentendia-peroalfinaltampoco.md": {
	id: "algoritmos-inteligenciaartificial-programacion-programador-alprincipionoentendia-peroalfinaltampoco.md";
  slug: "algoritmos-inteligenciaartificial-programacion-programador-alprincipionoentendia-peroalfinaltampoco";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"amigos-cancunmexico-reconnect-encora-encoratakescancun.md": {
	id: "amigos-cancunmexico-reconnect-encora-encoratakescancun.md";
  slug: "amigos-cancunmexico-reconnect-encora-encoratakescancun";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"analisis-exploratorio-de-datos-con-python-del-curso-de-analytics.md": {
	id: "analisis-exploratorio-de-datos-con-python-del-curso-de-analytics.md";
  slug: "analisis-exploratorio-de-datos-con-python-del-curso-de-analytics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"analizando-tu-info-de-netflix-con-python-y-bibliotecas-de.md": {
	id: "analizando-tu-info-de-netflix-con-python-y-bibliotecas-de.md";
  slug: "analizando-tu-info-de-netflix-con-python-y-bibliotecas-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"apoya-a-organizaciones-beneficas-con-tus-habilidades-de-desarrollodesoftware-desarrolloweb.md": {
	id: "apoya-a-organizaciones-beneficas-con-tus-habilidades-de-desarrollodesoftware-desarrolloweb.md";
  slug: "apoya-a-organizaciones-beneficas-con-tus-habilidades-de-desarrollodesoftware-desarrolloweb";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aprende-arquitectura-de-software-con-estos-librosgratuitos-que-explican-la.md": {
	id: "aprende-arquitectura-de-software-con-estos-librosgratuitos-que-explican-la.md";
  slug: "aprende-arquitectura-de-software-con-estos-librosgratuitos-que-explican-la";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aprende-diseno-de-software-a-traves-de-ejemplos-en-python.md": {
	id: "aprende-diseno-de-software-a-traves-de-ejemplos-en-python.md";
  slug: "aprende-diseno-de-software-a-traves-de-ejemplos-en-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aprende-machine-learning-de-forma-interactiva-con-esta-pagina-de.md": {
	id: "aprende-machine-learning-de-forma-interactiva-con-esta-pagina-de.md";
  slug: "aprende-machine-learning-de-forma-interactiva-con-esta-pagina-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aprende-programacion-con-nintendo-switch-programacion.md": {
	id: "aprende-programacion-con-nintendo-switch-programacion.md";
  slug: "aprende-programacion-con-nintendo-switch-programacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aprendeprogramacion-programacionweb-cursosgratis-programacion-inteligenciaartificial.md": {
	id: "aprendeprogramacion-programacionweb-cursosgratis-programacion-inteligenciaartificial.md";
  slug: "aprendeprogramacion-programacionweb-cursosgratis-programacion-inteligenciaartificial";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aprendeprogramacion-programacionweb-desarrollodesoftware.md": {
	id: "aprendeprogramacion-programacionweb-desarrollodesoftware.md";
  slug: "aprendeprogramacion-programacionweb-desarrollodesoftware";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"aprendeprogramacion-programacionweb-javascript-java-python-libroselectronicos.md": {
	id: "aprendeprogramacion-programacionweb-javascript-java-python-libroselectronicos.md";
  slug: "aprendeprogramacion-programacionweb-javascript-java-python-libroselectronicos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"asi-se-crean-los-resumenes-del-ano-de-tus-apps.md": {
	id: "asi-se-crean-los-resumenes-del-ano-de-tus-apps.md";
  slug: "asi-se-crean-los-resumenes-del-ano-de-tus-apps";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"asi-son-las-tareas-del-curso-de-introduccion-a-ciencias.md": {
	id: "asi-son-las-tareas-del-curso-de-introduccion-a-ciencias.md";
  slug: "asi-son-las-tareas-del-curso-de-introduccion-a-ciencias";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"asi-son-las-tareas-del-curso-de-sql-de-cs50.md": {
	id: "asi-son-las-tareas-del-curso-de-sql-de-cs50.md";
  slug: "asi-son-las-tareas-del-curso-de-sql-de-cs50";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"asi-son-los-proyectos-y-tareas-de-los-cursos-de.md": {
	id: "asi-son-los-proyectos-y-tareas-de-los-cursos-de.md";
  slug: "asi-son-los-proyectos-y-tareas-de-los-cursos-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-es-un-framework-de-javascript-para-la-creacion-de.md": {
	id: "astro-es-un-framework-de-javascript-para-la-creacion-de.md";
  slug: "astro-es-un-framework-de-javascript-para-la-creacion-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"becas-de-udacity-para-estudiar-ia-cyberseguridad-o-projectmanagement-ia.md": {
	id: "becas-de-udacity-para-estudiar-ia-cyberseguridad-o-projectmanagement-ia.md";
  slug: "becas-de-udacity-para-estudiar-ia-cyberseguridad-o-projectmanagement-ia";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"becas-para-aprender-inteligencia-artificial-y-machine-learning-aprendeprogramacion-cursosgratuitos.md": {
	id: "becas-para-aprender-inteligencia-artificial-y-machine-learning-aprendeprogramacion-cursosgratuitos.md";
  slug: "becas-para-aprender-inteligencia-artificial-y-machine-learning-aprendeprogramacion-cursosgratuitos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"c-es-el-lenguaje-del-2023-el-ranking-tiobe-asi.md": {
	id: "c-es-el-lenguaje-del-2023-el-ranking-tiobe-asi.md";
  slug: "c-es-el-lenguaje-del-2023-el-ranking-tiobe-asi";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cargando-archivos-para-analisis-de-datos-en-google-colab-cienciadedatos.md": {
	id: "cargando-archivos-para-analisis-de-datos-en-google-colab-cienciadedatos.md";
  slug: "cargando-archivos-para-analisis-de-datos-en-google-colab-cienciadedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"casos-de-exito-del-analisisdedatos-y-video-sobre-este-curso.md": {
	id: "casos-de-exito-del-analisisdedatos-y-video-sobre-este-curso.md";
  slug: "casos-de-exito-del-analisisdedatos-y-video-sobre-este-curso";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"certificaciones-avanzadas-de-carreras-de-datos-creadas-por-google-en.md": {
	id: "certificaciones-avanzadas-de-carreras-de-datos-creadas-por-google-en.md";
  slug: "certificaciones-avanzadas-de-carreras-de-datos-creadas-por-google-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"certificaciones-avanzadas-de-google-para-carreras-de-analisis-de-datos.md": {
	id: "certificaciones-avanzadas-de-google-para-carreras-de-analisis-de-datos.md";
  slug: "certificaciones-avanzadas-de-google-para-carreras-de-analisis-de-datos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"chatgpt-el-nuevo-proyecto-de-openai-que-permite-aplicar-todo.md": {
	id: "chatgpt-el-nuevo-proyecto-de-openai-que-permite-aplicar-todo.md";
  slug: "chatgpt-el-nuevo-proyecto-de-openai-que-permite-aplicar-todo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"chatgpt-me-ensena-programacion-y-me-recomienda-aprender-python--que.md": {
	id: "chatgpt-me-ensena-programacion-y-me-recomienda-aprender-python--que.md";
  slug: "chatgpt-me-ensena-programacion-y-me-recomienda-aprender-python--que";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"chatgpt-necesita-tu-ayuda-para-resolver-este-cuestionario-este-juego.md": {
	id: "chatgpt-necesita-tu-ayuda-para-resolver-este-cuestionario-este-juego.md";
  slug: "chatgpt-necesita-tu-ayuda-para-resolver-este-cuestionario-este-juego";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"chatgpt-y-otras-ias-de-verdad-entienden--inteligenciaartificial-machinelearning-chatgpt.md": {
	id: "chatgpt-y-otras-ias-de-verdad-entienden--inteligenciaartificial-machinelearning-chatgpt.md";
  slug: "chatgpt-y-otras-ias-de-verdad-entienden--inteligenciaartificial-machinelearning-chatgpt";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"chatgpt-ya-esta-reemplazando-tareas-de-programadores--inteligenciaartificial-gpt3-programacion.md": {
	id: "chatgpt-ya-esta-reemplazando-tareas-de-programadores--inteligenciaartificial-gpt3-programacion.md";
  slug: "chatgpt-ya-esta-reemplazando-tareas-de-programadores--inteligenciaartificial-gpt3-programacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"comenzando-a-resolver-las-preguntas-del-sitio-sql-practice-comen-esta-primer.md": {
	id: "comenzando-a-resolver-las-preguntas-del-sitio-sql-practice-comen-esta-primer.md";
  slug: "comenzando-a-resolver-las-preguntas-del-sitio-sql-practice-comen-esta-primer";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cometer-errores-en-una-entrevista-de-programacion-no-quiere-decir.md": {
	id: "cometer-errores-en-una-entrevista-de-programacion-no-quiere-decir.md";
  slug: "cometer-errores-en-una-entrevista-de-programacion-no-quiere-decir";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"consejos-para-crear-un-p-ortafolio-de-proyectos-que-de-verdad.md": {
	id: "consejos-para-crear-un-p-ortafolio-de-proyectos-que-de-verdad.md";
  slug: "consejos-para-crear-un-p-ortafolio-de-proyectos-que-de-verdad";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"consulta-el-resumen-de-tu-actividad-de-codigo-en-githubwrapped-io.md": {
	id: "consulta-el-resumen-de-tu-actividad-de-codigo-en-githubwrapped-io.md";
  slug: "consulta-el-resumen-de-tu-actividad-de-codigo-en-githubwrapped-io";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"content-is-king-machinelearning-inteligenciaartificial-marketing-algoritmodetiktok-tipsdenegocios.md": {
	id: "content-is-king-machinelearning-inteligenciaartificial-marketing-algoritmodetiktok-tipsdenegocios.md";
  slug: "content-is-king-machinelearning-inteligenciaartificial-marketing-algoritmodetiktok-tipsdenegocios";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"contratar-solo-programadores-seniors-es-mala-practica-programacion-desarrollodesoftware-softwareengineer.md": {
	id: "contratar-solo-programadores-seniors-es-mala-practica-programacion-desarrollodesoftware-softwareengineer.md";
  slug: "contratar-solo-programadores-seniors-es-mala-practica-programacion-desarrollodesoftware-softwareengineer";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"contribuye-a-la-ciencia-jugando-este-videojuego--borderlands3-incluye.md": {
	id: "contribuye-a-la-ciencia-jugando-este-videojuego--borderlands3-incluye.md";
  slug: "contribuye-a-la-ciencia-jugando-este-videojuego--borderlands3-incluye";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"copilotworkspace-es-una-evolucion-del-asistente-de-inteligenciaartifical-de-github.md": {
	id: "copilotworkspace-es-una-evolucion-del-asistente-de-inteligenciaartifical-de-github.md";
  slug: "copilotworkspace-es-una-evolucion-del-asistente-de-inteligenciaartifical-de-github";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"creando-graficas-y-tablas-en-python-para-visualizacion-de-datos.md": {
	id: "creando-graficas-y-tablas-en-python-para-visualizacion-de-datos.md";
  slug: "creando-graficas-y-tablas-en-python-para-visualizacion-de-datos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cuando-comienzas-a-trabajar-en-programacion-humor-programacionweb-desarrollodesoftware-javascript.md": {
	id: "cuando-comienzas-a-trabajar-en-programacion-humor-programacionweb-desarrollodesoftware-javascript.md";
  slug: "cuando-comienzas-a-trabajar-en-programacion-humor-programacionweb-desarrollodesoftware-javascript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cuando-una-herramienta-como-excel-llega-a-sus-limites-puede.md": {
	id: "cuando-una-herramienta-como-excel-llega-a-sus-limites-puede.md";
  slug: "cuando-una-herramienta-como-excel-llega-a-sus-limites-puede";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"curso-de-amazon-con-visualizaciones-interactivas-para-aprender-machinelearning-onthisday.md": {
	id: "curso-de-amazon-con-visualizaciones-interactivas-para-aprender-machinelearning-onthisday.md";
  slug: "curso-de-amazon-con-visualizaciones-interactivas-para-aprender-machinelearning-onthisday";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"curso-gratis-de-udacity-para-aprender-sql-para-analisis-de.md": {
	id: "curso-gratis-de-udacity-para-aprender-sql-para-analisis-de.md";
  slug: "curso-gratis-de-udacity-para-aprender-sql-para-analisis-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"curso-gratis-para-crear-un-chatbot-de-ia-con-tu.md": {
	id: "curso-gratis-para-crear-un-chatbot-de-ia-con-tu.md";
  slug: "curso-gratis-para-crear-un-chatbot-de-ia-con-tu";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"curso-gratuito-de-prompt-engineering-con-chatgpt-de-parte-de.md": {
	id: "curso-gratuito-de-prompt-engineering-con-chatgpt-de-parte-de.md";
  slug: "curso-gratuito-de-prompt-engineering-con-chatgpt-de-parte-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"curso-missing-semester-del-mit-programacion-desarrollodesoftware-cursoonline-cursosgratis.md": {
	id: "curso-missing-semester-del-mit-programacion-desarrollodesoftware-cursoonline-cursosgratis.md";
  slug: "curso-missing-semester-del-mit-programacion-desarrollodesoftware-cursoonline-cursosgratis";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cursos-de-harvard-para-aprender-python-mkfnx-y-mas-temas-de.md": {
	id: "cursos-de-harvard-para-aprender-python-mkfnx-y-mas-temas-de.md";
  slug: "cursos-de-harvard-para-aprender-python-mkfnx-y-mas-temas-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cursos-de-programacion-que-puedes-tomar-directamente-en-los-editores.md": {
	id: "cursos-de-programacion-que-puedes-tomar-directamente-en-los-editores.md";
  slug: "cursos-de-programacion-que-puedes-tomar-directamente-en-los-editores";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cursos-y-certificados-de-meta-facebook-desarrolloweb-desarrollomovil-cursosgratis-javascript.md": {
	id: "cursos-y-certificados-de-meta-facebook-desarrolloweb-desarrollomovil-cursosgratis-javascript.md";
  slug: "cursos-y-certificados-de-meta-facebook-desarrolloweb-desarrollomovil-cursosgratis-javascript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cursosgratisonline-cursosgratuitos-cursopython-cursojavascript.md": {
	id: "cursosgratisonline-cursosgratuitos-cursopython-cursojavascript.md";
  slug: "cursosgratisonline-cursosgratuitos-cursopython-cursojavascript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"cyberataques-y-vulnerabilidades-en-modelos-de-machinelearning-inteligenciaartificial-chatgpt-seguridadinformatica.md": {
	id: "cyberataques-y-vulnerabilidades-en-modelos-de-machinelearning-inteligenciaartificial-chatgpt-seguridadinformatica.md";
  slug: "cyberataques-y-vulnerabilidades-en-modelos-de-machinelearning-inteligenciaartificial-chatgpt-seguridadinformatica";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"darktheme-lighttheme-infinity-programadores-desarrollador.md": {
	id: "darktheme-lighttheme-infinity-programadores-desarrollador.md";
  slug: "darktheme-lighttheme-infinity-programadores-desarrollador";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dashboard-de-visualizacion-de-datos-de-futbol-visualizaciondedatos-python-analisisdedatos.md": {
	id: "dashboard-de-visualizacion-de-datos-de-futbol-visualizaciondedatos-python-analisisdedatos.md";
  slug: "dashboard-de-visualizacion-de-datos-de-futbol-visualizaciondedatos-python-analisisdedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"datascience-cienciadedatos-informatica-kaggle-30daysofml-30diasdemachinelearning-python.md": {
	id: "datascience-cienciadedatos-informatica-kaggle-30daysofml-30diasdemachinelearning-python.md";
  slug: "datascience-cienciadedatos-informatica-kaggle-30daysofml-30diasdemachinelearning-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"datascience-cienciadedatos-machinelearning-kaggle-informatica-datos.md": {
	id: "datascience-cienciadedatos-machinelearning-kaggle-informatica-datos.md";
  slug: "datascience-cienciadedatos-machinelearning-kaggle-informatica-datos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"de-app-python-de-consola-a-una-app-web-que.md": {
	id: "de-app-python-de-consola-a-una-app-web-que.md";
  slug: "de-app-python-de-consola-a-una-app-web-que";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"de-nand-a-tetris-ingenieriainformatica-computacion-ingenieriaensistemas-cursosgratis.md": {
	id: "de-nand-a-tetris-ingenieriainformatica-computacion-ingenieriaensistemas-cursosgratis.md";
  slug: "de-nand-a-tetris-ingenieriainformatica-computacion-ingenieriaensistemas-cursosgratis";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"de-script-de-python-a-app-web-en-minutos-gracias.md": {
	id: "de-script-de-python-a-app-web-en-minutos-gracias.md";
  slug: "de-script-de-python-a-app-web-en-minutos-gracias";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"desarrollodesoftware-ingenieriadesoftware-empleos.md": {
	id: "desarrollodesoftware-ingenieriadesoftware-empleos.md";
  slug: "desarrollodesoftware-ingenieriadesoftware-empleos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"desarrolloweb-certificaciones-programacionweb-html5-cursosgratis-mkfnx.md": {
	id: "desarrolloweb-certificaciones-programacionweb-html5-cursosgratis-mkfnx.md";
  slug: "desarrolloweb-certificaciones-programacionweb-html5-cursosgratis-mkfnx";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"desarrolloweb-desarrollodesoftware-programacion-cursosonline.md": {
	id: "desarrolloweb-desarrollodesoftware-programacion-cursosonline.md";
  slug: "desarrolloweb-desarrollodesoftware-programacion-cursosonline";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"desarrolloweb-programacionweb-humor-programacion-html-javascript.md": {
	id: "desarrolloweb-programacionweb-humor-programacion-html-javascript.md";
  slug: "desarrolloweb-programacionweb-humor-programacion-html-javascript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"devinai-es-el-mas-reciente-intento-de-crear-una-inteligenciaartificial.md": {
	id: "devinai-es-el-mas-reciente-intento-de-crear-una-inteligenciaartificial.md";
  slug: "devinai-es-el-mas-reciente-intento-de-crear-una-inteligenciaartificial";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dibujando-el-patron-de-la-esfera-de-navidadentiktok-con-javascript-processing.md": {
	id: "dibujando-el-patron-de-la-esfera-de-navidadentiktok-con-javascript-processing.md";
  slug: "dibujando-el-patron-de-la-esfera-de-navidadentiktok-con-javascript-processing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"duo-con-ashleyogburn-hay-que-ponerse-la-camiseta--humor.md": {
	id: "duo-con-ashleyogburn-hay-que-ponerse-la-camiseta--humor.md";
  slug: "duo-con-ashleyogburn-hay-que-ponerse-la-camiseta--humor";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"duo-con-karen-x-el-tutorial-de-video-de-cambio.md": {
	id: "duo-con-karen-x-el-tutorial-de-video-de-cambio.md";
  slug: "duo-con-karen-x-el-tutorial-de-video-de-cambio";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"duo-con-miguel-adventofcode-2022-reto-de-programacion-para-temporada.md": {
	id: "duo-con-miguel-adventofcode-2022-reto-de-programacion-para-temporada.md";
  slug: "duo-con-miguel-adventofcode-2022-reto-de-programacion-para-temporada";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"duo-con-tech-politics--news-|-all-in-asi-surgio.md": {
	id: "duo-con-tech-politics--news-|-all-in-asi-surgio.md";
  slug: "duo-con-tech-politics--news-|-all-in-asi-surgio";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ejercicio-3-de-la-pagina-sql-practiceen-este-ejercicio-se.md": {
	id: "ejercicio-3-de-la-pagina-sql-practiceen-este-ejercicio-se.md";
  slug: "ejercicio-3-de-la-pagina-sql-practiceen-este-ejercicio-se";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ejercicio-de-programacion-python--calcular-la-puntuacion-que-otorga.md": {
	id: "ejercicio-de-programacion-python--calcular-la-puntuacion-que-otorga.md";
  slug: "ejercicio-de-programacion-python--calcular-la-puntuacion-que-otorga";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ejercicios-de-programacion-en-python-para-practicar-sobre-el-tema.md": {
	id: "ejercicios-de-programacion-en-python-para-practicar-sobre-el-tema.md";
  slug: "ejercicios-de-programacion-en-python-para-practicar-sobre-el-tema";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-dataframe-es-la-estructura-mas-usada-para-analisisdedatos-con.md": {
	id: "el-dataframe-es-la-estructura-mas-usada-para-analisisdedatos-con.md";
  slug: "el-dataframe-es-la-estructura-mas-usada-para-analisisdedatos-con";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-error-de-programacion-que-causo-que-el-modelo-gpt.md": {
	id: "el-error-de-programacion-que-causo-que-el-modelo-gpt.md";
  slug: "el-error-de-programacion-que-causo-que-el-modelo-gpt";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-hack-de-thompson-todo-el-software-podria-ya-estar.md": {
	id: "el-hack-de-thompson-todo-el-software-podria-ya-estar.md";
  slug: "el-hack-de-thompson-todo-el-software-podria-ya-estar";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-mito-del-programador-genio-es-un-ensayo-escrito-por.md": {
	id: "el-mito-del-programador-genio-es-un-ensayo-escrito-por.md";
  slug: "el-mito-del-programador-genio-es-un-ensayo-escrito-por";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-nobel-de-la-computacion-el-premio-turing.md": {
	id: "el-nobel-de-la-computacion-el-premio-turing.md";
  slug: "el-nobel-de-la-computacion-el-premio-turing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-proyecto-mas-dificil-de-cs50-el-famoso-curso-de.md": {
	id: "el-proyecto-mas-dificil-de-cs50-el-famoso-curso-de.md";
  slug: "el-proyecto-mas-dificil-de-cs50-el-famoso-curso-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-reporte-sobre-calidad-de-codigo-de-programacion-que-menciona.md": {
	id: "el-reporte-sobre-calidad-de-codigo-de-programacion-que-menciona.md";
  slug: "el-reporte-sobre-calidad-de-codigo-de-programacion-que-menciona";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-sitio-coderev-app-propone-usar-revisiones-de-codigo-como-herramientas.md": {
	id: "el-sitio-coderev-app-propone-usar-revisiones-de-codigo-como-herramientas.md";
  slug: "el-sitio-coderev-app-propone-usar-revisiones-de-codigo-como-herramientas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"el-sitio-web-python-books-punto-org-contiene-listas-de.md": {
	id: "el-sitio-web-python-books-punto-org-contiene-listas-de.md";
  slug: "el-sitio-web-python-books-punto-org-contiene-listas-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"en-2023-se-lanzo-el-curso-de-promptengineering-con-chatgpt.md": {
	id: "en-2023-se-lanzo-el-curso-de-promptengineering-con-chatgpt.md";
  slug: "en-2023-se-lanzo-el-curso-de-promptengineering-con-chatgpt";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"en-cs50-el-curso-de-ciencias-de-computacion-de-harvard.md": {
	id: "en-cs50-el-curso-de-ciencias-de-computacion-de-harvard.md";
  slug: "en-cs50-el-curso-de-ciencias-de-computacion-de-harvard";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"en-este-repo-de-github-el-director-de-investigacion-de.md": {
	id: "en-este-repo-de-github-el-director-de-investigacion-de.md";
  slug: "en-este-repo-de-github-el-director-de-investigacion-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"en-interview-cake-puedes-encontrar-varios-recursos-gratuitos-para-prepararte.md": {
	id: "en-interview-cake-puedes-encontrar-varios-recursos-gratuitos-para-prepararte.md";
  slug: "en-interview-cake-puedes-encontrar-varios-recursos-gratuitos-para-prepararte";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"en-mis-lives-recientes-he-estado-resolviendo-ejercicios-de-leetcode.md": {
	id: "en-mis-lives-recientes-he-estado-resolviendo-ejercicios-de-leetcode.md";
  slug: "en-mis-lives-recientes-he-estado-resolviendo-ejercicios-de-leetcode";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"encuentra-los-mejores-prompts-para-inteligenciaartificial-generativa-como-claude-o.md": {
	id: "encuentra-los-mejores-prompts-para-inteligenciaartificial-generativa-como-claude-o.md";
  slug: "encuentra-los-mejores-prompts-para-inteligenciaartificial-generativa-como-claude-o";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"es-gpt-4-inteligente-en-este-articulo-de-microsoft-research-lo.md": {
	id: "es-gpt-4-inteligente-en-este-articulo-de-microsoft-research-lo.md";
  slug: "es-gpt-4-inteligente-en-este-articulo-de-microsoft-research-lo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"esta-es-la-respuesta-que-di-ayer-en-un-live.md": {
	id: "esta-es-la-respuesta-que-di-ayer-en-un-live.md";
  slug: "esta-es-la-respuesta-que-di-ayer-en-un-live";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"esta-la-inteligenciaartificial-sobrevalorada-o-infravalorada--elefectoia.md": {
	id: "esta-la-inteligenciaartificial-sobrevalorada-o-infravalorada--elefectoia.md";
  slug: "esta-la-inteligenciaartificial-sobrevalorada-o-infravalorada--elefectoia";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"este-ataque-de-malware-va-dirigido-a-programadores-en-busca.md": {
	id: "este-ataque-de-malware-va-dirigido-a-programadores-en-busca.md";
  slug: "este-ataque-de-malware-va-dirigido-a-programadores-en-busca";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"este-post-cuenta-como-para-lograr-monetizar-una-web-el.md": {
	id: "este-post-cuenta-como-para-lograr-monetizar-una-web-el.md";
  slug: "este-post-cuenta-como-para-lograr-monetizar-una-web-el";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"estos-libros-hackean-tu-cerebro-para-ayudarte-a-aprender-enlaces.md": {
	id: "estos-libros-hackean-tu-cerebro-para-ayudarte-a-aprender-enlaces.md";
  slug: "estos-libros-hackean-tu-cerebro-para-ayudarte-a-aprender-enlaces";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"experimenta-como-son-las-actividades-del-dia-a-dia-en.md": {
	id: "experimenta-como-son-las-actividades-del-dia-a-dia-en.md";
  slug: "experimenta-como-son-las-actividades-del-dia-a-dia-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ganadores-del-hackathon-de-programacion-de-videojuegos-con-python-organizado.md": {
	id: "ganadores-del-hackathon-de-programacion-de-videojuegos-con-python-organizado.md";
  slug: "ganadores-del-hackathon-de-programacion-de-videojuegos-con-python-organizado";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"googlesummerofcode-gsoc-programacion-opensource.md": {
	id: "googlesummerofcode-gsoc-programacion-opensource.md";
  slug: "googlesummerofcode-gsoc-programacion-opensource";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"gran-libro-para-aprender-fundamentos-estadisticos-de-machine-learning-con.md": {
	id: "gran-libro-para-aprender-fundamentos-estadisticos-de-machine-learning-con.md";
  slug: "gran-libro-para-aprender-fundamentos-estadisticos-de-machine-learning-con";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"guardado-de-datos-en-python-de-forma-sencilla-con-el.md": {
	id: "guardado-de-datos-en-python-de-forma-sencilla-con-el.md";
  slug: "guardado-de-datos-en-python-de-forma-sencilla-con-el";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"guia-de-python-con-cientos-de-consejos-y-buenas-practicas.md": {
	id: "guia-de-python-con-cientos-de-consejos-y-buenas-practicas.md";
  slug: "guia-de-python-con-cientos-de-consejos-y-buenas-practicas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hablar-con-un-juguete-para-encontrar-los-errores-en-tu-codigo.md": {
	id: "hablar-con-un-juguete-para-encontrar-los-errores-en-tu-codigo.md";
  slug: "habla-con-un-juguete-para-encontrar-los-errores-en-tu-codigo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hace-poco-mas-de-un-ano-fue-publicada-la-version.md": {
	id: "hace-poco-mas-de-un-ano-fue-publicada-la-version.md";
  slug: "hace-poco-mas-de-un-ano-fue-publicada-la-version";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hacer-proyectos-o-resolver-ejercicios-de-leetcode--que-conviene-mas.md": {
	id: "hacer-proyectos-o-resolver-ejercicios-de-leetcode--que-conviene-mas.md";
  slug: "hacer-proyectos-o-resolver-ejercicios-de-leetcode--que-conviene-mas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hackathon-de-programacion-de-videojuegos-con-python--programaciondevideojuegos-programacionpython-hackathon.md": {
	id: "hackathon-de-programacion-de-videojuegos-con-python--programaciondevideojuegos-programacionpython-hackathon.md";
  slug: "hackathon-de-programacion-de-videojuegos-con-python--programaciondevideojuegos-programacionpython-hackathon";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hackeando-apps-de-ia-con-prompt-injection-hacking-hackeo-openai.md": {
	id: "hackeando-apps-de-ia-con-prompt-injection-hacking-hackeo-openai.md";
  slug: "hackeando-apps-de-ia-con-prompt-injection-hacking-hackeo-openai";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"has-hecho-este-tipo-de-ejercicios-de-programacion-en-python.md": {
	id: "has-hecho-este-tipo-de-ejercicios-de-programacion-en-python.md";
  slug: "has-hecho-este-tipo-de-ejercicios-de-programacion-en-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"hay-preguntas-faciles-en-las-entrevistas-de-empresas-como-google.md": {
	id: "hay-preguntas-faciles-en-las-entrevistas-de-empresas-como-google.md";
  slug: "hay-preguntas-faciles-en-las-entrevistas-de-empresas-como-google";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"imprimiendo-en-color-en-la-terminal-con-la-funcion-print.md": {
	id: "imprimiendo-en-color-en-la-terminal-con-la-funcion-print.md";
  slug: "imprimiendo-en-color-en-la-terminal-con-la-funcion-print";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"la-basededatos-del-ano-2023-es-postgresql-aqui-te-dejo.md": {
	id: "la-basededatos-del-ano-2023-es-postgresql-aqui-te-dejo.md";
  slug: "la-basededatos-del-ano-2023-es-postgresql-aqui-te-dejo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"la-biblioteca-de-javascript-que-rompio-npm-desarrolloweb-desarrollodesoftware-programacion.md": {
	id: "la-biblioteca-de-javascript-que-rompio-npm-desarrolloweb-desarrollodesoftware-programacion.md";
  slug: "la-biblioteca-de-javascript-que-rompio-npm-desarrolloweb-desarrollodesoftware-programacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"la-historia-de-los-errores-del-codigo-mas-copiado-de.md": {
	id: "la-historia-de-los-errores-del-codigo-mas-copiado-de.md";
  slug: "la-historia-de-los-errores-del-codigo-mas-copiado-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"la-ia-de-openai-integrada-en-tus-apps-favoritas-gpt4.md": {
	id: "la-ia-de-openai-integrada-en-tus-apps-favoritas-gpt4.md";
  slug: "la-ia-de-openai-integrada-en-tus-apps-favoritas-gpt4";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"la-plataforma-kaggle-lanzo-nuevas-competencias-con-los-modelos-de.md": {
	id: "la-plataforma-kaggle-lanzo-nuevas-competencias-con-los-modelos-de.md";
  slug: "la-plataforma-kaggle-lanzo-nuevas-competencias-con-los-modelos-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"las-fases-del-proceso-de-analisisdedatos-segun-google-datascience-cienciadedatos.md": {
	id: "las-fases-del-proceso-de-analisisdedatos-segun-google-datascience-cienciadedatos.md";
  slug: "las-fases-del-proceso-de-analisisdedatos-segun-google-datascience-cienciadedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"las-web-modernas-usan-demasiado-javascript-en-2015-llamaba-la.md": {
	id: "las-web-modernas-usan-demasiado-javascript-en-2015-llamaba-la.md";
  slug: "las-web-modernas-usan-demasiado-javascript-en-2015-llamaba-la";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"learntocodethehardway-org-programacion-aprendeprogramacion-desarrollodesoftware.md": {
	id: "learntocodethehardway-org-programacion-aprendeprogramacion-desarrollodesoftware.md";
  slug: "learntocodethehardway-org-programacion-aprendeprogramacion-desarrollodesoftware";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"libro-gratis-de-ingenieria-de-software-en-google-ingenieriadesoftware-desarrollodesoftware.md": {
	id: "libro-gratis-de-ingenieria-de-software-en-google-ingenieriadesoftware-desarrollodesoftware.md";
  slug: "libro-gratis-de-ingenieria-de-software-en-google-ingenieriadesoftware-desarrollodesoftware";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"libros-gratuitos-de-programacion-y-ciencia-de-datos-programacion-cienciadedatos.md": {
	id: "libros-gratuitos-de-programacion-y-ciencia-de-datos-programacion-cienciadedatos.md";
  slug: "libros-gratuitos-de-programacion-y-ciencia-de-datos-programacion-cienciadedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"libros-gratuitos-de-python-para-analisis-y-ciencia-de-datos.md": {
	id: "libros-gratuitos-de-python-para-analisis-y-ciencia-de-datos.md";
  slug: "libros-gratuitos-de-python-para-analisis-y-ciencia-de-datos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"librosgratis-de-tecnologia-para-analisisdedatos--cienciadedatos--programacion--python--java-y.md": {
	id: "librosgratis-de-tecnologia-para-analisisdedatos--cienciadedatos--programacion--python--java-y.md";
  slug: "librosgratis-de-tecnologia-para-analisisdedatos--cienciadedatos--programacion--python--java-y";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"lo-esencial-de-python-para-analisisdedatos-y-cienciadedatos-de-todo.md": {
	id: "lo-esencial-de-python-para-analisisdedatos-y-cienciadedatos-de-todo.md";
  slug: "lo-esencial-de-python-para-analisisdedatos-y-cienciadedatos-de-todo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"los-devs-de-react-estan-en-una-burbuja-cosas-que.md": {
	id: "los-devs-de-react-estan-en-una-burbuja-cosas-que.md";
  slug: "los-devs-de-react-estan-en-una-burbuja-cosas-que";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"los-perfiles-profesionales-en-la-industria-de-los-datos-y.md": {
	id: "los-perfiles-profesionales-en-la-industria-de-los-datos-y.md";
  slug: "los-perfiles-profesionales-en-la-industria-de-los-datos-y";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"los-plugins-son-como-el-appstore-de-chatgpt-y-le.md": {
	id: "los-plugins-son-como-el-appstore-de-chatgpt-y-le.md";
  slug: "los-plugins-son-como-el-appstore-de-chatgpt-y-le";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"machine-learning-para-ayudar-en-la-adopcion-de-mascotas-machinelearning.md": {
	id: "machine-learning-para-ayudar-en-la-adopcion-de-mascotas-machinelearning.md";
  slug: "machine-learning-para-ayudar-en-la-adopcion-de-mascotas-machinelearning";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"mas-de-140-videos-de-platicas-y-tutoriales-de-la.md": {
	id: "mas-de-140-videos-de-platicas-y-tutoriales-de-la.md";
  slug: "mas-de-140-videos-de-platicas-y-tutoriales-de-la";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"mi-nuevo-proyecto-para-crear-una-infografia-con-tus-datos.md": {
	id: "mi-nuevo-proyecto-para-crear-una-infografia-con-tus-datos.md";
  slug: "mi-nuevo-proyecto-para-crear-una-infografia-con-tus-datos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"mis-conferencias-y-talleres-favoritos-de-la-pycon-us-2022.md": {
	id: "mis-conferencias-y-talleres-favoritos-de-la-pycon-us-2022.md";
  slug: "mis-conferencias-y-talleres-favoritos-de-la-pycon-us-2022";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"no-me-aguante-las-ganas-de-azotar-el-libro-como.md": {
	id: "no-me-aguante-las-ganas-de-azotar-el-libro-como.md";
  slug: "no-me-aguante-las-ganas-de-azotar-el-libro-como";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nueva-inteligenciaartificial-de-meta-facebook-para-crear-videos-a-partir.md": {
	id: "nueva-inteligenciaartificial-de-meta-facebook-para-crear-videos-a-partir.md";
  slug: "nueva-inteligenciaartificial-de-meta-facebook-para-crear-videos-a-partir";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nuevas-preguntas-de-preparacion-para-entrevistas-de-python-en-data.md": {
	id: "nuevas-preguntas-de-preparacion-para-entrevistas-de-python-en-data.md";
  slug: "nuevas-preguntas-de-preparacion-para-entrevistas-de-python-en-data";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nuevo-curso-de-la-unam-en-coursera-de-python-para.md": {
	id: "nuevo-curso-de-la-unam-en-coursera-de-python-para.md";
  slug: "nuevo-curso-de-la-unam-en-coursera-de-python-para";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"nuevos-paquetes-de-humble-bundle-de-contenido-para-desarrolladores-mas.md": {
	id: "nuevos-paquetes-de-humble-bundle-de-contenido-para-desarrolladores-mas.md";
  slug: "nuevos-paquetes-de-humble-bundle-de-contenido-para-desarrolladores-mas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"obvio-broma-i-pms-humor-softwaredeveloper-programacion-softwareengineer-projectmanagement.md": {
	id: "obvio-broma-i-pms-humor-softwaredeveloper-programacion-softwareengineer-projectmanagement.md";
  slug: "obvio-broma-i-pms-humor-softwaredeveloper-programacion-softwareengineer-projectmanagement";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"oferta-de-blackfriday-en-cursos-ilimitados-de-coursera-aprendeprogramacion.md": {
	id: "oferta-de-blackfriday-en-cursos-ilimitados-de-coursera-aprendeprogramacion.md";
  slug: "oferta-de-blackfriday-en-cursos-ilimitados-de-coursera-aprendeprogramacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"oferta-de-libros-de-programacion-de-la-editorial-manning-sobre.md": {
	id: "oferta-de-libros-de-programacion-de-la-editorial-manning-sobre.md";
  slug: "oferta-de-libros-de-programacion-de-la-editorial-manning-sobre";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-analisidedatos-para-prediccion-de-precio-de-vino--cienciadedatos.md": {
	id: "onthisday-analisidedatos-para-prediccion-de-precio-de-vino--cienciadedatos.md";
  slug: "onthisday-analisidedatos-para-prediccion-de-precio-de-vino--cienciadedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-analisisdedatos-exploratorio-con-python-del-curso-analyticsedge-del-mit.md": {
	id: "onthisday-analisisdedatos-exploratorio-con-python-del-curso-analyticsedge-del-mit.md";
  slug: "onthisday-analisisdedatos-exploratorio-con-python-del-curso-analyticsedge-del-mit";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-carga-de-archivos-para-analisisdedatos-usando-python-en-googlecolab.md": {
	id: "onthisday-carga-de-archivos-para-analisisdedatos-usando-python-en-googlecolab.md";
  slug: "onthisday-carga-de-archivos-para-analisisdedatos-usando-python-en-googlecolab";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-casos-de-exito-de-analisisdedatos-que-se-revisan-en.md": {
	id: "onthisday-casos-de-exito-de-analisisdedatos-que-se-revisan-en.md";
  slug: "onthisday-casos-de-exito-de-analisisdedatos-que-se-revisan-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-creando-graficas-y-tablas-para-visualizaciondedatos-con-python--pandas.md": {
	id: "onthisday-creando-graficas-y-tablas-para-visualizaciondedatos-con-python--pandas.md";
  slug: "onthisday-creando-graficas-y-tablas-para-visualizaciondedatos-con-python--pandas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-curso-de-python-de-harvard-cs50-clase-3-loops.md": {
	id: "onthisday-curso-de-python-de-harvard-cs50-clase-3-loops.md";
  slug: "onthisday-curso-de-python-de-harvard-cs50-clase-3-loops";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-dataframes-para-analisisdedatos-en-python.md": {
	id: "onthisday-dataframes-para-analisisdedatos-en-python.md";
  slug: "onthisday-dataframes-para-analisisdedatos-en-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-descubre-cual-es-el-rol-adecuado-para-ti-en.md": {
	id: "onthisday-descubre-cual-es-el-rol-adecuado-para-ti-en.md";
  slug: "onthisday-descubre-cual-es-el-rol-adecuado-para-ti-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-el-semestre-faltante-o-missing-semester-es-una-clase.md": {
	id: "onthisday-el-semestre-faltante-o-missing-semester-es-una-clase.md";
  slug: "onthisday-el-semestre-faltante-o-missing-semester-es-una-clase";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-este-curso-te-ensena-como-funciona-una-computadora-desde.md": {
	id: "onthisday-este-curso-te-ensena-como-funciona-una-computadora-desde.md";
  slug: "onthisday-este-curso-te-ensena-como-funciona-una-computadora-desde";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-hace-un-ano-hablando-sobre-class-central-para-conocer.md": {
	id: "onthisday-hace-un-ano-hablando-sobre-class-central-para-conocer.md";
  slug: "onthisday-hace-un-ano-hablando-sobre-class-central-para-conocer";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-juego-de-acertijos-para-aprender-programacion-python.md": {
	id: "onthisday-juego-de-acertijos-para-aprender-programacion-python.md";
  slug: "onthisday-juego-de-acertijos-para-aprender-programacion-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-libros-gratuitos-para-analisis-y-ciencia-de-datos-con.md": {
	id: "onthisday-libros-gratuitos-para-analisis-y-ciencia-de-datos-con.md";
  slug: "onthisday-libros-gratuitos-para-analisis-y-ciencia-de-datos-con";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-lo-esencial-de-python-para-analisdedatos-cienciadedatos-programacion.md": {
	id: "onthisday-lo-esencial-de-python-para-analisdedatos-cienciadedatos-programacion.md";
  slug: "onthisday-lo-esencial-de-python-para-analisdedatos-cienciadedatos-programacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-los-proyectos-del-curso-de-python-de-harvard-cs50.md": {
	id: "onthisday-los-proyectos-del-curso-de-python-de-harvard-cs50.md";
  slug: "onthisday-los-proyectos-del-curso-de-python-de-harvard-cs50";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-plataformas-para-crear-proyectos-de-analisisdedatos-y-cienciadedatos-googlecolab.md": {
	id: "onthisday-plataformas-para-crear-proyectos-de-analisisdedatos-y-cienciadedatos-googlecolab.md";
  slug: "onthisday-plataformas-para-crear-proyectos-de-analisisdedatos-y-cienciadedatos-googlecolab";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-recuerdos-estos-libros-hackean-tu-cerebro-para-ayudarte-a.md": {
	id: "onthisday-recuerdos-estos-libros-hackean-tu-cerebro-para-ayudarte-a.md";
  slug: "onthisday-recuerdos-estos-libros-hackean-tu-cerebro-para-ayudarte-a";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-resumen-de-la-primera-clase-del-curso-de-python.md": {
	id: "onthisday-resumen-de-la-primera-clase-del-curso-de-python.md";
  slug: "onthisday-resumen-de-la-primera-clase-del-curso-de-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-solucion-a-problemas-de-programacion-para-entrevistas-leetcode-javascript.md": {
	id: "onthisday-solucion-a-problemas-de-programacion-para-entrevistas-leetcode-javascript.md";
  slug: "onthisday-solucion-a-problemas-de-programacion-para-entrevistas-leetcode-javascript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-streamlit-es-un-modulo-de-python-para-crear-dashboards.md": {
	id: "onthisday-streamlit-es-un-modulo-de-python-para-crear-dashboards.md";
  slug: "onthisday-streamlit-es-un-modulo-de-python-para-crear-dashboards";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"onthisday-tareas-y-proyectos-del-curso-de-programacion-de-harvard.md": {
	id: "onthisday-tareas-y-proyectos-del-curso-de-programacion-de-harvard.md";
  slug: "onthisday-tareas-y-proyectos-del-curso-de-programacion-de-harvard";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"paquete-de-libros-de-programacion-pagando-desde-1-dolar-de.md": {
	id: "paquete-de-libros-de-programacion-pagando-desde-1-dolar-de.md";
  slug: "paquete-de-libros-de-programacion-pagando-desde-1-dolar-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pegar-un-video-de-carli-code-mis-recomendaciones-de-playlists.md": {
	id: "pegar-un-video-de-carli-code-mis-recomendaciones-de-playlists.md";
  slug: "pegar-un-video-de-carli-code-mis-recomendaciones-de-playlists";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pegar-un-video-de-casaverde72-app-de-probabilidad-de-encontrar.md": {
	id: "pegar-un-video-de-casaverde72-app-de-probabilidad-de-encontrar.md";
  slug: "pegar-un-video-de-casaverde72-app-de-probabilidad-de-encontrar";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pegar-un-video-de-devcaress-programacion-backend-php-desarrolloweb.md": {
	id: "pegar-un-video-de-devcaress-programacion-backend-php-desarrolloweb.md";
  slug: "pegar-un-video-de-devcaress-programacion-backend-php-desarrolloweb";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"perdi-la-cuenta-de-cuantoshice-programacion-javascript-softwaredeveloper-aprendeentiktok-hackerman.md": {
	id: "perdi-la-cuenta-de-cuantoshice-programacion-javascript-softwaredeveloper-aprendeentiktok-hackerman.md";
  slug: "perdi-la-cuenta-de-cuantoshice-programacion-javascript-softwaredeveloper-aprendeentiktok-hackerman";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"piet-es-un-lenguajedeprogramacion-cuyos-scripts-se-ven-como-arte.md": {
	id: "piet-es-un-lenguajedeprogramacion-cuyos-scripts-se-ven-como-arte.md";
  slug: "piet-es-un-lenguajedeprogramacion-cuyos-scripts-se-ven-como-arte";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pixelwar-reddit-rplace-python-javascript-programacion.md": {
	id: "pixelwar-reddit-rplace-python-javascript-programacion.md";
  slug: "pixelwar-reddit-rplace-python-javascript-programacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"plataformas-para-comenzar-a-crear-proyectos-de-analisisdedatos-y-cienciadedatos.md": {
	id: "plataformas-para-comenzar-a-crear-proyectos-de-analisisdedatos-y-cienciadedatos.md";
  slug: "plataformas-para-comenzar-a-crear-proyectos-de-analisisdedatos-y-cienciadedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"por-que-crearon-inteligenciaartificial-para-trabajos-creativos-y-no-solo.md": {
	id: "por-que-crearon-inteligenciaartificial-para-trabajos-creativos-y-no-solo.md";
  slug: "por-que-crearon-inteligenciaartificial-para-trabajos-creativos-y-no-solo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"prediccion-de-precios-de-vino-usando-analisis-de-datos-y.md": {
	id: "prediccion-de-precios-de-vino-usando-analisis-de-datos-y.md";
  slug: "prediccion-de-precios-de-vino-usando-analisis-de-datos-y";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-entrevista-sql-de-facebook-para-analista-o-cientifico.md": {
	id: "pregunta-de-entrevista-sql-de-facebook-para-analista-o-cientifico.md";
  slug: "pregunta-de-entrevista-sql-de-facebook-para-analista-o-cientifico";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-entrevista-sql-de-productos-mas-vendidos-en-amazon.md": {
	id: "pregunta-de-entrevista-sql-de-productos-mas-vendidos-en-amazon.md";
  slug: "pregunta-de-entrevista-sql-de-productos-mas-vendidos-en-amazon";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-entrevista-sql-de-twitter-para-puestos-de-analisis.md": {
	id: "pregunta-de-entrevista-sql-de-twitter-para-puestos-de-analisis.md";
  slug: "pregunta-de-entrevista-sql-de-twitter-para-puestos-de-analisis";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-entrevista-sql-sobre-encontrar-los-artistas-top-del.md": {
	id: "pregunta-de-entrevista-sql-sobre-encontrar-los-artistas-top-del.md";
  slug: "pregunta-de-entrevista-sql-sobre-encontrar-los-artistas-top-del";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-practica-para-entrevista-de-algoritmos--determinar-si.md": {
	id: "pregunta-de-practica-para-entrevista-de-algoritmos--determinar-si.md";
  slug: "pregunta-de-practica-para-entrevista-de-algoritmos--determinar-si";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-practica-para-entrevista-de-sql--encontrar-los.md": {
	id: "pregunta-de-practica-para-entrevista-de-sql--encontrar-los.md";
  slug: "pregunta-de-practica-para-entrevista-de-sql--encontrar-los";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-preparacion-de-entrevista-sql-calcular-el-porcentaje-de.md": {
	id: "pregunta-de-preparacion-de-entrevista-sql-calcular-el-porcentaje-de.md";
  slug: "pregunta-de-preparacion-de-entrevista-sql-calcular-el-porcentaje-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-preparacion-de-entrevista-sql-encontrar-los-productos-mas.md": {
	id: "pregunta-de-preparacion-de-entrevista-sql-encontrar-los-productos-mas.md";
  slug: "pregunta-de-preparacion-de-entrevista-sql-encontrar-los-productos-mas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pregunta-de-preparacion-para-entrevista-sql-de-snapchat-analisisdedatos-cienciadedatos.md": {
	id: "pregunta-de-preparacion-para-entrevista-sql-de-snapchat-analisisdedatos-cienciadedatos.md";
  slug: "pregunta-de-preparacion-para-entrevista-sql-de-snapchat-analisisdedatos-cienciadedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"preguntas-de-entrevista-que-todo-dev-javascript-debe-saber-en.md": {
	id: "preguntas-de-entrevista-que-todo-dev-javascript-debe-saber-en.md";
  slug: "preguntas-de-entrevista-que-todo-dev-javascript-debe-saber-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"pretotyping-describe-la-forma-mas-efectiva-de-validar-productos-de.md": {
	id: "pretotyping-describe-la-forma-mas-efectiva-de-validar-productos-de.md";
  slug: "pretotyping-describe-la-forma-mas-efectiva-de-validar-productos-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-aprendeprogramacion-programacionpython-cursosgratis-python.md": {
	id: "programacion-aprendeprogramacion-programacionpython-cursosgratis-python.md";
  slug: "programacion-aprendeprogramacion-programacionpython-cursosgratis-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-desarrollodesoftware-desarrollador-aprendeprogramacion.md": {
	id: "programacion-desarrollodesoftware-desarrollador-aprendeprogramacion.md";
  slug: "programacion-desarrollodesoftware-desarrollador-aprendeprogramacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-desarrollodesoftware-oferta-python-ebooks.md": {
	id: "programacion-desarrollodesoftware-oferta-python-ebooks.md";
  slug: "programacion-desarrollodesoftware-oferta-python-ebooks";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-desarrolloweb-desarrollodesoftware-startups-php.md": {
	id: "programacion-desarrolloweb-desarrollodesoftware-startups-php.md";
  slug: "programacion-desarrolloweb-desarrollodesoftware-startups-php";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-desarrolloweb-freecodecamp-aprendejugando.md": {
	id: "programacion-desarrolloweb-freecodecamp-aprendejugando.md";
  slug: "programacion-desarrolloweb-freecodecamp-aprendejugando";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-programador-holamundo-microsoftpaint-techtok-aprendeentiktok.md": {
	id: "programacion-programador-holamundo-microsoftpaint-techtok-aprendeentiktok.md";
  slug: "programacion-programador-holamundo-microsoftpaint-techtok-aprendeentiktok";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-programadores-desarrollodesoftware-desarrollador.md": {
	id: "programacion-programadores-desarrollodesoftware-desarrollador.md";
  slug: "programacion-programadores-desarrollodesoftware-desarrollador";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-programming-softwaredeveloper-digitalart-artedigital-java-javascript-python-processing.md": {
	id: "programacion-programming-softwaredeveloper-digitalart-artedigital-java-javascript-python-processing.md";
  slug: "programacion-programming-softwaredeveloper-digitalart-artedigital-java-javascript-python-processing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-python-javascript-softwareengineer-softwaredeveloper-github-aprendeentiktok-techtok.md": {
	id: "programacion-python-javascript-softwareengineer-softwaredeveloper-github-aprendeentiktok-techtok.md";
  slug: "programacion-python-javascript-softwareengineer-softwaredeveloper-github-aprendeentiktok-techtok";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-python-librosgratis.md": {
	id: "programacion-python-librosgratis.md";
  slug: "programacion-python-librosgratis";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programacion-softwaredeveloper-javascript-java-aprendeentiktok.md": {
	id: "programacion-softwaredeveloper-javascript-java-aprendeentiktok.md";
  slug: "juegos-para-ejercitar-tu-logica-de-programacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programando-motomami-en-python--programacion.md": {
	id: "programando-motomami-en-python--programacion.md";
  slug: "programando-motomami-en-python--programacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"programe-una-web-para-analizar-las-conferencias-del-presidente-de.md": {
	id: "programe-una-web-para-analizar-las-conferencias-del-presidente-de.md";
  slug: "programe-una-web-para-analizar-las-conferencias-del-presidente-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"promocion-de-50-de-descuento-en-un-mes-de-membresia.md": {
	id: "promocion-de-50-de-descuento-en-un-mes-de-membresia.md";
  slug: "promocion-de-50-de-descuento-en-un-mes-de-membresia";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"promocion-de-coursera-plus--1-dolar-por-1-mes-en.md": {
	id: "promocion-de-coursera-plus--1-dolar-por-1-mes-en.md";
  slug: "promocion-de-coursera-plus--1-dolar-por-1-mes-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"promocion-para-obtener-certificados-de-google-meta-y-microsoft-por.md": {
	id: "promocion-para-obtener-certificados-de-google-meta-y-microsoft-por.md";
  slug: "promocion-para-obtener-certificados-de-google-meta-y-microsoft-por";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"proyectos-del-curso-de-python-de-harvard-aprendeprogramacion-python-cursosgratuitos.md": {
	id: "proyectos-del-curso-de-python-de-harvard-aprendeprogramacion-python-cursosgratuitos.md";
  slug: "proyectos-del-curso-de-python-de-harvard-aprendeprogramacion-python-cursosgratuitos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"python-programacion-programacionpython-acertijos.md": {
	id: "python-programacion-programacionpython-acertijos.md";
  slug: "python-programacion-programacionpython-acertijos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"que-es-la-inteligenciaartificial--segun-la-biblia-de-la.md": {
	id: "que-es-la-inteligenciaartificial--segun-la-biblia-de-la.md";
  slug: "que-es-la-inteligenciaartificial--segun-la-biblia-de-la";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"que-lenguaje-de-programacion-elegir--javascript-typescript-java-kotlin-python.md": {
	id: "que-lenguaje-de-programacion-elegir--javascript-typescript-java-kotlin-python.md";
  slug: "que-lenguaje-de-programacion-elegir--javascript-typescript-java-kotlin-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"que-tanto-sirve-leetcode-en-el-cv-no-es-muy.md": {
	id: "que-tanto-sirve-leetcode-en-el-cv-no-es-muy.md";
  slug: "que-tanto-sirve-leetcode-en-el-cv-no-es-muy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"quedo-claro-que-me-parece-interesante--programacion-aprendeprogramacion-adventofcode.md": {
	id: "quedo-claro-que-me-parece-interesante--programacion-aprendeprogramacion-adventofcode.md";
  slug: "quedo-claro-que-me-parece-interesante--programacion-aprendeprogramacion-adventofcode";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"recomendacion-de-libros-y-cursos-practicos-de-python-proyectospython-cursospython.md": {
	id: "recomendacion-de-libros-y-cursos-practicos-de-python-proyectospython-cursospython.md";
  slug: "recomendacion-de-libros-y-cursos-practicos-de-python-proyectospython-cursospython";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"recompensa-de-50-000-dolares-por-hackear-la-ia-de-google.md": {
	id: "recompensa-de-50-000-dolares-por-hackear-la-ia-de-google.md";
  slug: "recompensa-de-50-000-dolares-por-hackear-la-ia-de-google";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"recopilacion-de-ejercicios-resueltos-de-programacion-en-python-los-ejercicios-vienen.md": {
	id: "recopilacion-de-ejercicios-resueltos-de-programacion-en-python-los-ejercicios-vienen.md";
  slug: "recopilacion-de-ejercicios-resueltos-de-programacion-en-python-los-ejercicios-vienen";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"recopilacion-de-los-mejores-posts-de-grandes-empresas-de-tecnologia.md": {
	id: "recopilacion-de-los-mejores-posts-de-grandes-empresas-de-tecnologia.md";
  slug: "recopilacion-de-los-mejores-posts-de-grandes-empresas-de-tecnologia";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"replying-to-anelte1-outer-joins-en-sql-left-join-right.md": {
	id: "replying-to-anelte1-outer-joins-en-sql-left-join-right.md";
  slug: "replying-to-anelte1-outer-joins-en-sql-left-join-right";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"replying-to-erickvalverde53-como-entrar-a-los-cursos-gratis-de.md": {
	id: "replying-to-erickvalverde53-como-entrar-a-los-cursos-gratis-de.md";
  slug: "replying-to-erickvalverde53-como-entrar-a-los-cursos-gratis-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"replying-to-geovanyrdz-revision-del-plandeestudios-de-inteligenciaartificial-y-cienciadedatos.md": {
	id: "replying-to-geovanyrdz-revision-del-plandeestudios-de-inteligenciaartificial-y-cienciadedatos.md";
  slug: "replying-to-geovanyrdz-revision-del-plandeestudios-de-inteligenciaartificial-y-cienciadedatos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"replying-to-jantoniotapia0-asi-puedes-crear-tu-primera-visualizacion-de.md": {
	id: "replying-to-jantoniotapia0-asi-puedes-crear-tu-primera-visualizacion-de.md";
  slug: "replying-to-jantoniotapia0-asi-puedes-crear-tu-primera-visualizacion-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"replying-to-lorenaruiz6134-curso-de-harvard-de-sql-con-certificado.md": {
	id: "replying-to-lorenaruiz6134-curso-de-harvard-de-sql-con-certificado.md";
  slug: "replying-to-lorenaruiz6134-curso-de-harvard-de-sql-con-certificado";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"replying-to-luislaraariza-cursos-universitarios-de-sql-en-espanol-y.md": {
	id: "replying-to-luislaraariza-cursos-universitarios-de-sql-en-espanol-y.md";
  slug: "replying-to-luislaraariza-cursos-universitarios-de-sql-en-espanol-y";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"replying-to-omitir94-solucion-al-problema-de-encontrar-si-hay.md": {
	id: "replying-to-omitir94-solucion-al-problema-de-encontrar-si-hay.md";
  slug: "replying-to-omitir94-solucion-al-problema-de-encontrar-si-hay";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resolviendo-ejercicios-de-practica-de-sql-este-ejercicio-trata-sobre.md": {
	id: "resolviendo-ejercicios-de-practica-de-sql-este-ejercicio-trata-sobre.md";
  slug: "resolviendo-ejercicios-de-practica-de-sql-este-ejercicio-trata-sobre";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resolviendo-el-ejercicio-2-de-sql-de-la-web-sql-practice-en.md": {
	id: "resolviendo-el-ejercicio-2-de-sql-de-la-web-sql-practice-en.md";
  slug: "resolviendo-el-ejercicio-2-de-sql-de-la-web-sql-practice-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"responder-a-cecilia-jordan-mkt-obten-tu-titulouniversitario-con-cursos-online-en.md": {
	id: "responder-a-cecilia-jordan-mkt-obten-tu-titulouniversitario-con-cursos-online-en.md";
  slug: "responder-a-cecilia-jordan-mkt-obten-tu-titulouniversitario-con-cursos-online-en";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"responder-a-gustavokant-bucle-while-en-programacion-python-programming-techtok-aprendeentiktok-softwareengineer.md": {
	id: "responder-a-gustavokant-bucle-while-en-programacion-python-programming-techtok-aprendeentiktok-softwareengineer.md";
  slug: "responder-a-gustavokant-bucle-while-en-programacion-python-programming-techtok-aprendeentiktok-softwareengineer";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"responder-a-idgpxd1-eticahacker.md": {
	id: "responder-a-idgpxd1-eticahacker.md";
  slug: "responder-a-idgpxd1-eticahacker";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"responder-a-jose6z-programacion-cursosgratis-aprendeprogramacion.md": {
	id: "responder-a-jose6z-programacion-cursosgratis-aprendeprogramacion.md";
  slug: "responder-a-jose6z-programacion-cursosgratis-aprendeprogramacion";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"responder-a-mkfnx.md": {
	id: "responder-a-mkfnx.md";
  slug: "responder-a-mkfnx";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"responder-a-sapphiredrako-como-iniciar-desde-0-en-programacion-programacion-programador.md": {
	id: "responder-a-sapphiredrako-como-iniciar-desde-0-en-programacion-programacion-programador.md";
  slug: "responder-a-sapphiredrako-como-iniciar-desde-0-en-programacion-programacion-programador";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"respuesta-a-alexandervillazon3-las-tareas-del-curso-de-introduccion-a.md": {
	id: "respuesta-a-alexandervillazon3-las-tareas-del-curso-de-introduccion-a.md";
  slug: "respuesta-a-alexandervillazon3-las-tareas-del-curso-de-introduccion-a";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"respuesta-a-armarce-cursos-para-aprender-machine-learning-asi-ves.md": {
	id: "respuesta-a-armarce-cursos-para-aprender-machine-learning-asi-ves.md";
  slug: "respuesta-a-armarce-cursos-para-aprender-machine-learning-asi-ves";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"respuesta-a-capbambu-pregunta-de-entrevista-sql-de-linkedin-para.md": {
	id: "respuesta-a-capbambu-pregunta-de-entrevista-sql-de-linkedin-para.md";
  slug: "respuesta-a-capbambu-pregunta-de-entrevista-sql-de-linkedin-para";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"respuesta-a-diegoocasiano-asi-puedes-acceder-de-manera-gratuita-al.md": {
	id: "respuesta-a-diegoocasiano-asi-puedes-acceder-de-manera-gratuita-al.md";
  slug: "respuesta-a-diegoocasiano-asi-puedes-acceder-de-manera-gratuita-al";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resumen-clase-2-cs50-sql-de-harvard-basesdedatos-sqlite-cursosonline.md": {
	id: "resumen-clase-2-cs50-sql-de-harvard-basesdedatos-sqlite-cursosonline.md";
  slug: "resumen-clase-2-cs50-sql-de-harvard-basesdedatos-sqlite-cursosonline";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resumen-de-la-clase-2-del-curso-cs50-sql-de.md": {
	id: "resumen-de-la-clase-2-del-curso-cs50-sql-de.md";
  slug: "resumen-de-la-clase-2-del-curso-cs50-sql-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resumen-de-la-primera-clase-del-curso-de-programacion-con.md": {
	id: "resumen-de-la-primera-clase-del-curso-de-programacion-con.md";
  slug: "resumen-de-la-primera-clase-del-curso-de-programacion-con";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resumen-de-la-primera-clase-del-curso-de-sql-de.md": {
	id: "resumen-de-la-primera-clase-del-curso-de-sql-de.md";
  slug: "resumen-de-la-primera-clase-del-curso-de-sql-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resumen-de-la-segunda-clase-del-curso-de-python-de.md": {
	id: "resumen-de-la-segunda-clase-del-curso-de-python-de.md";
  slug: "resumen-de-la-segunda-clase-del-curso-de-python-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"resumen-de-la-tercera-clase-del-curso-de-python-de.md": {
	id: "resumen-de-la-tercera-clase-del-curso-de-python-de.md";
  slug: "resumen-de-la-tercera-clase-del-curso-de-python-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"reto-100diasdepython-en-replit-y-server-de-discord-de-apoyo.md": {
	id: "reto-100diasdepython-en-replit-y-server-de-discord-de-apoyo.md";
  slug: "reto-100diasdepython-en-replit-y-server-de-discord-de-apoyo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"retos-de-administracion-de-servidores-linux-para-entrevistas-de-devops.md": {
	id: "retos-de-administracion-de-servidores-linux-para-entrevistas-de-devops.md";
  slug: "retos-de-administracion-de-servidores-linux-para-entrevistas-de-devops";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"rezando-porque-tiktok-no-lo-cuente-como-contenido-peligroso.md": {
	id: "rezando-porque-tiktok-no-lo-cuente-como-contenido-peligroso.md";
  slug: "rezando-porque-tiktok-no-lo-cuente-como-contenido-peligroso";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"robo-de-huella-digital-a-partir-del-sonido-de-deslizar.md": {
	id: "robo-de-huella-digital-a-partir-del-sonido-de-deslizar.md";
  slug: "robo-de-huella-digital-a-partir-del-sonido-de-deslizar";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"scripts-de-python-que-se-auto-reparan-usando-inteligencia-artificial.md": {
	id: "scripts-de-python-que-se-auto-reparan-usando-inteligencia-artificial.md";
  slug: "scripts-de-python-que-se-auto-reparan-usando-inteligencia-artificial";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"se-puede-hacer-trampa-en-entrevistas-de-programacion-usando-chatgpt.md": {
	id: "se-puede-hacer-trampa-en-entrevistas-de-programacion-usando-chatgpt.md";
  slug: "se-puede-hacer-trampa-en-entrevistas-de-programacion-usando-chatgpt";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"si-la-declaracion-de-tiktok-en-el-congreso-hubiera-sido.md": {
	id: "si-la-declaracion-de-tiktok-en-el-congreso-hubiera-sido.md";
  slug: "si-la-declaracion-de-tiktok-en-el-congreso-hubiera-sido";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"sitio-web-para-practicar-con-preguntas-de-entrevista-de-sql.md": {
	id: "sitio-web-para-practicar-con-preguntas-de-entrevista-de-sql.md";
  slug: "sitio-web-para-practicar-con-preguntas-de-entrevista-de-sql";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"softwaredeveloper-programacion-softwareengineer-google-empleo-reclutamiento.md": {
	id: "softwaredeveloper-programacion-softwareengineer-google-empleo-reclutamiento.md";
  slug: "softwaredeveloper-programacion-softwareengineer-google-empleo-reclutamiento";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"softwaredeveloper-softwareengineer-programacion-desarrollador-programador-ingenieriadesoftware-ingenieriadesistemas.md": {
	id: "softwaredeveloper-softwareengineer-programacion-desarrollador-programador-ingenieriadesoftware-ingenieriadesistemas.md";
  slug: "softwaredeveloper-softwareengineer-programacion-desarrollador-programador-ingenieriadesoftware-ingenieriadesistemas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"solucion-explicada-en-python-del-ejercicio-1768-de-leetcode-llamado.md": {
	id: "solucion-explicada-en-python-del-ejercicio-1768-de-leetcode-llamado.md";
  slug: "solucion-explicada-en-python-del-ejercicio-1768-de-leetcode-llamado";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"soluciones-en-video-a-cientos-de-problemas-de-algoritmos-y.md": {
	id: "soluciones-en-video-a-cientos-de-problemas-de-algoritmos-y.md";
  slug: "soluciones-en-video-a-cientos-de-problemas-de-algoritmos-y";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"sueldos-de-programadores-alrededor-del-mundo-de-acuerdo-a-la.md": {
	id: "sueldos-de-programadores-alrededor-del-mundo-de-acuerdo-a-la.md";
  slug: "sueldos-de-programadores-alrededor-del-mundo-de-acuerdo-a-la";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tecnicas-para-mantener-constancia-aprendiendo-programacion-aprendeprogramacion-productividad-python-cursopython.md": {
	id: "tecnicas-para-mantener-constancia-aprendiendo-programacion-aprendeprogramacion-productividad-python-cursopython.md";
  slug: "tecnicas-para-mantener-constancia-aprendiendo-programacion-aprendeprogramacion-productividad-python-cursopython";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-analytics-edge-es-el-curso-con-el-que-me.md": {
	id: "the-analytics-edge-es-el-curso-con-el-que-me.md";
  slug: "the-analytics-edge-es-el-curso-con-el-que-me";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"top-de-empleos-mejor-pagados-en-programacion-en-eeuu-de.md": {
	id: "top-de-empleos-mejor-pagados-en-programacion-en-eeuu-de.md";
  slug: "top-de-empleos-mejor-pagados-en-programacion-en-eeuu-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"top-de-herramientas-para-desarrolladores-de-software-2023-devtools-desarrollodesoftware.md": {
	id: "top-de-herramientas-para-desarrolladores-de-software-2023-devtools-desarrollodesoftware.md";
  slug: "top-de-herramientas-para-desarrolladores-de-software-2023-devtools-desarrollodesoftware";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"top-de-libros-de-tecnologia-en-tendencia-en-la-plataforma.md": {
	id: "top-de-libros-de-tecnologia-en-tendencia-en-la-plataforma.md";
  slug: "top-de-libros-de-tecnologia-en-tendencia-en-la-plataforma";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tutorial-gratuito-de-datalemur-de-sql-para-analisisdedatos-video-de.md": {
	id: "tutorial-gratuito-de-datalemur-de-sql-para-analisisdedatos-video-de.md";
  slug: "tutorial-gratuito-de-datalemur-de-sql-para-analisisdedatos-video-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"tutoriales-de-youtube-para-el-reto-100-dias-de-python.md": {
	id: "tutoriales-de-youtube-para-el-reto-100-dias-de-python.md";
  slug: "tutoriales-de-youtube-para-el-reto-100-dias-de-python";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"un-ano-de-coursera-ilimitado-a-50-de-descuento-cursosonline.md": {
	id: "un-ano-de-coursera-ilimitado-a-50-de-descuento-cursosonline.md";
  slug: "un-ano-de-coursera-ilimitado-a-50-de-descuento-cursosonline";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"un-asistente-de-soporte-al-cliente-de-la-empresa-klarna.md": {
	id: "un-asistente-de-soporte-al-cliente-de-la-empresa-klarna.md";
  slug: "un-asistente-de-soporte-al-cliente-de-la-empresa-klarna";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"un-nuevo-articulo-de-investigacion-describe-como-usaron-arte-ascii.md": {
	id: "un-nuevo-articulo-de-investigacion-describe-como-usaron-arte-ascii.md";
  slug: "un-nuevo-articulo-de-investigacion-describe-como-usaron-arte-ascii";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"un-nuevo-articulo-describe-un-ataque-de-robo-de-contrasena.md": {
	id: "un-nuevo-articulo-describe-un-ataque-de-robo-de-contrasena.md";
  slug: "un-nuevo-articulo-describe-un-ataque-de-robo-de-contrasena";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"volvi-a-ver-este-video-con-jose_thetiktokuuur-y-tenia-que.md": {
	id: "volvi-a-ver-este-video-con-jose_thetiktokuuur-y-tenia-que.md";
  slug: "volvi-a-ver-este-video-con-jose_thetiktokuuur-y-tenia-que";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"web-app-interactiva-para-visualizar-datos-en-solo-38-lineas.md": {
	id: "web-app-interactiva-para-visualizar-datos-en-solo-38-lineas.md";
  slug: "web-app-interactiva-para-visualizar-datos-en-solo-38-lineas";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"while-true-learn--en-humblebundle-mkfnx-desarrollodesoftware-programacion-videojuegos-steam.md": {
	id: "while-true-learn--en-humblebundle-mkfnx-desarrollodesoftware-programacion-videojuegos-steam.md";
  slug: "while-true-learn--en-humblebundle-mkfnx-desarrollodesoftware-programacion-videojuegos-steam";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"wordle-programacion-javascript-desarrolloweb.md": {
	id: "wordle-programacion-javascript-desarrolloweb.md";
  slug: "wordle-programacion-javascript-desarrolloweb";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"ya-esta-disponible-el-curso-de-sql-de-cs50-de.md": {
	id: "ya-esta-disponible-el-curso-de-sql-de-cs50-de.md";
  slug: "ya-esta-disponible-el-curso-de-sql-de-cs50-de";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
