import { SignatureEditor } from "@/components/SignatureEditor";
import { SignaturePreview } from "@/components/SignaturePreview";
import { StyleControls } from "@/components/StyleControls";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-slideUp">
            <h1 className="text-4xl font-semibold tracking-tight">
              Signature Generator
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create a beautiful handwritten signature in minutes. Customize
              your signature with different styles and colors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <SignatureEditor />
              <StyleControls />
            </div>
            <div className="lg:sticky lg:top-8 h-fit">
              <SignaturePreview />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full text-center text-gray-600 py-8 mt-auto">
        <div className="flex items-center justify-center gap-2">
          <span className="select-none">Made by devchristian1337</span>
          <a
            href="https://github.com/devchristian1337"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex hover:text-gray-900 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
