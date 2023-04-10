import Creation from "./components/creation/Creation";
import Header from "./components/header/Header";
import Interactive from "./components/interactuve/Interactive";
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Interactive />
        <Creation />
      </main>
      <footer className="bg-black w-full">
        <Footer />
      </footer>
    </>
  );
};

export default App;
