
import { SignatureEditor } from "@/components/SignatureEditor";
import { SignaturePreview } from "@/components/SignaturePreview";
import { StyleControls } from "@/components/StyleControls";
import { FontSelector } from "@/components/FontSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-slideUp">
          <h1 className="text-4xl font-semibold tracking-tight">
            Signature Generator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create a professional email signature in minutes. Customize your
            signature with different fonts, colors, and styles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <SignatureEditor />
            <FontSelector />
            <StyleControls />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <SignaturePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
