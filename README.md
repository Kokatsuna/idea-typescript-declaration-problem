# Unable to open a CSS file by clicking on import in IntelliJ IDEA (when there are declaration files for CSS)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Repro Steps
1. Open this project in IDEA
2. Run `npm install`
3. Run `npm run tcm`
4. Open `src/components/App/App.tsx`
5. Try opening the CSS file by clicking on import `import styles from './App.module.css';` or styles.app

### Expected
The file `src/components/App/App.module.css` is opened.

### Actual
The declaration file `src/components/App/App.module.css.d.ts` is opened.