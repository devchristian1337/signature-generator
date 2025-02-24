import { useSignature } from "@/hooks/useSignature";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import html2canvas from "html2canvas";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
export const SignaturePreview = () => {
  const {
    name,
    font,
    color,
    size,
    isBold,
    isItalic
  } = useSignature();
  const {
    toast
  } = useToast();
  const copyToClipboard = async () => {
    const signatureElement = document.getElementById("signature-preview");
    if (!signatureElement) return;
    try {
      const canvas = await html2canvas(signatureElement, {
        scale: 4,
        useCORS: true,
        logging: false,
        backgroundColor: null,
        imageTimeout: 0
      });
      canvas.toBlob(async blob => {
        if (!blob) return;
        await navigator.clipboard.write([new ClipboardItem({
          "image/png": blob
        })]);
        toast({
          title: "Success",
          description: "Signature copied to clipboard"
        });
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy signature",
        variant: "destructive"
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
        containerElement.style.backgroundColor = 'transparent';
        signatureElement.style.backgroundColor = 'transparent';
        containerElement.style.border = 'none';
        signatureElement.style.border = 'none';
      }
      const canvas = await html2canvas(signatureElement, {
        backgroundColor: transparent ? null : '#ffffff',
        scale: 4,
        useCORS: true,
        logging: false,
        allowTaint: true,
        imageTimeout: 0,
        removeContainer: true
      });
      if (transparent) {
        containerElement.style.backgroundColor = originalContainerBg;
        signatureElement.style.backgroundColor = originalPreviewBg;
        containerElement.style.border = originalContainerBorder;
        signatureElement.style.border = originalPreviewBorder;
      }
      const link = document.createElement("a");
      link.download = `signature${transparent ? '-transparent' : ''}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
      toast({
        title: "Success",
        description: "Signature downloaded successfully"
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
        description: "Failed to download signature",
        variant: "destructive"
      });
    }
  };
  return <div id="signature-container" className="space-y-6 w-full p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
      <div id="signature-preview" style={{
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }} className="min-h-[200px] p-6 bg-white rounded-md border border-gray-200 flex items-center justify-center select-none">
        <div className={`${font.class} text-center`} style={{
        color,
        fontSize: `${size}px`,
        fontWeight: isBold ? "bold" : "normal",
        fontStyle: isItalic ? "italic" : "normal",
        textRendering: 'optimizeLegibility'
      }}>
          <div>{name || "Your Name"}</div>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <Button variant="outline" onClick={copyToClipboard} className="gap-2">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem onClick={() => downloadSignature(false)}>
              With Background
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => downloadSignature(true)}>
              Transparent Background
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>;
};