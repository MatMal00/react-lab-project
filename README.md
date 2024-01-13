# emantic Commit Messages

1. feat: (new feature)
2. fix: (bug fix for the user)
3. docs: (changes to the documentation)
4. style: (formatting, missing semi colons, etc;)
5. ref: (refactoring production code, eg. renaming a variable)
6. chore: (updating grunt tasks etc;)

# Wymagania Projektowe

1. Strona logowania
2. Strona z głównym feedem ze zdjęciami - możliwość przeglądania folderów oraz wszystkich zdjęć, możliwość filtrowania po konkretnym userze, możliwość dodawania nowych zdjęć. możliwość usuwania zdjęć ale tylko własnych
3. Strona użytkownika zalogowanego ze wszystkimi danymi, z jego postami, z jego zdjęciami + możliwość edycji danych usera ale tylko zalogowanego
4. wyszukiwarka userów (po name)
5. wyszukiwarka zdjęć (po id zdjęcia oraz albumu)
6. strona z postami - post plus info o userze który go napisał, możliwość usuwania postów ale tylko swoich
7. możliwość wysyłania postów
8. pod każdym postem mają być komentarze do postu oraz możliwość wysyłania komentarzy do postu. możliwość usuwania komentarzy ale tylko swoich


![makeitmeme_4sMqZ](https://github.com/MatMal00/react-lab-project/assets/101005328/fcdbd667-e1a5-40a2-a473-a1ef071882aa)


# React + TypeScript + Vite

# API PROJECT DOCKS: - [@project/json-placeholder-api-docks](https://jsonplaceholder.typicode.com/?fbclid=IwAR0XNdBaY2E1Xdw3N6I5T-8M78I_z-oU_Avykzskb6TDtRpA048dmEJEfLY)


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
