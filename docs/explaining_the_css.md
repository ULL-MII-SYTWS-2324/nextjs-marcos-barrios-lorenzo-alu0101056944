# Explaining the css

I took a look at the [globals.css](../app/globals.css) file to try and style the app better.

```css
:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}
```

Uses the `:root` pseudo-selector (which is like the html selector but of greated specifity) to define the global variables `--foreground-rgb`, etc.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 30, 30, 30;
    --background-end-rgb: 50, 50, 50;
  }
}
```

The `@media` directive is for specifying css depending on the device. In this case if it is configured to prefer dark colors theme then the previously defined global variables `--foreground-rgb`,etc are substituted with new values.

```css
body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
```

Setup `color` and `background` css properties using the `var(<variable>)` function and a `linear-gradient` function value for the background.
