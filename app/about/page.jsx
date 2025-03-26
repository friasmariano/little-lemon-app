import Hero from "../../components/Hero";

export default function AboutPage() {
    return (
        <section>
            <Hero>
                <div style={{ display: 'flex',
                              flexDirection: 'column',
                              margin: '50px 0px 100px 0px'}}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '650'  }}>About</h1>
                    <p style={{ fontSize: '1.3rem' }}>Get to know us</p>
                </div>
            </Hero>
            <div style={{ minHeight: '500px'}}>
                <p style={{ padding: '50px 90px 15px 90px', textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at risus justo. In interdum mattis consectetur. Ut finibus ultrices orci et viverra. Phasellus quam nibh, accumsan vel ultrices ut, eleifend quis lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ac semper justo. Ut pharetra tortor nulla, eu sagittis felis commodo nec. Mauris et augue scelerisque, convallis tortor ac, hendrerit nibh.
                </p>
                <p style={{ padding: '0px 90px 15px 90px', textAlign: 'justify' }}>
                    Aliquam ut arcu mi. Mauris ornare condimentum accumsan. Cras ac tincidunt odio, gravida sagittis augue. Curabitur dictum mauris non urna viverra, tempor rhoncus libero porta. Fusce gravida, purus ut viverra venenatis, felis ligula suscipit urna, in blandit magna neque non ex.
                </p>
            </div>
        </section>
    );
}