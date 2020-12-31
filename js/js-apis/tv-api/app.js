const form = document.querySelector('#TVSearchForm');
const img_container = document.querySelector('#imgs-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearImages();
  const userSearch = form.elements.query.value;
  const config = { params: {'q': userSearch} };
  const res = await axios.get("http://api.tvmaze.com/search/shows", config);
  getImages(res.data);
  form.elements.query.value = '';
});

const getImages = (shows) => {
 for (let res of shows) {
   if (res.show.image) {
     const img = document.createElement("IMG");
     img.src = res.show.image.medium;
     img_container.append(img);
   }
 }
}

const clearImages = () => {
  while (img_container.hasChildNodes()) {
    img_container.removeChild(img_container.lastChild);
  }
}
