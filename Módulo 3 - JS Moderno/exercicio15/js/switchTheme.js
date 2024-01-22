const main = document.querySelector("main");
const root = document.querySelector(":root");

const themeSwitcher = () => {
  const theme = main.dataset.theme;
  if (theme == "dark") {
    main.dataset.theme = "light";
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--border-color", "#212529");
    root.style.setProperty("--primary-color", "#1bb249");
  } else {
    main.dataset.theme = "dark";
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
  }
};

export { themeSwitcher };
