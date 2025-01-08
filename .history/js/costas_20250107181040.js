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

  document.addEventListener('click', (event) => {
    const isClickInside = Array.from(plusIcons).some(
      (plus) =>
        plus.contains(event.target) ||
        plus.nextElementSibling.contains(event.target)
    );

    if (!isClickInside) {
      // Fecha todos os tooltips
      plusIcons.forEach((plus) => {
        const tooltip = plus.nextElementSibling;
        tooltip.style.display = 'none';
      });
    }
  });
});
