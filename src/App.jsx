import Creation from "./components/creation/Creation";
import Header from "./components/header/Header";
import Interactive from "./components/interactuve/Interactive";
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
    </>
  );
};

export default App;
