import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: `${SITE_TITLE} — Blog`,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id}/`,
        categories: post.data.tags,
        author: post.data.author,
      })),
    customData: `<language>en-us</language>`,
  });
}
