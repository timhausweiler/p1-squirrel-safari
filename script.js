try {
  const url = `https://data.cityofnewyork.us/resource/gfqj-f768`;
  const res = await axios.get(url);

  let randomIndex = Math.round(Math.random() * res.data.length);
  let nextStory = res.data[randomIndex];
} catch (error) {
  console.log(error);
}