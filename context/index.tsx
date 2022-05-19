import React from 'react';

import { SearchContextProvider} from './search/';

const GlobalContext: React.FC = ({ children }) => {
    return <SearchContextProvider>{children}</SearchContextProvider>;
}


export default GlobalContext;