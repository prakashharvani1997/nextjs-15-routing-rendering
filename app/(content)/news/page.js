import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
 
  let news = getAllNews();
  return (
    <div>
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
