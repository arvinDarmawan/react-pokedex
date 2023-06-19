import React, { Suspense, useState } from 'react';
import Evolution from './tabs/Evolution';
import About from './tabs/About';
import Stats from './tabs/Stats';
import Move from './tabs/Move';
import Loader from '../Loader';

const TabsContainer = () => {
    const tabs = [
        { id: 'About', component: <About /> },
        { id: 'Base Stats', component: <Stats /> },
        { id: 'Evolution', component: <Evolution /> },
        { id: 'Moves', component: <Move /> }
    ];

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <>
            <nav>
                {
                    tabs.map(({ id }, index) => (
                        <button
                            key={ id }
                            className={ index === currentTab ? 'active' : null }
                            onClick={ () => setCurrentTab(index) }
                        >
                            { id }
                        </button>
                    ))
                }
            </nav>
            
            <div className='data-container'>
                <Suspense fallback={ <Loader /> }>
                    { tabs[currentTab].component }
                </Suspense>
            </div>
        </>
    );
};

export default TabsContainer;