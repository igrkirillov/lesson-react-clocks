import './App.css'
import {ClockList} from "./components/ClockList";
import {useState} from "react";

export type Clock = {
  name: string,
  timezoneOffset: number
}

function App() {
  const [clocks, setClocks] = useState<Clock[]>([]);
  const addClock = function(clock: Clock) {
    const newClocks: Clock[] = [...clocks];
    newClocks.push(clock);
    setClocks(newClocks);
  }
  const deleteClock = function(clock: Clock) {
    const newClocks: Clock[] = [...clocks];
    const foundIndex = clocks.findIndex((value: Clock) => value.name === clock.name);
    if (foundIndex >= 0) {
      newClocks.splice(foundIndex, 1);
      setClocks(newClocks);
    }
  }

  return (
    <ClockList clocks={clocks} addClock={addClock} deleteClock={deleteClock}></ClockList>
  )
}

export default App
