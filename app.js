function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`The element "${selection}" you selected does not exist`);
}

const url = 'https://icanhazdadjoke.com/';

const btn = getElement('.btn');
const result = getElement('.result');
const img = getElement('.img');

const getRandomJoke = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    // const response = await fetch(url);
    const data = await response.json();
    // const { strMeal, strCategory, strInstructions, strMealThumb } =
    //   data.meals[0];
    const { id, joke } = data;
    result.textContent = joke;
    // result.textContent = strInstructions;
    // img.src = strMealThumb;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener('click', () => {
  getRandomJoke(url);
});
