import { getNewsItem } from "@/lib/news";


export default async function ImagePage({ params }) {


    const slug = params.slug;
    const item =await getNewsItem(slug)  

    if(!item){
        notFound()
    }

    return (
        <div className="fullscreen-image">
        <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
    )
}
