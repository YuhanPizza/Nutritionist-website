# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
=======
>>>>>>> 7b11fa8c436ddf1e40c891ab1e327d61aa815cc6
# FlavourOfHealth: A Nutritional Hub
FlavourOfHealth is a full-stack web application designed to provide users with a comprehensive insight into nutrition and healthy cooking. It integrates various features to offer a wholesome experience, including a plethora of recipes, nutrition blogs, booking services, and social media links.

# Front-end:
The front-end of the application is built with React and leverages Bootstrap for styling. It consists of different pages such as Home, About, Recipes, Nutrition, Services, and Book Online. The responsive design provides an intuitive navigation experience with the help of React Router.

# Back-end:
The back-end is developed using Node.js, Express, and MongoDB. It features a Mongoose connection to a MongoDB Atlas cluster, facilitating the storage and retrieval of recipes, including details like the name, image, type, about, and instructions.

# Key Features:

# Recipe Management: 
Users can explore, add, and manage recipes in a card view layout.
# Nutrition Blogs: 
A dedicated section for nutrition articles, enhancing user knowledge on healthy eating.
# Services Overview: 
Details of service offers, prices, and a smooth booking process.
# Social Media Integration: 
Links to Instagram and other platforms for further engagement.


