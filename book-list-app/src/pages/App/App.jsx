import { useEffect, useState } from "react";
import Bookrow from "../../components/bookrow/bookrow";
import getstoragedata from "../../components/bookrow/Storage";
export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(getstoragedata())
  // input field states
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [pubyear, setPubyear] = useState('')
  const clearinput = () => {
    setTitle('')
    setAuthor('')
    setIsbn('')
    setPubyear('')
  }

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(books))
  }, [books]);


  const deletebtn = (id) => {
    let filtered = books.filter((item) => item.isbn !== id)
    setBooks(filtered)

  }

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      isbn,
      pubyear
    }
    setBooks([...books, book])
    clearinput()
  }

  // delete book from LS


  // saving data to local storage

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <form onSubmit={handleSubmit}
            className="form-group"
          >
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required

            ></input>
            <br></br>
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required

            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              type="text"
              className="form-control"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
            ></input>
            <br></br>
            <label>Publsihed year</label>
            <input
              type="text"
              className="form-control"
              required
              value={pubyear}
              onChange={(e) => setPubyear(e.target.value)}

            ></input>
            <br></br>
            <button
              type="submit"
              className="btn btn-success btn-md"
              required
            >
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>

                    <th>Published year</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    books.map((book) =>
                      <Bookrow info={book} key={book.isbn} ondelete={deletebtn} />
                    )
                  }
                </tbody>
              </table>
            </div>
            <button
              className="btn btn-danger btn-md" onClick={() => setBooks([])}
            >
              Remove All
            </button>
          </>

        </div>
      </div>
    </div>
  );
};

export default App;
