import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";

const checkoutDelete = ({ info, setCheckInfo }) => {
    const handleDelete = async (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Checkout has been deleted.",
                    icon: "success"
                });
                const res = await fetch(`http://localhost:3000/api/checkout/${id}`, {
                    method: "DELETE"
                });
                const data = await res.json();
                // console.log(data);
                if (res.ok) {
                    setCheckInfo(prev => prev.filter(item => item._id !== id));
                }
            }
        });
    };

    return (
        <div>
            <button onClick={() => handleDelete(info?._id)}>
                <TiDelete className="text-2xl"/>
            </button>
        </div>
    );
};

export default checkoutDelete;