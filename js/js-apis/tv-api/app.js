const form = document.querySelector('#TVSearchForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userSearch = form.elements.query.value;
  const config = { params: {'q': userSearch} };
  const res = await axios.get("http://api.tvmaze.com/search/shows", config);
  getImages(res.data);
  form.elements.query.value = '';
});

const getImages = (shows) => {
 for (let res of shows) {
   console.log(res);
   if (res.show.image) {
     const img = document.createElement("IMG");
     img.src = res.show.image.medium;
     document.body.append(img);
   }
 }
}
