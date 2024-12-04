import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";


export default function FilteredNewsPage ({params}) {

    const newYear = params.year
    const news = getNewsForYear(newYear)

    return (
      <NewsList news={news} />
    );
  }