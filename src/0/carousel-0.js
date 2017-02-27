function Carousel0(element) {

  // Cache
  const articles = Array.from(element.getElementsByTagName('article'));
  const buttons = Array.from(element.getElementsByTagName('nav')[0].getElementsByTagName('button'));

  // State
  let current = 0;
  const total = articles.length;

  // Helpers
  const isLast = () => current == total - 1;
  const isFirst = () => current == 0;
  // const getNumber = (string) => parseInt(string.slice('carousel-'.length));
  // const getString = (number) => `carousel-${number}`;

  // Update view
  const updateView = () => {
    // Add 'current' class only to current article
    articles.forEach(a => a.classList.remove('current'));
    articles[current].classList.add('current');

    // Mark the proper button as current
    buttons.forEach(b => b.classList.remove('current'));
    buttons[current].classList.add('current');
  }

  // Actions
  const next = () => {
    if (!isLast()) {
      ++current;
      updateView();
    }
  }

  const prev = () => {
    if (!isFirst()) {
      --current;
      updateView();
    }
  }

  const goto = (n) => {
    current = n;
    updateView();
  }

  // Bindings
  element.querySelectorAll('.navigation.next').forEach(b => b.addEventListener('click', next));
  element.querySelectorAll('.navigation.prev').forEach(b => b.addEventListener('click', prev));
  buttons.forEach((button, i) => button.addEventListener('click', e => goto(i)));

  // Initial actions
  updateView();

}
