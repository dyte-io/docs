---
sidebar_position: 3
---

# Design System

- Adaptable 
- Easy to work with
- Clean & focused

## 🌈 Tokens
Set’s the foundations of the interface. These changes are reflected throughout the User Interface

- 🎨 [Color](/ui-kit/design#-color)
- 📝 [Typography](/ui-kit/design#-typography)
- 〰️ [Border](/ui-kit/design#%EF%B8%8F-border)
- 🔔 [Icon Pack](/ui-kit/design#-icon-pack)

### 🎨 Color

Dyte uses a shade based palette to achieve clean interfaces and customizable brand experiences. Please find the color options below.

We have the following segments of colors:

- Brand & Background
- Text on brand & background
- Status Colors (danger, success, warning)
- Video Background

```js
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

### 📝 Typography

`fontFamily` and `googleFont`

You can specify either

A Google Font - which will be loaded automatically for you

A custom font family - which you will need to load on your own.

### 〰️ Border 

We provide a set of tokens for border radius as well as border widths.

These are:

Border Widths: `none` | `thin` | `fat`

Border Radius: `sharp` | `rounded` | `extra-rounded` | `circular`


### 🔔 Icon Pack

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