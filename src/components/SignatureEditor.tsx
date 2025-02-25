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

export const SignatureEditor = () => {
  const { name, setName, font, setFont } = useSignature();

  return (
    <div className="space-y-6 w-full p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
      <div className="space-y-2">
        <label className="text-sm font-medium">Full Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <span className="text-sm font-medium">Choose Signature Font</span>
        <Select
          value={font.name}
          onValueChange={(value) => {
            const selectedFont = fonts.find((f) => f.name === value);
            if (selectedFont) setFont(selectedFont);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((fontOption) => (
              <SelectItem
                key={fontOption.name}
                value={fontOption.name}
                className="flex flex-col items-start py-3"
              >
                <span className="text-sm text-gray-600 mb-1">
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
                <span className="text-xs text-gray-400 mt-1">
                  {fontOption.style}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-gray-500 mt-1">
          Select from a variety of handwriting styles for your personal
          signature
        </p>
      </div>
    </div>
  );
};
