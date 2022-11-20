import React from 'react';
import Title from 'Components/Description';
import Timer from 'Components/Timer';
import GlobalStyleWrapper from "GlobalStyles/GlobalStyleWrapper";

const App = () => {
    return (
        <GlobalStyleWrapper>
            <main className={'main'}>
                <Title/>
                <Timer/>
            </main>
        </GlobalStyleWrapper>
    )
};

export default App;