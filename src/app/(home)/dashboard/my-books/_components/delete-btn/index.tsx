import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import Swal from "sweetalert2";
import { deleteBook } from "../../../../../action/book-action";

type Props = {
  bookId: string;
};

const DeleteBtn = (props: Props) => {
  const { bookId } = props;
  const [loading, setLoading] = useState(false);

  const handleDelete = async ({ bookId }: { bookId: string }) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#441006",
      cancelButtonColor: "#a84a1f",
      confirmButtonText: "Yes, delete it!",
    });

    setLoading(true);

    if (result.isConfirmed) {
      await deleteBook({ bookId });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        confirmButtonColor: "#441006",
        icon: "success",
      });
    }
    setLoading(false);
  };

  return (
    <button
      className="flex items-center gap-1 px-3 py-1 bg-crusta-950 hover:bg-crusta-800 text-white rounded-md "
      onClick={() => handleDelete({ bookId })}
      disabled={loading}
    >
      {loading && (
        <span className="animate-spin">
          <ImSpinner2 size={16} />
        </span>
      )}
      <span>Delete</span>
    </button>
  );
};

export default DeleteBtn;
