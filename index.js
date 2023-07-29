const apiUrl = "https://api.adviceslip.com/advice"
const btn = document.getElementById("btn");
let previousAdvice = [];

function fetchRandomQuote(){
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
        const advice = data.slip.advice;
        if (!previousAdvice.includes(advice)) {
        document.querySelector("#advice").innerHTML = advice;
        previousAdvice.push(advice);
  /*       console.log(data.slip.id); */
        } else {
            fetchRandomQuote();
        }
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.log(error);
      });
  }

btn.addEventListener("click", () => {
    fetchRandomQuote();
  });

fetchRandomQuote();
