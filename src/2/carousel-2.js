function Carousel2(element) {

  // Cache
  const articles = Array.from(element.getElementsByTagName('article'));

  // Initial additional markup
  // <button class="navigation prev"><i class="fa fa-angle-left"></i></button>
  // <button class="navigation next"><i class="fa fa-angle-right"></i></button>
  //
  // <nav>
  //   <form>
  //     <input type="radio" name="carousel" id="carousel-0" value="carousel-0" checked />
  //     <label for="carousel-0"></label>
  //     <input type="radio" name="carousel" id="carousel-1" value="carousel-1" />
  //     <label for="carousel-1"></label>
  //     <input type="radio" name="carousel" id="carousel-2" value="carousel-2" />
  //     <label for="carousel-2"></label>
  //     <input type="radio" name="carousel" id="carousel-3" value="carousel-3" />
  //     <label for="carousel-3"></label>
  //   </form>
  // </nav>
  const buttonNavigationPrevious = document.createElement('button');
  buttonNavigationPrevious.className = 'navigation prev';
  const prevIcon = document.createElement('i');
  prevIcon.className = 'fa fa-angle-left';
  buttonNavigationPrevious.appendChild(prevIcon);

  const buttonNavigationNext = document.createElement('button');
  buttonNavigationNext.className = 'navigation next';
  const nextIcon = document.createElement('i');
  nextIcon.className = 'fa fa-angle-right';
  buttonNavigationNext.appendChild(nextIcon);

  const nav = document.createElement('nav');
  const form = document.createElement('form');
  nav.appendChild(form);
  const formContents = Array(articles.length).fill(null)
    .map((_, index) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', 'carousel');
      input.setAttribute('id', `carousel-${index}`);
      input.setAttribute('value', `carousel-${index}`);
      if (index == 0) input.setAttribute('checked', 'checked');
      const label = document.createElement('label');
      label.setAttribute('for', `carousel-${index}`);
      return [input, label];
    })
    .reduce((acc, curr) => acc.concat(curr), [])
    .forEach(el => {
      form.appendChild(el)
    });
  element.appendChild(buttonNavigationPrevious);
  element.appendChild(buttonNavigationNext);
  element.appendChild(nav);

  // State
  let current = 0;
  const total = articles.length;

  // Helpers
  const isLast = () => current == total - 1;
  const isFirst = () => current == 0;
  const getNumber = (string) => parseInt(string.slice('carousel-'.length));
  const getString = (number) => `carousel-${number}`;

  // Update view
  const updateView = () => {
    // Add 'current' class only to current article
    articles.forEach(a => a.classList.remove('current'));
    articles[current].classList.add('current');

    // Check the proper radio-button
    form.elements['carousel'].value = getString(current);
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
    console.log(current);
    updateView();
  }

  // Bindings
  buttonNavigationNext.addEventListener('click', next);
  buttonNavigationPrevious.addEventListener('click', prev);
  form.addEventListener('change', e => goto(getNumber(e.srcElement.value)));

  // Initial actions
  updateView();

}
