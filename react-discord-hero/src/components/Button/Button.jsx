import './Button.css'

const Button = (prop) => {
  const text = prop.text
  const type = prop.type ? "light" : "dark"

  return (
    <button className={`Button btn-${type}`}>{text}</button>
  )
}

export default Button