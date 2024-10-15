import axios from "axios";

async function fetchData() {
  const response = await axios.get(
    "https://coderbyte.com/api/challenges/json/wizard-list"
  );
  //console.log(response.data);

  function sortKeys(obj) {
    if (Array.isArray(obj)) {
      return obj.map(sortKeys);
    } else if (obj !== null && typeof obj === "object") {
      return Object.keys(obj)
        .sort()
        .reduce((sortedObj, key) => {
          sortedObj[key] = sortKeys(obj[key]);
          return sortedObj;
        }, {});
      //console.log(sorted)
    }
    return obj;
  }

  const data = sortKeys(response.data);
  console.log(data[0].friends);
}

fetchData();
