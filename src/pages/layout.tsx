import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route } from 'react-router-dom';
import HomeContainer from '../modules/home/index';
import SSLContaienr from '../modules/ssl/index';
import './layout.scss';

const changeLanguage = (i18n: any, lng: string) => {
    i18n.changeLanguage(lng);
};

const Layout = (): JSX.Element => {
    const { t, i18n } = useTranslation();
    return (
        <React.Fragment>
            <div className="languagebutton">
                <button onClick={() => changeLanguage(i18n, 'en')}>en</button>
                <button onClick={() => changeLanguage(i18n, 'fr')}>fr</button>
            </div>
            <div className="sidenav">
                <Link to="/home">{t('MENU_TITLE.HOME')}</Link>
                <Link to="/ssl">{t('MENU_TITLE.SSL')}</Link>
                <Link to="/authentication">{t('MENU_TITLE.AUTH_INTERNAL')}</Link>
                <Link to="/nas">{t('MENU_TITLE.NAS_MOUNT')}</Link>
            </div>
            <div className="main">
                <Route path="/home" component={HomeContainer} />
                <Route path="/ssl" component={SSLContaienr} />
            </div>
        </React.Fragment>
    );
};
export default Layout;
