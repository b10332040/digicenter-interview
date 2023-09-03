import PropTypes from 'prop-types'
import styles from '/styles/chartCard.module.scss'

const ChartCard = ({ className='', children }) => {
  return (
    <div className={`${className} ${styles['chart-card']}`}>
      { children }
    </div>
  )
}
ChartCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}


const Title = ({ className='', children }) => {
  return (
    <h2 className={`${className} ${styles['chart-card__title']}`}>
      {children}
    </h2>
  )
}
Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}


const AmountLabel = ({ color='blue', className='', children }) => {
  return (
    <h3 className={`${className} ${styles['chart-card__amount-label']} ${styles[color]}`}>
      {children}
    </h3>
  )
}
AmountLabel.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}


const Amount = ({ color='green', className='' , children }) => {
  return (
    <p className={`${className} ${styles['chart-card__amount']} ${styles[color]}`}>
      { children }
    </p>
  )
}
Amount.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}


const Unit = ({ className='', children }) => {
  return (
    <span className={`${className} ${styles['chart-card__unit']}`}>
      { children }
    </span>
  )
}
Unit.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}


ChartCard.Title = Title
ChartCard.AmountLabel = AmountLabel
ChartCard.Amount = Amount
ChartCard.Unit = Unit
export default ChartCard