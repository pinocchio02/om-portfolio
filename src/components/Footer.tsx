import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Om Ramani. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Built using React & Tailwind CSS <Code className="h-4 w-4 text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
