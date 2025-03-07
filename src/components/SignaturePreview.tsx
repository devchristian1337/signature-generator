import { useSignature } from "@/hooks/useSignature";
import { Button } from "@/components/ui/button";
import { Copy, Download, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import html2canvas from "html2canvas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import confetti from "canvas-confetti";

export const SignaturePreview = () => {
  const { name, font, color, size, isBold, isItalic, angle, background } =
    useSignature();
  const { toast } = useToast();

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffd426",
      ],
    });
  };

  const copyToClipboard = async (transparent: boolean = false) => {
    const signatureElement = document.getElementById("signature-preview");
    const containerElement = document.getElementById("signature-container");
    if (!signatureElement || !containerElement) return;
    const originalContainerBg = containerElement.style.backgroundColor;
    const originalPreviewBg = signatureElement.style.backgroundColor;
    const originalContainerBorder = containerElement.style.border;
    const originalPreviewBorder = signatureElement.style.border;
    try {
      if (transparent) {
        containerElement.style.backgroundColor = "transparent";
        signatureElement.style.backgroundColor = "transparent";
        containerElement.style.border = "none";
        signatureElement.style.border = "none";
      }
      const canvas = await html2canvas(signatureElement, {
        backgroundColor: transparent
          ? null
          : background.enabled
          ? background.color
          : "#ffffff",
        scale: 4,
        useCORS: true,
        logging: false,
        allowTaint: true,
        imageTimeout: 0,
        removeContainer: true,
      });
      if (transparent) {
        containerElement.style.backgroundColor = originalContainerBg;
        signatureElement.style.backgroundColor = originalPreviewBg;
        containerElement.style.border = originalContainerBorder;
        signatureElement.style.border = originalPreviewBorder;
      }
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);
        toast({
          title: "Success",
          description: "Signature copied to clipboard",
        });
        triggerConfetti();
      });
    } catch (error) {
      if (transparent) {
        containerElement.style.backgroundColor = originalContainerBg;
        signatureElement.style.backgroundColor = originalPreviewBg;
        containerElement.style.border = originalContainerBorder;
        signatureElement.style.border = originalPreviewBorder;
      }
      toast({
        title: "Error",
        description: "Failed to copy signature",
        variant: "destructive",
      });
    }
  };

  const downloadSignature = async (transparent: boolean = false) => {
    const signatureElement = document.getElementById("signature-preview");
    const containerElement = document.getElementById("signature-container");
    if (!signatureElement || !containerElement) return;
    const originalContainerBg = containerElement.style.backgroundColor;
    const originalPreviewBg = signatureElement.style.backgroundColor;
    const originalContainerBorder = containerElement.style.border;
    const originalPreviewBorder = signatureElement.style.border;
    try {
      if (transparent) {
        containerElement.style.backgroundColor = "transparent";
        signatureElement.style.backgroundColor = "transparent";
        containerElement.style.border = "none";
        signatureElement.style.border = "none";
      }
      const canvas = await html2canvas(signatureElement, {
        backgroundColor: transparent
          ? null
          : background.enabled
          ? background.color
          : "#ffffff",
        scale: 4,
        useCORS: true,
        logging: false,
        allowTaint: true,
        imageTimeout: 0,
        removeContainer: true,
      });
      if (transparent) {
        containerElement.style.backgroundColor = originalContainerBg;
        signatureElement.style.backgroundColor = originalPreviewBg;
        containerElement.style.border = originalContainerBorder;
        signatureElement.style.border = originalPreviewBorder;
      }
      const link = document.createElement("a");
      link.download = `signature${transparent ? "-transparent" : ""}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
      toast({
        title: "Success",
        description: "Signature downloaded successfully",
      });
      triggerConfetti();
    } catch (error) {
      if (transparent) {
        containerElement.style.backgroundColor = originalContainerBg;
        signatureElement.style.backgroundColor = originalPreviewBg;
        containerElement.style.border = originalContainerBorder;
        signatureElement.style.border = originalPreviewBorder;
      }
      toast({
        title: "Error",
        description: "Failed to download signature",
        variant: "destructive",
      });
    }
  };

  const shareSignature = async () => {
    try {
      const signatureElement = document.getElementById("signature-preview");
      if (!signatureElement) return;

      const canvas = await html2canvas(signatureElement, {
        backgroundColor: background.enabled ? background.color : "#ffffff",
        scale: 4,
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        if (navigator.share) {
          const file = new File([blob], "signature.png", { type: "image/png" });

          try {
            await navigator.share({
              title: "My Signature",
              text: "Check out my signature created with the Signature Generator!",
              files: [file],
            });

            toast({
              title: "Success",
              description: "Signature shared successfully",
            });
          } catch (error) {
            toast({
              title: "Error",
              description: "Failed to share signature",
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Not Supported",
            description: "Web Share API is not supported in your browser",
            variant: "destructive",
          });
        }
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to prepare signature for sharing",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      id="signature-container"
      className="space-y-6 w-full p-6 bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm animate-fadeIn transition-all hover:shadow-md"
    >
      <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Share2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Preview & Export
          </h2>
        </div>
        {name && (
          <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full font-medium animate-pulse select-none">
            Ready to export
          </span>
        )}
      </div>

      <div
        id="signature-preview"
        className="min-h-[220px] p-8 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 ease-in-out shadow-inner overflow-hidden"
        style={{
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          backgroundColor: background.enabled ? background.color : "#ffffff",
        }}
      >
        <div
          className={`${font.class} text-center relative`}
          style={{
            color,
            fontSize: `${size}px`,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textRendering: "optimizeLegibility",
            transform: `rotate(${angle}deg)`,
            transformOrigin: "center",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div className="select-none">{name || "Your Name"}</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span className="select-none">Export your signature as an image</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 w-full sm:w-auto hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-gray-300 dark:border-gray-700 dark:text-gray-300 select-none"
              >
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[200px] custom-scrollbar dark:bg-gray-800 dark:border-gray-700"
            >
              <DropdownMenuItem
                onClick={() => copyToClipboard(false)}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 select-none"
              >
                Copy with background
              </DropdownMenuItem>
              <DropdownMenuSeparator className="dark:bg-gray-700" />
              <DropdownMenuItem
                onClick={() => copyToClipboard(true)}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 select-none"
              >
                Copy with transparent background
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 w-full sm:w-auto hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-gray-300 dark:border-gray-700 dark:text-gray-300 select-none"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[240px] custom-scrollbar dark:bg-gray-800 dark:border-gray-700"
            >
              <DropdownMenuItem
                onClick={() => downloadSignature(false)}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 select-none"
              >
                Download with background
              </DropdownMenuItem>
              <DropdownMenuSeparator className="dark:bg-gray-700" />
              <DropdownMenuItem
                onClick={() => downloadSignature(true)}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 select-none"
              >
                Download with transparent background
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navigator.share && (
            <Button
              variant="default"
              className="gap-2 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors select-none"
              onClick={shareSignature}
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
