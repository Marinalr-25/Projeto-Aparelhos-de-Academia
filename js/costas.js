document.addEventListener('DOMContentLoaded', function () {
  const plusIcons = document.querySelectorAll('.mais');

  plusIcons.forEach((plus) => {
    plus.addEventListener('click', (event) => {
      event.stopPropagation();
      const tooltip = plus.nextElementSibling;
      tooltip.style.display =
        tooltip.style.display === 'block' ? 'none' : 'block';
      plusIcons.forEach((otherPlus) => {
        if (otherPlus !== plus) {
          const otherTooltip = otherPlus.nextElementSibling;
          otherTooltip.style.display = 'none';
        }
      });
    });
  });
});
