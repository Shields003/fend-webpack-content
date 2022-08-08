const evaluateButton = document.getElementById("evaluateButton");
evaluateButton.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const url = "http://localhost:8080/test";
  fetchMeaningCloud(url, input);
});

export { evaluateButton };
