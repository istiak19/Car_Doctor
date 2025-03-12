import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
const checkoutDelete = ({ info }) => {
    const router = useRouter()
    const handleDelete = async (id) => {
        console.log(id)
        const res = await fetch(`http://localhost:3000/api/checkout/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        console.log(data)
        router.refresh();
    };
    
    return (
        <div>
            <button onClick={() => handleDelete(info?._id)}>
                <TiDelete />
            </button>
        </div>
    );
};

export default checkoutDelete;