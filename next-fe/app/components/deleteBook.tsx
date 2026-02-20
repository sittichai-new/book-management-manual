export default function DeleteBook({ open, onClose, onConfirm, bookName }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[380px] rounded shadow p-6 text-center">
        <h2 className="text-lg font-semibold mb-3">Confirm Delete</h2>

        <p className="text-gray-600 mb-5">
          Delete <span className="font-semibold">{bookName}</span> ?
        </p>

        <div className="flex justify-center gap-3">
          <button onClick={onClose} className="px-3 py-2 border rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-3 py-2 bg-red-600 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}