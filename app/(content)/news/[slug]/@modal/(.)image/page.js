'use client'
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/router";

export default function ImagePage({ params }) {

    const router  = useRouter()
  const slug = params.slug;
  const item = DUMMY_NEWS.find(x => x.slug == slug);

  if (!item) {
    notFound();
  }

  return (
    <>
    <div className="model-backdrop" onClick={router.back}>
      <dialog className="model" open>
        <h2>Interceted!</h2>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
    </div>
    </>
  );
}
