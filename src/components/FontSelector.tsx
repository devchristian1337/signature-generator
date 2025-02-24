
import { fonts } from "@/lib/fonts";
import { useSignature } from "@/hooks/useSignature";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FontSelector = () => {
  const { font, setFont } = useSignature();

  return (
    <div className="w-full p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
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
          {fonts.map((font) => (
            <SelectItem
              key={font.name}
              value={font.name}
              className={font.class}
            >
              <span className="text-lg">{font.name}</span>
              <span className="text-sm text-gray-500 ml-2">
                ({font.style})
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
