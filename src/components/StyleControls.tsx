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
    <div className="space-y-6 p-6 bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm animate-fadeIn transition-all hover:shadow-md">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
        <Settings2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Style Options
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <span className="text-sm">Aa</span>
          </div>
          <label
            htmlFor="size-slider"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
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
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>Small</span>
          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">
            {size}px
          </span>
          <span>Large</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Text Color
          </label>
        </div>
        <ColorPicker
          value={color as `#${string}`}
          onValueChange={handleColorChange}
        >
          <Button
            variant="outline"
            className="w-full justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-gray-300 dark:border-gray-700 dark:text-gray-300"
            aria-label="Choose text color"
          >
            <span>Signature Color</span>
            <div
              className="h-5 w-5 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm"
              style={{ backgroundColor: color }}
            />
          </Button>
        </ColorPicker>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Text Style
          </label>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className={`flex items-center gap-1 ${
              isBold
                ? "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
                : "text-gray-700 border-gray-300 dark:text-gray-300 dark:border-gray-700"
            }`}
            onClick={handleToggleBold}
            aria-label="Toggle bold text"
            aria-pressed={isBold}
          >
            <Bold className="h-4 w-4" />
            <span>Bold</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`flex items-center gap-1 ${
              isItalic
                ? "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
                : "text-gray-700 border-gray-300 dark:text-gray-300 dark:border-gray-700"
            }`}
            onClick={handleToggleItalic}
            aria-label="Toggle italic text"
            aria-pressed={isItalic}
          >
            <Italic className="h-4 w-4" />
            <span>Italic</span>
          </Button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <label
              htmlFor="angle-slider"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Rotation
            </label>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleResetAngle}
            title="Reset rotation"
            aria-label="Reset rotation to default"
            className="h-7 w-7 border-gray-300 dark:border-gray-700 dark:text-gray-300"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div>
          <Slider
            id="angle-slider"
            value={[angle]}
            onValueChange={handleAngleChange}
            min={-45}
            max={45}
            step={1}
            className="w-full"
            aria-label="Adjust signature rotation"
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>-45°</span>
          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full">
            {angle}°
          </span>
          <span>+45°</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <PaintBucket className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Background
          </label>
        </div>
        <div className="flex items-center justify-between px-2 py-2 bg-gray-50 dark:bg-gray-800 rounded-md">
          <Label
            htmlFor="background-toggle"
            className="text-sm text-gray-700 dark:text-gray-300 font-medium cursor-pointer"
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
                className="w-full justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-gray-300 dark:border-gray-700 dark:text-gray-300"
                aria-label="Choose background color"
              >
                <span>Background Color</span>
                <div
                  className="h-5 w-5 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm"
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
