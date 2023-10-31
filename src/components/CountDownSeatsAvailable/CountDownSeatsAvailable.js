import { useEffect, useState } from "react";
import axios from "axios";


export default function CountDownSeatsAvailable(props) {
  const [availableSeats, setAvailableSeats] = useState(0);
  const [seatsAvailableSpreadsheet, setSeatsAvailableSpreadsheet] = useState({
    available_seats: availableSeats,
    course: "dr_website",
  });
console.log("available",availableSeats)
 

     // get seats available data
     const getSpreadsheetData = async () => {
        const data = await axios
          .get(
            "https://sheets.googleapis.com/v4/spreadsheets/1vqQV0yL8rwu-e39ojozM_a-p8pK7TkXywKWNFNDJQFM/values/Sheet1!A:B?key=AIzaSyDsQjN6ylfWYT6grTD2KCfq27fOcuPx-tE"
          )
          .then((response) => {
            const convertIntoObject = Object.fromEntries(
              response.data.values[0].map((key, index) => [
                key,
                isNaN(response.data.values[1][index])
                  ? response.data.values[1][index]
                  : parseInt(response.data.values[1][index]),
              ])
            );
            setAvailableSeats(convertIntoObject?.available_seats);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        return data;
      };
    
      useEffect(() => {
        getSpreadsheetData();
      }, []);
  
    // --- CountDown forAvailable Seats ---//
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (availableSeats > 0) {
    //       setAvailableSeats(availableSeats - 1);
    //       // setSeatsAvailableSpreadsheet((prev) => {
    //       //   return { ...prev, available_seats: availableSeats - 1 };
    //       // });
    //     }
    //   },  2 * 60 * 60 * 1000); // 2 hours in milliseconds
  
    //   return () => {
    //     clearInterval(interval);
    //   };
    // }, [availableSeats]);
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function flipAllCards(availableSeats) {
    const hundreds = Math.floor(availableSeats / 100);
    const remaining = availableSeats % 100;
    const tens = Math.floor(remaining / 10);
    const ones = remaining % 10;

    flip(document.querySelector("[data-hours-tens]"), hundreds);
    flip(document.querySelector("[data-hours-ones]"), tens);
    flip(document.querySelector("[data-minutes-tens]"), ones);
  }

  function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top");
    const startNumber = parseInt(topHalf.textContent);
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    topFlip.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
  }

  return (
    <div className="container d-flex gap-2">
         {availableSeats
                          .toString()
                          .padStart(3, "0")
                          .split("")
                          .map((digit, index) => (
                            <div key={index} className={" count-card border border-dark rounded border-w-48px h-80px "}>
                              <div className="line"></div>
                              <div className={"count-text   w-100 d-flex justify-content-center align-items-center"}>{digit}</div>
                            </div>
                          ))}
   
    </div>
  );
}
