import { useEffect } from "react";
import BookField from "./bookField";

export default function EditBook({ open, id, onClose, form, setForm, onSubmit }: any) {
    if (!open) return null;
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:4000/books/getBook/" + id);
            const data = await res.json();
            setForm(data);
        }
        fetchData();
    }, [id]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[420px] rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>

        <BookField form={form} setForm={setForm} hideIsbn />

        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="px-3 py-2 border rounded">
            Cancel
          </button>
          <button onClick={onSubmit} className="px-3 py-2 bg-yellow-500 text-white rounded">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}