import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
 
  let news = await getAllNews();
  return (
    <div>
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
