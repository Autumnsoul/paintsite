
import Head from 'next/head';

const ExteriorPage = () => {
    return (
        <div>
            <Head>
        <title>Exterior Painting Services</title>
        <meta
            name="description"
            content="Transform your home with our professional exterior painting services. Enhance curb appeal and protect your property."
        />
        {/* Additional meta tags, stylesheets, and scripts can be added here */}
        </Head>

        <section className="hero">
            <h1>Exterior Painting Services</h1>
            <p>Enhance the beauty and protection of your home's exterior.</p>
        </section>

        <section className="services">
            <h2>Our Exterior Painting Services</h2>
            <ul>
            <li>Full exterior painting</li>
            <li>Trim and siding painting</li>
            <li>Deck and fence painting</li>
          {/* Add more services here */}
        </ul>
        </section>

        <section className="contact">
            <h2>Contact Us</h2>
            <p>Ready to transform your home's exterior? Contact us today to schedule a consultation.</p>
            <button>Contact Us</button>
        </section>

      {/* Add other sections and components as needed */}
    </div>
    );
};

export default ExteriorPage;

