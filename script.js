try {
  const url = `https://data.cityofnewyork.us/resource/gfqj-f768`;
  const res = await axios.get(url);
  console.log(res);
} catch (error) {
  console.log(error);
}