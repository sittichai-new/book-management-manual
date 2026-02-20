import { BooksList } from "../types/book";

export default function BookList({ books, showView, onEdit, onDelete }: {
  books: BooksList[];
  showView: (b: BooksList) => void;
  onEdit: (b: BooksList) => void;
  onDelete: (b: BooksList) => void;
}) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-16">No.</th>
            <th className="p-3 text-left w-50">ISBN</th>
            <th className="p-3 text-left">Book Name</th>
            <th className="p-3 w-60">Actions</th>
          </tr>
        </thead>
        <tbody>
          {(
            books.map((b, i) => (
              <tr key={b.book_id} className="border-t">
                <td className="pl-5">{i + 1}</td>
                <td className="p-3">{b.isbn}</td>
                <td className="p-3">{b.book_name}</td>
                <td className="p-3 space-x-2">
                  <button onClick={() => showView(b)} className="px-3 py-1 bg-green-500 text-white rounded">
                    View
                  </button>
                  <button onClick={() => onEdit(b)} className="px-3 py-1 bg-yellow-500 text-white rounded">
                    Edit
                  </button>
                  <button onClick={() => onDelete(b)} className="px-3 py-1 bg-red-600 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}