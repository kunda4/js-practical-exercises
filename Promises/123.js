async function MyFunction() {
  try {
    let url = "https://jsonplaceholder.typicode.com/todos";
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
}

async function displayData() {
  try {
    const data = await MyFunction();
    const dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.textContent = JSON.stringify(data, null, 2); // Display the data as formatted JSON
  } catch (error) {
    console.error("Error displaying data:", error);
  }
}

// Call the displayData function to fetch and display the data
displayData();
