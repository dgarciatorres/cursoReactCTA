import Array from "./array/Array";
import Calendar from './calendar/Calendar';

function App() {
  const name = "Diego"
  return (
    <>
      <Calendar/>
      <Array />
      <div>Hello {name}</div>
    </>
  );
}

export default App;
