import React from 'react';
//import css style for component here;

const seasonConfig = {
    summer: {
        text: 'Hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Its chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
       return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`massive ${iconName} icon icon-left`} />
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon icon-right`} />
        </div>
    )
};
export default SeasonDisplay;