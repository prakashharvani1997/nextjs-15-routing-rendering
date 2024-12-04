import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
 
      <h1>News</h1>

      <ul className="news-list">
      {DUMMY_NEWS.map((x)=>(
        <li key={x.id}>
          {" "}<Link href={`/news/${x.slug}`}> 
          <img src={`/images/news/${x.image}`} alt={x.title} />
          <span>{x.title}</span>
           </Link>
        </li>

      ))}
        </ul>
    </div>
  );
}
