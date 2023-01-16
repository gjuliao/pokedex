/* eslint-disable no-case-declarations */

export const addCounterNav = (pokemonList) => {
  document.querySelectorAll('.nav-link').forEach((navLink) => {
    const navText = navLink.innerText.toLowerCase();
    switch (navText) {
      case 'all':
        navLink.innerText += ` (${pokemonList.length})`;
        break;
      default:
        const typeCount = pokemonList.filter(
          (pokemon) => pokemon.type === navText,
        ).length;
        navLink.innerText += ` (${typeCount})`;
        break;
    }
  });
};

export const filterByType = (type) => {
  type = type.toLowerCase();
  document.querySelectorAll('.card.m-4').forEach((card) => {
    if (type === 'all') {
      card.style.display = 'block';
    } else if (!card.classList.contains(type)) {
      card.style.display = 'none';
    } else {
      card.style.display = 'block';
    }
  });
};
