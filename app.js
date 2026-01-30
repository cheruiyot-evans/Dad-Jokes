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

const getRandomJoke = async () => {
  try {
    result.textContent = 'loading...';
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (!response.ok) {
      throw new Error('there was an error');
    }
    const data = await response.json();
    const { id, joke } = data;
    result.textContent = joke;
  } catch (error) {
    console.log(error);
    result.textContent = 'There was an error...';
  }
};

btn.addEventListener('click', () => {
  getRandomJoke();
});

getRandomJoke();
