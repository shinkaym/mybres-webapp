document.addEventListener('DOMContentLoaded', function () {
  const ls = [
    'T',
    'h',
    'ể',
    ' ',
    't',
    'h',
    'a',
    'o',
    ' ',
    'k',
    'h',
    'ô',
    'n',
    'g',
    ' ',
    'b',
    'i',
    'ê',
    'n',
    ' ',
    'g',
    'i',
    'ớ',
    'i',
  ];

  const slo = document.querySelector('.intro-slogan span');

  (() => {
    setInterval(() => {
      let c = '';
      ls.forEach((l, i) => {
        setTimeout(() => {
          c = c.slice(0, -1) + l + (i == ls.length - 1 ? '' : '_');
          if (slo) {
            slo.innerHTML = c;
          }
        }, i * 40);
      });
    }, 2000);
  })();
});
