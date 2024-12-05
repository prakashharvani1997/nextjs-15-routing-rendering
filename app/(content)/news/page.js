import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
