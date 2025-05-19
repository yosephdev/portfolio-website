
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // This would normally use a form submission service like Formspree
      // For now we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border bg-card p-8 shadow-sm">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="mt-2 text-muted-foreground">
        Have a question or want to work together? Send me a message!
      </p>
      
      {isSuccess ? (
        <div className="mt-6 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            Thank you for your message! I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="focus-ring"
            />
          </div>
          <div className="space-y-2">
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="focus-ring"
            />
          </div>
          <div className="space-y-2">
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="focus-ring"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="min-h-[150px] focus-ring"
            />
          </div>
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}
