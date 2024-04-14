import { useEffect } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

// components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

const Home = () => {
  const { books, dispatch } = useBooksContext();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BOOKS", payload: json });
      }
    };

    fetchBooks();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="books">
        {books &&
          books.map((book) => (
            <BookDetails book={book} key={book._id} />
          ))}
      </div>
      <BookForm />
    </div>
  );
};

export default Home;
