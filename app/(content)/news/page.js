import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const res = await fetch("http://localhost:8080/news");

  if (!res.ok) {
    throw new Error("Failed to load the data.");
  }
  let news = await res.json()
  return (
    <div>
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
