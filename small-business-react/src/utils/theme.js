// Copies the brand colours from the config into CSS variables on <html>.
// Every stylesheet uses these variables, so changing colours in the config
// re-themes the whole website.

const THEME_VARIABLES = {
  primary: '--color-primary',
  primaryDark: '--color-primary-dark',
  onPrimary: '--color-on-primary',
  ink: '--color-ink',
  surface: '--color-surface',
};

export function applyTheme(theme = {}) {
  const root = document.documentElement;
  Object.entries(THEME_VARIABLES).forEach(([key, cssVar]) => {
    if (theme[key]) root.style.setProperty(cssVar, theme[key]);
  });
}
