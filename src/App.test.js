import { render, screen,fireEvent } from '@testing-library/react';
import { BrowserRouter} from "react-router-dom";
import { fetchAPI } from './API';
import { initializeTimes,updateTimes} from './components/Reservation';
import { Reservation } from './components/Reservation';



describe("initialTimes Array", () => {
  it('should return non empty array', () => {
  
    expect(initializeTimes.length).toBeGreaterThan(0);
  });
});
describe("update Reducer", () => {
  it("should return non empty array", () => {
    const date=new Date;
   
     const availableTimes = updateTimes(fetchAPI(date));
     
     expect(availableTimes).toBeInstanceOf(Array);
  });
});

describe("Testing for local storage", () => {
  it("should set and get item from localStorage.", () => {
    const localKey = "Test-TableReservation";
    const localValue = {
      date: "2023-01-21",
      reservation: 156,
      time: "18:00",
    };
    const setLocalItem = (key, value) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    };

    setLocalItem(localKey, localValue);

    expect(localStorage.getItem(localKey)).toEqual(JSON.stringify(localValue));
  });
});
test("should test Guest input validity.", () => {
 const handelsumbit=jest.fn(val=>val>10 || val === 0);
 render(
   <BrowserRouter>
     <Reservation onSubmit={handelsumbit} />
   </BrowserRouter>
 );
  const guestInput = screen.getByPlaceholderText(/Guests/);
  fireEvent.change(guestInput, { target: { val: "11"} });
  expect(handelsumbit(guestInput.value)).toBe(false);

});

