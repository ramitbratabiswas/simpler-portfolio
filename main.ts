import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  move();
});

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.navbar a');

  links.forEach(link => {
    link.addEventListener('click', function (this: HTMLAnchorElement, event: Event) {
      event.preventDefault();

      const href = this.getAttribute('href');
      if (href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        } else {
          console.error(`Element with id ${targetId} not found.`);
        }
      } else {
        console.error('No href attribute found.');
      }
    });
  });
});


