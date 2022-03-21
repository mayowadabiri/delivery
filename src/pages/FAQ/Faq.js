
import { faq } from '../../constants/index'
import FaqItem from '../../components/FaqItem/FaqItem'
import { useState } from "react"

const Faq = () => {
    const [faqs, setFaqs] = useState(faq)



    const handleToggle = (id) => {
        console.log(id)

        const transformedFaq = faqs.map(item => {
            if (item.id === id) {
                item.open = !item.open
            } else item.open = false
            return item
        })
        console.log(transformedFaq)
        setFaqs(transformedFaq)

    }



    return (
        <section id="FAQ" className="section-6">
            <h2>Frequently Asked Question</h2>
            <div className="container_1">
                {faqs.map(item => (
                    <FaqItem
                        question={item.question}
                        answer={item.answer}
                        click={handleToggle}
                        id={item.id}
                        open={item.open}
                    />
                ))}
            </div>
            <div className="more-faq">
                <h4>Still have a questions ?</h4>
                <p>if you cannot find answer to your question in our FAQ, you can always <br /> <a href="#Contact"
                    className="link-contact"> contact us</a>. We will answer to you shortly!</p>
            </div>
        </section>
    )
}
export default Faq