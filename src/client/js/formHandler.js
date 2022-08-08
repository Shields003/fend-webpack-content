import urlChecker from "./urlChecker";

const newUrl = require("valid-url");

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (newUrl.isUri(formText)) {
    console.log("::: Form Submitted :::");
    fetch("http://localhost:8080/test")
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById("results").innerHTML =
          res.message || "No message found";
      });
  }
}






// const url = "User Input";
// if (urlChecker(url)) {
//    post(url)

// const fetchMeaningCloud = async (url, input) => {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       input: input,
//     }),
//   });
//   try {
//     const response = await res.json();
//     if (response.status.code === 200) {
//       document.getElementById("polarity").innerHTML =
//         response.polarity.polarity;
//       document.getElementById("polarity_confidence").innerHTML =
//         response.polarity.polarity_confidence;
//       document.getElementById("subjectivity").innerHTML =
//         response.subjectivity.subjectivity;
//       document.getElementById("subjectivity_confidence").innerHTML =
//         response.subjectivity.subjectivity_confidence;
//     }
//   } catch (error) {
//     document.getElementById("error").innerHTML =
//       "There was an error processing your request.";
//   }
// };
// }

export { handleSubmit };
