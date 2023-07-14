import React, {useState, useEffect} from 'react';

function SayFizzOrBuzz() {
  const [listData, setListData] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 1);
      let newItem = '';
      if (number % 3 === 0 && number % 5 === 0) {
        newItem = 'FizzBuzz';
      } else if (number % 3 === 0) {
        newItem = 'Fizz';
      } else if (number % 5 === 0) {
        newItem = 'Buzz';
      } else {
        newItem = number.toString();
      }
      setListData([...listData, newItem]);
    }, 2000);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="App">
      <ul>
        {listData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SayFizzOrBuzz;
