 import ModalBackdropPage from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
 
export default async function ImagePage({ params }) {

   const slug = params.slug;
  const item = await getNewsItem(slug)

  if (!item) {
    notFound();
  }

  return (
    <>
     <ModalBackdropPage />
      <dialog className="model" open>
        <h2>Interceted!</h2>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
     </>
  );
}
