'use client';

import { useState , useEffect } from 'react';
import { BooksList } from "./types/book";
import ViewBook from './components/viewBook';
import EditBook from './components/editBook';
import AddBook from './components/addBook';
import DeleteBook from './components/deleteBook';
import BookList from './components/bookList';

async function fetchBooks() {
  try {
    const response = await fetch('http://localhost:4000/books/getBooks');
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export default function Home() {
  const [books, setBooks] = useState<BooksList[]>([]);

  const loadBooks = async () => {
    const res = await fetch("http://localhost:4000/books/getBooks");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const [modalAdd, setModalAdd] = useState<string | null>(null);
  const [modalView, setModalView] = useState<string | null>(null);
  const [modalEdit, setModalEdit] = useState<string | null>(null);
  const [modalDelete, setModalDelete] = useState<string | null>(null);
  const [selected, setSelected] = useState<BooksList | null>(null);
  const [form, setForm] = useState({ isbn: "", book_id: "", book_name: "" });


  const addBook = async () => {
    await fetch('http://localhost:4000/books/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })

    await loadBooks();
    setModalAdd(null); 
  };

    const editBook = async () => {
    await fetch("http://localhost:4000/books/update/" + selected?.book_id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    await loadBooks();
    setModalEdit(null); 
  };

    const deleteBook = async () => {
    await fetch("http://localhost:4000/books/delete/" + selected?.book_id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    await loadBooks();
    setModalDelete(null); 
  };



 return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-semibold">Book Management</h1>
        <button
          onClick={() => { setForm({ isbn: "", book_id: "", book_name: "" }); setModalAdd("add"); }}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Book
        </button>
      </div>

      <BookList
        books={books}
        showView={(b) => { setSelected(b); setModalView("view"); }}
        onEdit={(b) => { setSelected(b); setForm(b); setModalEdit("edit"); }}
        onDelete={(b) => { setSelected(b); setModalDelete("delete"); }}
      />

      <AddBook open={modalAdd==="add"} onClose={()=>setModalAdd(null)} form={form} setForm={setForm} onSubmit={addBook}/>
      <ViewBook open={modalView==="view"} onClose={()=>setModalView(null)} id={selected?.book_id} form={form} setForm={setForm}/>
      <EditBook open={modalEdit==="edit"} onClose={()=>setModalEdit(null)} id={selected?.book_id} form={form} setForm={setForm} onSubmit={editBook}/>
      <DeleteBook open={modalDelete==="delete"} onClose={()=>setModalDelete(null)} onConfirm={deleteBook} bookName={selected?.book_name}/>
    </div>
  );
}
