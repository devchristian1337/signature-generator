import { Slider } from "@/components/ui/slider";
import { Bold, Italic, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSignature } from "@/hooks/useSignature";
import { ColorPicker } from "@/components/ui/color-picker";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const StyleControls = () => {
  const {
    size,
    color,
    isBold,
    isItalic,
    angle,
    background,
    setSize,
    setColor,
    setIsBold,
    setIsItalic,
    setAngle,
    setBackgroundColor,
    toggleBackgroundEnabled,
  } = useSignature();

  return (
    <div className="space-y-6 p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
      <div className="space-y-2">
        <label className="text-sm font-medium">Size</label>
        <Slider
          value={[size]}
          onValueChange={(value) => setSize(value[0])}
          min={12}
          max={48}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Small</span>
          <span>{size}px</span>
          <span>Large</span>
        </div>
      </div>

      <Separator />

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
            <span>Text Color</span>
            <div
              className="h-4 w-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          </Button>
        </ColorPicker>
      </div>

      <Separator />

      <div className="space-y-2">
        <label className="text-sm font-medium">Text Style</label>
        <div className="flex gap-2">
          <Button
            variant={isBold ? "default" : "outline"}
            size="icon"
            onClick={() => setIsBold(!isBold)}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant={isItalic ? "default" : "outline"}
            size="icon"
            onClick={() => setIsItalic(!isItalic)}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <label className="text-sm font-medium">Rotation</label>
        <div className="flex items-center gap-4">
          <Slider
            value={[angle]}
            onValueChange={(value) => setAngle(value[0])}
            min={-30}
            max={30}
            step={1}
            className="w-full"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setAngle(0)}
            disabled={angle === 0}
            title="Reset rotation"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>-30°</span>
          <span>{angle}°</span>
          <span>+30°</span>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <label className="text-sm font-medium">Background</label>
        <div className="flex items-center justify-between">
          <Label htmlFor="background-toggle" className="text-sm text-gray-600">
            Enable Background
          </Label>
          <Switch
            id="background-toggle"
            checked={background.enabled}
            onCheckedChange={toggleBackgroundEnabled}
          />
        </div>

        {background.enabled && (
          <ColorPicker
            value={background.color as `#${string}`}
            onValueChange={(value) => setBackgroundColor(value.hex)}
          >
            <Button variant="outline" className="w-full justify-between mt-2">
              <span>Background Color</span>
              <div
                className="h-4 w-4 rounded-full border border-gray-200"
                style={{ backgroundColor: background.color }}
              />
            </Button>
          </ColorPicker>
        )}
      </div>
    </div>
  );
};
