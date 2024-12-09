import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ year, month }) {


  const getAvailYears = await getAvailableNewsYears();

  let links = getAvailYears;


  if (
    (year && !getAvailYears.includes(year)) ||
    (month &&
      !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filters");
  }

  
  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((x) => {
            const href = year
              ? `/archive/${year}/${x}`
              : `/archive/${x}`;

            return (
              <li key={x}>
                {" "}
                <Link href={href}>{x}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p> No News found.</p>;

  if (news && news.length) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}
export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

 
  return (
    <div>
       <Suspense fallback={<p>Loading filter.....</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news.....</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </div>
  );
}
