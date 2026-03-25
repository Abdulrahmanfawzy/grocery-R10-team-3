import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, ChevronRight, HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";

const instructions = [
  { q: "How do I track my order?", a: "Go to Order History and click on any order to see real-time tracking." },
  { q: "What is your return policy?", a: "We accept returns within 7 days for non-perishable items in original packaging." },
  { q: "How do I cancel my subscription?", a: "Visit the Subscriptions page and click Cancel on any active subscription." },
  { q: "Do you deliver on weekends?", a: "Yes! We deliver 7 days a week including holidays." },
];

const Support = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
        <p className="text-muted-foreground text-sm mt-1">
          We're here to help with any questions or issues
        </p>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
        <div className="bg-primary rounded-lg p-5 text-primary-foreground">
          <MessageCircle className="w-6 h-6 mb-2 opacity-80" />
          <h3 className="font-semibold">Live Chat</h3>
          <p className="text-sm opacity-70">Chat with our support team</p>
          <p className="text-xs mt-2 text-accent font-medium">
            Available now !
          </p>
        </div>
        <div className="bg-primary rounded-lg p-5 text-primary-foreground">
          <Phone className="w-6 h-6 mb-2 opacity-80" />
          <h3 className="font-semibold">Call Us</h3>
          <p className="text-sm opacity-70">02 2259 4837</p>
          <p className="text-xs mt-2 opacity-60">Mon-Sat 8AM-8PM</p>
        </div>
        <div className="bg-primary rounded-lg p-5 text-primary-foreground">
          <Mail className="w-6 h-6 mb-2 opacity-80" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm opacity-70">help@groceryplus.com</p>
          <p className="text-xs mt-2 opacity-60">24-48 hour response</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-card-foreground" />
          <h2 className="font-semibold text-card-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {instructions.map((inst) => (
            <div key={inst.q} className="bg-muted rounded-lg p-4">
              <p className="text-sm font-semibold text-primary">{inst.q}</p>
              <p className="text-sm text-muted-foreground mt-1">{inst.a}</p>
            </div>
          ))}
        </div>
        <Button className="mt-4">
          View All FAQs <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Report an Issue */}
      <div className="bg-card rounded-lg border border-border p-6 mt-5">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-card-foreground" />
          <h2 className="font-semibold text-card-foreground">
            Report an Issue
          </h2>
        </div>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Issue Type
            </label>
            <Input placeholder="Delivery Issue" />
          </div>
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Order Number (Optional)
            </label>
            <Input placeholder="GP20251126001" />
          </div>
          <div>
            <label className="text-sm font-semibold text-primary mb-1 block">
              Description
            </label>
            <Textarea
              placeholder="Please describe your issue..."
              className="min-h-[100px]"
            />
          </div>
          <Button>Report</Button>
        </div>
      </div>
    </>
  );
};

export default Support;
