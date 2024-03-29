import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Index from '../pages';
// import Main from '../pages/Main';
import First from '../pages/First';
import Second from '../pages/Second';

function Router() {

    return (
        <div className="wrapper">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    {/* <Route path="/main" element={<Main values={{photo: ""}} />} />s */}
                    <Route path="/first" element={<First />} />
                    <Route path="/second" element={<Second />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default Router;