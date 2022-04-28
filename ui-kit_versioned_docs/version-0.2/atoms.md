---
sidebar_position: 6
---

# Atoms

Inspired by Atomic Design pricinciples, our UI Kit is built in layers. What that means is you can quickly get started by using just one component in single line of code that will give you an entire prebuilt UI.

## Design Tokens

Here are a list of Design Tokens which you can alter in your UI Config:

```tsx
interface DesignTokens {
  spacingBase?: number;
  fontFamily?: string;
  googleFont?: string;
  borderWidth?: BorderWidth;
  borderRadius?: BorderRadius;
  colors?: UIColors;
  logo?: string;
  theme?: Theme;
}
```

### `spacingBase`

You can alter the base of the spacing scale so you can get the right spacing you want. Default is `4px`.

### `fontFamily` and `googleFont`

You can specify either

- A [Google Font](https://fonts.google.com) - which will be loaded automatically for you
- A custom font family - which you will need to load on your own.

### Border

We provide a set of tokens for border radius as well as border widths.

These are:

- Border Widths: 'none', 'thin', 'fat'
- Border Radius: 'sharp', 'rounded', 'extra-rounded', 'circular'

### `logo`

You can specify your custom Logo as well, just pass in a URL of the logo.

By default it will use the Dyte logo.

### `theme`

UI Kit comes with a set of themes to make theming even easier for you with a widely used set of colors ready to use!

These are: `light`, `dark` and `darkest`.

These will only apply the `background` and `text` colors, and you can override them easily with the `colors` property as well!

### Colors

You can specify your own set of colors in the colors property.

These are:

```tsx
UIColors {
  brand: {
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
  };
  background: {
    1000?: string;
    900?: string;
    800?: string;
    700?: string;
    600?: string;
  };
  text: string;
  'video-bg': string;
  danger: string;
  success: string;
  warning: string;
}
```
