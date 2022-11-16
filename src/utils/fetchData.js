export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2d2b4c13cemsh849e19c602436a4p173206jsn212d91a6b54c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
