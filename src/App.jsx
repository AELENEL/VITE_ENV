const Header = import.meta.Header
const VITE_ID = import.meta.env.VITE_ID;
const vite_AGE = import.meta.env.VITE_AGE;
console.log(VITE_ID);
const App = () => {
  return (
    <>
    app {VITE_ID}
    </>
  );
};

export default App;
