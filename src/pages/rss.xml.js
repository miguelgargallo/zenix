import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION, AUTHOR } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		author: AUTHOR,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx,pen}'),
		items: import.meta.glob('./blog-es/**/*.{md,mdx,pen}'),
		items: import.meta.glob('./blog-ita/**/*.{md,mdx,pen}'),
		items: import.meta.glob('./blog-fr/**/*.{md,mdx,pen}'),
		items: import.meta.glob('./blog-pt/**/*.{md,mdx,pen}'),
		items: import.meta.glob('./blog-de/**/*.{md,mdx,pen}'),
		items: import.meta.glob('./blog-cat/**/*.{md,mdx,pen}'),
		// items: import.meta.glob('./book/**/*.{md,mdx,pen}'),
	});
