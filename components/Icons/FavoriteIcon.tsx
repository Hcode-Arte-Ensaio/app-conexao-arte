import React from 'react';
import Svg, { Path } from 'react-native-svg';

const FavoriteIcon = ({ width = "14", height = "14" }: {
    width?: string;
    height?: string;
}) => {

    return (
        <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
            <Path d="M6 10.675L5.275 10.015C2.7 7.68 1 6.14 1 4.25C1 2.71 2.21 1.5 3.75 1.5C4.62 1.5 5.455 1.905 6 2.545C6.545 1.905 7.38 1.5 8.25 1.5C9.79 1.5 11 2.71 11 4.25C11 6.14 9.3 7.68 6.725 10.02L6 10.675Z" fill="#6C6C6C"/>
        </Svg>
    )

}

export default FavoriteIcon;