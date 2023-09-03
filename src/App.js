import './App.css';
import Calendar from "./components/Calendar";

function App() {
  const now = new Date('2023-07-13');

  return (
      <Calendar date={now} />
  );
}

export default App;
