import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map(x =>
        <li key={x.id}>
          {" "}<Link href={`/news/${x.slug}`}>
            <img src={`/images/news/${x.image}`} alt={x.title} />
            <span>
              {x.title}
            </span>
          </Link>
        </li>
      )}
    </ul>
  );
}
