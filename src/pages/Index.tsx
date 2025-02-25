import { SignatureEditor } from "@/components/SignatureEditor";
import { SignaturePreview } from "@/components/SignaturePreview";
import { StyleControls } from "@/components/StyleControls";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-gray-50 to-blue-50 flex flex-col items-center">
      <main className="flex-1 w-full px-4 py-12 flex items-center justify-center">
        <div className="max-w-6xl w-full space-y-10">
          <div className="text-center space-y-5 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text leading-relaxed pb-1">
              Signature Generator
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Create a beautiful handwritten signature in minutes. Customize
              your signature with different styles and colors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8 order-2 lg:order-1">
              <SignatureEditor />
              <StyleControls />
            </div>
            <div className="lg:sticky lg:top-8 h-fit order-1 lg:order-2">
              <SignaturePreview />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full text-center text-gray-600 py-8 mt-auto backdrop-blur-sm bg-white/30 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2">
          <span className="select-none">Made by devchristian1337</span>
          <a
            href="https://github.com/devchristian1337"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex hover:text-gray-900 transition-colors"
            aria-label="GitHub profile"
            tabIndex={0}
          >
            <Github size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
