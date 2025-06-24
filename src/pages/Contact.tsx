
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";

const Contact = () => {
    return (
        <div className="flex min-h-screen flex-col">
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
                    <div className="mx-auto max-w-[1000px] grid gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-muted-foreground mb-6">
                                I'm always interested in new opportunities, collaborations, or just having a chat about web development, technology, or anything interesting.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <a href="mailto:contact@yoseph.dev" className="text-primary hover:text-primary/80">
                                        contact@yoseph.dev
                                    </a>
                                </div>

                                <div>
                                    <h3 className="font-medium">Social</h3>
                                    <div className="flex gap-4 mt-2">
                                        <a
                                            href="https://twitter.com/yosephbet"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-primary"
                                        >
                                            Twitter
                                        </a>
                                        <a
                                            href="https://github.com/yosephdev"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-primary"
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/yoseph-berhane"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-primary"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-muted-foreground">Katrineholm, Sweden</p>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="mt-8">
                                <NewsletterForm />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
