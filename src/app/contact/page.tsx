import ContactForm from "@/components/contactForm/ContactForm";
import ContactSidebar from "@/components/contactForm/ContactSideBar";

 

export default function ContactPage() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-12 items-start">
          {/* Left: Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right: Info */}
          <div>
            <ContactSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
