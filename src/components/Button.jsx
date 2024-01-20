import PropTypes from 'prop-types'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins text-primary text-[18px] outline-none ${styles} font-[500] rounded-xl hover:opacity-70`}>
      Get Started
    </button>
  )
}

Button.propTypes = {
  styles: PropTypes.string
}

export default Button
