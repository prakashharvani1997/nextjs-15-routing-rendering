import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestPage() {

   const news = await getLatestNews()

    return (
      <>
   
        <h2>Latest Page</h2>
        <NewsList news={news} />
       
      </>
    );
  }
  