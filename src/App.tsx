import { getRandomInteger } from '@thoughtspot/js-util';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { numberRequestStartAction } from './common/actions';
import Layout from './pages/layout';
import './styles/file.scss';
import './styles/index.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App(): any {
    const dispatch = useDispatch();
    const result = getRandomInteger(1, 20);
    return (
        <Router>
            <div>
                <div style={{ marginLeft: '25%' }}>
                    <button onClick={() => dispatch(numberRequestStartAction())}>Increment counter</button>
                    <br />
                    This is been generated from @thoughtspot node_modules {result}
                </div>
                <div>
                    <Layout />
                </div>
            </div>
        </Router>
    );
}
