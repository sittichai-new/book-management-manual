import { on } from "events";
import BookField from "./bookField";

export default function AddBook({ open, onClose, form, setForm, onSubmit }: any) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[420px] rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Add Book</h2>
        <BookField form={form} setForm={setForm} />
        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="px-3 py-2 border rounded">
            Cancel
          </button>
          <button onClick={onSubmit} className="px-3 py-2 bg-blue-600 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}