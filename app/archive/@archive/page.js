import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(x =>
            <li key={x}>
              {" "}<Link href={`/archive/${x}`}>{x}</Link>
            </li>
          )}
        </ul>
      </nav>
      <h1>Archive Page</h1>
    </header>
  );
}
