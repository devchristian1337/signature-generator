import { SignatureEditor } from "@/components/SignatureEditor";
import { SignaturePreview } from "@/components/SignaturePreview";
import { StyleControls } from "@/components/StyleControls";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BlurFade } from "@/components/ui/blur-fade";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-gray-50 to-blue-50 dark:from-indigo-950 dark:via-gray-950 dark:to-blue-950 flex flex-col items-center">
      <header className="w-full py-4 px-6 flex justify-end">
        <ThemeToggle />
      </header>

      <main className="flex-1 w-full px-4 py-8 flex items-center justify-center">
        <div className="max-w-6xl w-full space-y-10">
          <div className="text-center space-y-5 animate-fadeIn">
            <BlurFade delay={0.2} duration={0.6}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text leading-relaxed pb-1">
                Signature Generator
              </h1>
            </BlurFade>
            <BlurFade delay={0.4} duration={0.6}>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                Create a beautiful handwritten signature in minutes. Customize
                your signature with different styles and colors.
              </p>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8 order-2 lg:order-1">
              <BlurFade delay={0.6} duration={0.7}>
                <SignatureEditor />
              </BlurFade>
              <BlurFade delay={0.8} duration={0.7}>
                <StyleControls />
              </BlurFade>
            </div>
            <div className="lg:sticky lg:top-8 h-fit order-1 lg:order-2">
              <BlurFade delay={0.5} duration={0.7}>
                <SignaturePreview />
              </BlurFade>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full text-center text-gray-600 dark:text-gray-300 py-8 mt-auto backdrop-blur-sm bg-white/30 dark:bg-black/30 border-t border-gray-200 dark:border-gray-800">
        <BlurFade delay={1.0} duration={0.7}>
          <div className="flex items-center justify-center gap-2">
            <span className="select-none">Made by devchristian1337</span>
            <a
              href="https://github.com/devchristian1337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="GitHub profile"
              tabIndex={0}
            >
              <Github size={20} />
            </a>
          </div>
        </BlurFade>
      </footer>
    </div>
  );
};

export default Index;
