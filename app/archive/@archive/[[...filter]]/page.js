import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";


export default function FilteredNewsPage({ params }) {



  const filter = params.filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let links = getAvailableNewsYears();
  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)

    links = getAvailableNewsMonths(selectedYear)
  }


  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links=[]
  }

  let newsContent = <p> No News found.</p>

  if (news && news.length) {
    newsContent = <NewsList news={news} />
  }


  if((selectedYear && !getAvailableNewsYears().includes(+selectedYear) ) || selectedMonth && !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth)){

    throw new Error("Invalid filters");
     
  }

  return (
    <div>

      <header id="archive-header">
        <nav>
          <ul>
            {links.map(x => {

              const href = selectedYear ? `/archive/${selectedYear}/${x}` : `/archive/${x}`

              return (<li key={x}>
                {" "}<Link href={href}>{x}</Link>
              </li>)
            }

            )}
          </ul>
        </nav>

      </header>
      {newsContent}
    </div>);
}