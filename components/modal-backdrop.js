import { useRouter } from "next/navigation";

export default function ModalBackdropPage() {
    const router  = useRouter()

    return (
        <div className="model-backdrop" onClick={router.back} />
    );
 }
 
