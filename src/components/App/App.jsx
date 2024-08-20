import Product from "../Product/Product";
import BookList from "../BookList/BookList";
import { Alert } from "../Alert/Alert";
import { TfiAgenda } from "react-icons/tfi";
import { useState, useEffect } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import LoginForm from "../LoginForm/LoginForm";
import SearchBar from "../SearchBar/SearchBar";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import CoffeeSize from "../CoffeeSize/CoffeeSize";
import TermsAccepter from "../TermsAccepter/TermsAccepter";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import ArticleList from "../ArticleList/ArticleList";
import BulletList from "../BulletList";
import { fetchArticlesWithTopic } from "../../articles-api";
import SearchForm from "../SearchForm/SearchForm";

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
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);
  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
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
      <div>
        <h2>Latest articles</h2>
        <SearchForm onSearch={handleSearch} />
        {loading && (
          <>
            <p>Loading data, please wait...</p>
            <BulletList />
          </>
        )}
        {error && (
          <p>
            ❌Whoops, something went wrong! Please try reloading this page!❌
          </p>
        )}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
      <div>
        <div>
          <button
            onClick={() =>
              alert("Congratulation! Button works well! You're so cool!")
            }
          >
            Click me!
          </button>
        </div>
        <div>
          <ClickCounter value={clicks} onUpdate={handleClick}></ClickCounter>
          <ClickCounter value={clicks} onUpdate={handleClick}></ClickCounter>
        </div>
        <div>
          <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
          {isOpen && <Modal />}
        </div>
        <div>
          <p>
            x: {values.x}, y: {values.y}, z: {values.z}
          </p>
          <button onClick={updateX}>Update x</button>
          <button onClick={updateY}>Update y</button>
          <button onClick={updateZ}>Update z</button>
        </div>
        <div>
          <button
            onClick={() => {
              setClicks(0);
              setValues({
                x: 0,
                y: 0,
                z: 0,
              });
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <SearchBar />

      <>
        <p>Selected language: {lang}</p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </>

      <div>
        <h2>Please login to your account!</h2>
        <LoginForm values={formValues} onChange={setFormValues}></LoginForm>
        <TermsAccepter hasAccepted={hasAccepted} onAccept={setHasAccepted} />
      </div>

      <div>
        <h2>Select your coffee size: </h2>
        <CoffeeSize value={coffeeSize} onSelect={setCoffeeSize} />
        <p>
          <b>Selected size:</b> {coffeeSize}
        </p>
      </div>

      <>
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
      </>
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

      <FeedbackForm />
    </div>
  );
}
