import React from 'react';
import PropTypes from 'prop-types'

const Rating = ({ value, text ,color }) => {
  return (
    <div className='rating'>
      <span>
        <i style={{color}}
          className={
            value > 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  )
}
Rating.defaultProps={
    color:'crimson',
}

Rating.propTypes={
    value:PropTypes.number,
    text:PropTypes.string.isRequired,
    color:PropTypes.string
}
export default Rating
