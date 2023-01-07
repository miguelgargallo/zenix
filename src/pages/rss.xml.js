import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION, AUTHOR } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		author: AUTHOR,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx,pen}'),
	});
