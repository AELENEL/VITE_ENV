const VITE_ID = import.meta.env.VITE_ID
const vite_AGE = import.meta.env.VITE_AGE
console.log(VITE_ID);
const App = () => {
  return <div>App
    {vite_AGE}
  </div>;
};

export default App;
