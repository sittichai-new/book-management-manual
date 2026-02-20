type Props = {
  form: {
    isbn: string;
    book_name: string;
    description: string;
  };
  setForm: (v: any) => void;
  hideIsbn?: boolean;
};

export default function BookField({ form, setForm, hideIsbn }: Props) {
  return (
    <div className="space-y-3">
      {!hideIsbn && (
        <>
          <p className="text-sm text-gray-500">ISBN</p>
          <input
            className="w-full border p-2 rounded"
            placeholder="ISBN"
            value={form.isbn}
            onChange={(e) => setForm({ ...form, isbn: e.target.value })}
          />
        </>
      )}

      <p className="text-sm text-gray-500">Book Name</p>
      <input
        className="w-full border p-2 rounded"
        placeholder="Book Name"
        value={form.book_name}
        onChange={(e) => setForm({ ...form, book_name: e.target.value })}
      />

      <p className="text-sm text-gray-500">Description</p>
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
    </div>
  );
}