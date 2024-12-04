import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";



export default function NewsDetail({params}) {

    const slug = params.slug;
    const item = DUMMY_NEWS.find((x)=>(x.slug == slug))

    if(!item){
        notFound()
    }
    return <article className="news-article">
        <header >
        <img src={`/images/news/${item.image}`} alt={item.title} />

        <h1>{item.title}</h1>
        <time dateTime={item.date}> {item.date} </time>
        </header>

       <p>
        {item.content}
        </p>
    </article>
}
