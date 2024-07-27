import Product from './Product';
import BookList from './BookList';

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product
        name="Tacos With Lemon"
        imgUrl="https://media.istockphoto.com/id/1413248571/photo/two-tacos-with-ground-beef-and-lime-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=bD3wycxcec50b_PKDbuLKxUwYcUDTwy5OGXMsLLr6pg="
        price={12.49}
      />
      <>
        <h2>Books of the week</h2>
        <BookList books={favouriteBooks} />
      </>
    </div>
  );
}

