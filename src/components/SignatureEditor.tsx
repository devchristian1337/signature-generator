import { useSignature } from "@/hooks/useSignature";
import { Input } from "@/components/ui/input";
import { fonts } from "@/lib/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PenTool } from "lucide-react";

export const SignatureEditor = () => {
  const { name, setName, font, setFont } = useSignature();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleFontChange = (value: string) => {
    const selectedFont = fonts.find((f) => f.name === value);
    if (selectedFont) setFont(selectedFont);
  };

  return (
    <div className="space-y-6 w-full p-6 bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm animate-fadeIn transition-all hover:shadow-md">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
        <PenTool className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Signature Details
        </h2>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="full-name"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
        >
          Full Name
        </label>
        <Input
          id="full-name"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          className="w-full transition-all border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 dark:bg-gray-800 dark:text-white"
          aria-label="Full name for signature"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 select-none">
          This is how your name will appear in the signature
        </p>
      </div>

      <div className="space-y-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
          Choose Signature Font
        </span>
        <Select
          value={font.name}
          onValueChange={handleFontChange}
          aria-label="Select signature font"
        >
          <SelectTrigger className="w-full transition-all border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 dark:bg-gray-800 dark:text-white">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px] dark:bg-gray-800 dark:border-gray-700">
            {fonts.map((fontOption) => (
              <SelectItem
                key={fontOption.name}
                value={fontOption.name}
                className="flex flex-col items-start py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300 mb-1 font-medium">
                  {fontOption.name}
                </span>
                <span
                  className={`text-base ${fontOption.class}`}
                  style={{
                    textRendering: "optimizeLegibility",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                >
                  {name || "Your Name"}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {fontOption.style}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 select-none">
          Select from a variety of handwriting styles for your personal
          signature
        </p>
      </div>
    </div>
  );
};
