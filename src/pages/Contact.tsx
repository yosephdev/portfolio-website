
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { NewsletterForm } from "@/components/NewsletterForm";
import SEO from "@/components/SEO";

const Contact = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <SEO
                title="Contact - Yoseph Berhane | Full Stack Developer"
                description="Get in touch with Yoseph Berhane for job opportunities, collaborations, or questions about web development projects."
                keywords={["Contact", "Hire", "Full Stack Developer", "Web Development", "Berlin", "Germany"]}
            />
            <Header />

            <main className="flex-1">
                {/* Contact Header */}
                <section className="bg-muted/40 py-12">
                    <div className="container">
                        <div className="mx-auto max-w-[800px] text-center">
                            <h1 className="text-4xl font-bold sm:text-5xl">Contact</h1>
                            <p className="mt-4 text-xl text-muted-foreground">
                                Get in touch with me for collaborations, questions, or just to say hello.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="container py-12">
                    <div className="mx-auto max-w-[1200px] grid gap-8 lg:grid-cols-3">
                        {/* Contact Form - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
                            <p className="text-muted-foreground mb-6">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>
                            <ContactForm />
                        </div>

                        {/* Contact Info - Takes 1 column */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                            <p className="text-muted-foreground mb-6">
                                You can also reach me through these channels:
                            </p>
                            <ContactInfo />
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="bg-muted/40 py-12">
                    <div className="container">
                        <div className="mx-auto max-w-[600px]">
                            <NewsletterForm />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
