'use client';

import { useState , useEffect } from 'react';

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
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
      setLoading(false);
    });
    console.log('Books fetched:', books);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center py-8">Books Page</h1>
        <p className="text-center text-gray-600">This is the Books page. Content will go here.</p>
      </div>  
  );
}
