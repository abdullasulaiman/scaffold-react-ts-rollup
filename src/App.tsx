import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { TestComponent } from './components/TestComponent';
// import { action } from './store/feature1/actions';
import './styles/file.scss';
import './styles/index.scss';
// import { sum } from './test';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeLanguage = (i18n: any , lng: string ) => {
    i18n.changeLanguage(lng);
};

export default function App(): JSX.Element {
    // tslint:disable-next-line: no-console
    const { t, i18n } = useTranslation();
    // console.log(`${sum(1, 2)}`);
    return (
        <Suspense fallback={<Loading />}>
        <React.Fragment>
            <TestComponent />
            {/* {action()} */}
            <h3 className="h1">Scaffold Rollup + TypeScript + React</h3>
            <h4>This is the translated string {t('LOGIN')}</h4>
            <button onClick={() => changeLanguage(i18n, 'fr')}>fr</button>
          <button onClick={() => changeLanguage( i18n, 'en')}>en</button>
        </React.Fragment>
        </Suspense>
    );
}

export function Loading(): JSX.Element {
    return (
        <div>Loading</div>
    );
}
