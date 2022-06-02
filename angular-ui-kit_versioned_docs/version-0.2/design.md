---
sidebar_position: 3
---

# Design System

- Adaptable 
- Easy to work with
- Clean & focused


## 🌈 Tokens
Set’s the foundations of the interface. These changes are reflected throughout the User Interface

Use `provideDyteDesignSystem` to change these design tokens

```jsx
import { provideDyteDesignSystem } from '@dytesdk/ui-kit';

provideDyteDesignSystem(document.body, { tokens })
```


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="color"
  values={[
    {label: '🎨 Color', value: 'color'},
    {label: '📝 Typography', value: 'typography'},
    {label: '〰️ Border', value: 'border'},
    {label: '🔔 Icon Pack', value: 'icon'},
  ]}>
  <TabItem value="color">
<br />
Dyte uses a shade based palette to achieve clean interfaces and customizable brand experiences. Please find the color options below.

We have the following segments of colors:

- Brand & Background
- Text on brand & background
- Status Colors (danger, success, warning)
- Video Background

```jsx
provideDyteDesignSystem(document.body, {
  colors: {
      brand: {
          300: '#00FFE1',
          400: '#00FFFF',
          500: '#00E1D4',
          600: '#007B74',
          700: '#00655F'
      },
      background:{
          1000: '#FFFFFF',
          900: '#E6E6E6',
          800: '#DADADD',
          700: '#CDCDD0',
          600: '#C0C0C1'
      },
      text: '#071428',
      "video-bg": "#E5E7EB"
  }
});
```
  
  </TabItem>
  <TabItem value="typography">

<br />

`fontFamily` and `googleFont`

You can specify either

A Google Font - which will be loaded automatically for you

A custom font family - which you will need to load on your own.

</TabItem>
<TabItem value="border">
  
We provide a set of tokens for border radius as well as border widths.

These are:

Border Widths: `none` | `thin` | `fat`

Border Radius: `sharp` | `rounded` | `extra-rounded` | `circular`


</TabItem>
<TabItem value="icon">

:::info Coming Soon

This is currently unavailable

:::

Users can switch between the following sets or add a custom icon set of their own. 

**Pre-made icon sets available:**

- Fluent
    - Line (default)
    - Filled
- Material
    - Rounded
    - OutLine
    - Sharp
    - Solid
    - Duotone
- Font Awesome
    - Thin
- Boxicon
    - Regular
    - Solid  
  
</TabItem>
</Tabs>