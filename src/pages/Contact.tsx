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
        title="Contact - Yoseph Berhane Gebremedhin | Full Stack Developer"
        description="I'm open to full-time roles, long-term contracts, and serious collaborations on existing products (e-commerce, SaaS, AI tools). Remote-first, relocation-friendly. Swedish citizen."
        keywords={[
          "Contact",
          "Hire",
          "Full Stack Developer",
          "React Developer",
          "Next.js Developer",
          "Django Developer",
          "Remote Developer",
          "Product Development",
          "E-commerce",
          "SaaS",
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* Contact Header */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Open to Collaboration</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                I'm open to full-time roles, long-term contracts, and serious collaborations on existing products (e-commerce, SaaS, AI tools).
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="container py-12">
          <div className="mx-auto max-w-[1200px] grid gap-8 lg:grid-cols-3">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                For serious inquiries about full-time roles, contract work, or product collaborations, please reach out through the form below.
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
