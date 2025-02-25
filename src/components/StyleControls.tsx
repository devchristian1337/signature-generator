import { Slider } from "@/components/ui/slider";
import {
  Bold,
  Italic,
  RotateCcw,
  Settings2,
  Palette,
  PaintBucket,
} from "lucide-react";
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

  const handleSizeChange = (value: number[]) => setSize(value[0]);
  const handleAngleChange = (value: number[]) => setAngle(value[0]);
  const handleColorChange = (value: { hex: string }) => setColor(value.hex);
  const handleBackgroundColorChange = (value: { hex: string }) =>
    setBackgroundColor(value.hex);
  const handleToggleBold = () => setIsBold(!isBold);
  const handleToggleItalic = () => setIsItalic(!isItalic);
  const handleResetAngle = () => setAngle(0);

  return (
    <div className="space-y-6 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm animate-fadeIn transition-all hover:shadow-md">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
        <Settings2 className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-medium text-gray-800">Style Options</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-indigo-600">
            <span className="text-sm">Aa</span>
          </div>
          <label
            htmlFor="size-slider"
            className="text-sm font-medium text-gray-700"
          >
            Size
          </label>
        </div>
        <Slider
          id="size-slider"
          value={[size]}
          onValueChange={handleSizeChange}
          min={12}
          max={72}
          step={1}
          className="w-full"
          aria-label="Adjust signature size"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Small</span>
          <span className="px-2 py-0.5 bg-gray-100 rounded-full">{size}px</span>
          <span>Large</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4 text-indigo-600" />
          <label className="text-sm font-medium text-gray-700">
            Text Color
          </label>
        </div>
        <ColorPicker
          value={color as `#${string}`}
          onValueChange={handleColorChange}
        >
          <Button
            variant="outline"
            className="w-full justify-between hover:bg-gray-50 transition-colors border-gray-300"
            style={{ color }}
            aria-label="Choose text color"
          >
            <span>Text Color</span>
            <div
              className="h-5 w-5 rounded-full border border-gray-200 shadow-sm"
              style={{ backgroundColor: color }}
            />
          </Button>
        </ColorPicker>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-indigo-600 font-serif italic text-sm">A</span>
          <label className="text-sm font-medium text-gray-700">
            Text Style
          </label>
        </div>
        <div className="flex gap-2">
          <Button
            variant={isBold ? "default" : "outline"}
            size="icon"
            onClick={handleToggleBold}
            title="Bold"
            className={
              isBold
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "hover:bg-gray-50 border-gray-300"
            }
            aria-label="Toggle bold text"
            aria-pressed={isBold}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant={isItalic ? "default" : "outline"}
            size="icon"
            onClick={handleToggleItalic}
            title="Italic"
            className={
              isItalic
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "hover:bg-gray-50 border-gray-300"
            }
            aria-label="Toggle italic text"
            aria-pressed={isItalic}
          >
            <Italic className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4 text-indigo-600" />
          <label
            htmlFor="rotation-slider"
            className="text-sm font-medium text-gray-700"
          >
            Rotation
          </label>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 space-y-2">
            <Slider
              id="rotation-slider"
              value={[angle]}
              onValueChange={handleAngleChange}
              min={-45}
              max={45}
              step={1}
              className="w-full"
              aria-label="Adjust signature rotation"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>-45°</span>
              <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                {angle}°
              </span>
              <span>+45°</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleResetAngle}
            disabled={angle === 0}
            title="Reset rotation"
            className="hover:bg-gray-50 border-gray-300 transition-all self-start mt-1"
            aria-label="Reset rotation to zero degrees"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <PaintBucket className="h-4 w-4 text-indigo-600" />
          <label className="text-sm font-medium text-gray-700">
            Background
          </label>
        </div>
        <div className="flex items-center justify-between px-2 py-2 bg-gray-50 rounded-md">
          <Label
            htmlFor="background-toggle"
            className="text-sm text-gray-700 font-medium cursor-pointer"
          >
            Enable Background
          </Label>
          <Switch
            id="background-toggle"
            checked={background.enabled}
            onCheckedChange={toggleBackgroundEnabled}
            className="data-[state=checked]:bg-indigo-600"
            aria-label="Toggle signature background"
          />
        </div>

        {background.enabled && (
          <div className="pt-2 animate-fadeIn">
            <ColorPicker
              value={background.color as `#${string}`}
              onValueChange={handleBackgroundColorChange}
            >
              <Button
                variant="outline"
                className="w-full justify-between hover:bg-gray-50 transition-colors border-gray-300"
                aria-label="Choose background color"
              >
                <span>Background Color</span>
                <div
                  className="h-5 w-5 rounded-full border border-gray-200 shadow-sm"
                  style={{ backgroundColor: background.color }}
                />
              </Button>
            </ColorPicker>
          </div>
        )}
      </div>
    </div>
  );
};
