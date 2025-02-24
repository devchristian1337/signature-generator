import { Slider } from "@/components/ui/slider";
import { Bold, Italic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSignature } from "@/hooks/useSignature";
import { ColorPicker } from "@/components/ui/color-picker";

export const StyleControls = () => {
  const {
    size,
    color,
    isBold,
    isItalic,
    setSize,
    setColor,
    setIsBold,
    setIsItalic,
  } = useSignature();

  return (
    <div className="space-y-6 p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
      <div className="space-y-2">
        <label className="text-sm font-medium">Size</label>
        <Slider
          value={[size]}
          onValueChange={(value) => setSize(value[0])}
          min={12}
          max={32}
          step={1}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Color</label>
        <ColorPicker
          value={color as `#${string}`}
          onValueChange={(value) => setColor(value.hex)}
        >
          <Button
            variant="outline"
            className="w-full justify-between"
            style={{ color }}
          >
            <span>Pick a color</span>
            <div
              className="h-4 w-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          </Button>
        </ColorPicker>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Text Style</label>
        <div className="flex gap-2">
          <Button
            variant={isBold ? "default" : "outline"}
            size="icon"
            onClick={() => setIsBold(!isBold)}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant={isItalic ? "default" : "outline"}
            size="icon"
            onClick={() => setIsItalic(!isItalic)}
          >
            <Italic className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
