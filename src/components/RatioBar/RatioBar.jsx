import React from 'react';

function RatioBar(props) {
  const getPercent = () => {
    const { likes, dislikes } = props;
    if (likes === 'Infinity') return 100;
    if (dislikes === 'Infinity') return 0;

    const total = likes + dislikes;
    const percent = (likes / total) * 100;
    return percent;
  };

  return (
    <div className='ratio-bar'>
      <div className={'percent'} style={{ width: getPercent() + '%' }}>
        <span>{props.likes}</span>
      </div>
      <span>{props.dislikes == 0 ? '' : props.dislikes}</span>
    </div>
  );
}

export default RatioBar;
