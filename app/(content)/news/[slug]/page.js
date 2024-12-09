import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetail({ params }) {
  const slug = params.slug;
  const item = await getNewsItem(slug);

  if (!item) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${item.slug}/image`}>
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </Link>

        <h1>
          {item.title}
        </h1>
        <time dateTime={item.date}>
          {" "}{item.date}{" "}
        </time>
      </header>

      <p>
        {item.content}
      </p>
    </article>
  );
}
