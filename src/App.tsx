import * as React from 'react';
// import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
// import { TestComponent } from './components/TestComponent';
import Layout from './pages/layout';
// import { action } from './store/feature1/actions';
import './styles/file.scss';
import './styles/index.scss';
// import { sum } from './test';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const changeLanguage = (i18n: any, lng: string) => {
//     i18n.changeLanguage(lng);
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App(): any {
    // tslint:disable-next-line: no-console
    // const { t, i18n } = useTranslation();
    // console.log(`${sum(1, 2)}`);
    return (
        <Router>
            <Layout />
        </Router>
    );
}