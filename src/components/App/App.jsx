import Product from "../Product/Product";
import BookList from "../BookList/BookList";
import { Alert } from "../Alert/Alert";
import { TfiAgenda } from "react-icons/tfi";
import { useState, useEffect } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");

    if (savedClicks !== 0) {
      return savedClicks;
    }

    return 0;
  });

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);
  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);
  useEffect(() => {
    document.title = `You clicked ${values.z} times`;
  });
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  const [values, setValues] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const updateX = () => {
    setValues({ ...values, x: values.x + 1 });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  const updateZ = () => {
    setValues({
      ...values,
      z: values.z + 1,
    });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const Modal = () => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log(`Interval ${Date.now()}`);
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return <div>Modal</div>;
  };

  return (
    <div>
      <button
        onClick={() =>
          alert("Congratulation! Button works well! You're so cool!")
        }
      >
        Click me!
      </button>

      <ClickCounter value={clicks} onUpdate={handleClick}></ClickCounter>
      <ClickCounter value={clicks} onUpdate={handleClick}></ClickCounter>

      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <Modal />}

      <p>
        x: {values.x}, y: {values.y}, z: {values.z}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
      <button onClick={updateZ}>Update z</button>

      <button
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset
      </button>

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
        <TfiAgenda size="48"></TfiAgenda>
        <h2>Books of the week</h2>
        <BookList books={favouriteBooks} />
      </>
      <>
        <Alert variant="info" elevated>
          {" "}
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="warning" outlined>
          Please update your email!
        </Alert>
        <Alert variant="error" elevated>
          There was an error during transaction!
        </Alert>
        <Alert variant="success" outlined>
          Payment received, thank you for your purchase!
        </Alert>
      </>
    </div>
  );
}
