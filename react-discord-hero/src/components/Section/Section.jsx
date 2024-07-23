import Button from '../Button/Button'
import './Section.css'

const Section = (props) => {
  const { title, paragraph } = props.texts
  console.log(props)
  return (
    <section className="Section">
      <div class="container">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <Button text={"Download for Mac"} type={true} />
        <Button text={"Open Discord in your browser"} type={false} />
      </div>
    </section>
  )
}

export default Section