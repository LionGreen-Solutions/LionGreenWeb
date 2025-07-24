
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-sunbeam-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-8">Subscribe to our newsletter for exclusive offers, new product releases, and solar power tips.</p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
            <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates from StepG.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
