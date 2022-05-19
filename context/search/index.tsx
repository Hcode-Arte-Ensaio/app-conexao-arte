import React, { useState } from "react";

type SearchType = {
    query: string;
}

type PropsSearchContext = {
    state: SearchType;
    setState: React.Dispatch<React.SetStateAction<SearchType>>;

}

const DEFAULT_VALUE = {
    state: {
        query: '',
    },
    setState: () => { },
}


const SearchContext = React.createContext<PropsSearchContext>(DEFAULT_VALUE);

const SearchContextProvider: React.FC =({children}) => {
    const [state, setState] = useState<SearchType>(DEFAULT_VALUE.state);
    return (
    <SearchContext.Provider 
    value={{
        state,
        setState,
    }}>
        {children}
    </SearchContext.Provider>
    );
}

export { SearchContextProvider};
export default SearchContext;