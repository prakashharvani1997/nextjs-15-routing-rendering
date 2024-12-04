import { DUMMY_NEWS } from "@/dummy-news";


export default function ImagePage({ params }) {


    const slug = params.slug;
    const item = DUMMY_NEWS.find((x)=>(x.slug == slug))

    if(!item){
        notFound()
    }

    return (
        <>
        <h2>Interceted!</h2>
        <div className="fullscreen-image">
        <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
        </>
    )
}
