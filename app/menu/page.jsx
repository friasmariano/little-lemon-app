import Hero from "../../components/Hero";
import Card from "../../components/Card";

export default function MenuPage() {
    return (
        <section>
            <Hero>
                <div style={{ display: 'flex',
                              flexDirection: 'column',
                              margin: '50px 0px 100px 0px'}}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '650'  }}>Menu</h1>
                    <p style={{ fontSize: '1.3rem' }}>Discover our exquisities</p>
                </div>
            </Hero>

            <div style={{ minHeight: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Card
                    image = {{ src: '/Greek_salad.jpg', width: 250, height: 250, alt: 'Greek Salad' }}
                    header = {{ title: 'Greek Salad', details: '$ 12.99'}}
                    description = { 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
                    callToAction = {{ text: 'Order a Delivery' }}
                />

                <Card
                    image = {{ src: '/Brushetta.jpg', width: 250, height: 250, alt: 'Greek Salad' }}
                    header = {{ title: 'Brushetta', details: '$ 5.99'}}
                    description = { 'Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt, topped with fresh, diced tomatoes.'}
                    callToAction = {{ text: 'Order a Delivery' }}
                />

                <Card
                    image = {{ src: '/Lemon_dessert.jpg', width: 250, height: 250, alt: 'Greek Salad' }}
                    header = {{ title: 'Lemon Dessert', details: '$ 5.00'}}
                    description = { 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
                    callToAction = {{ text: 'Order a Delivery' }}
                />

                <Card
                    image = {{ src: '/Pasta.jpg', width: 300, height: 300, alt: 'Greek Salad' }}
                    header = {{ title: 'Pasta', details: '$ 10.00'}}
                    description = { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper, turpis vitae accumsan semper, felis turpis molestie purus.'}
                    callToAction = {{ text: 'Order a Delivery' }}
                />
            </div>
        </section>
    );
}