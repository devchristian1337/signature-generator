
import { useSignature } from "@/hooks/useSignature";
import { Button } from "@/components/ui/button";
import { Copy, Download, ImageOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import html2canvas from "html2canvas";

export const SignaturePreview = () => {
  const { name, font, color, size, isBold, isItalic } = useSignature();
  const { toast } = useToast();

  const copyToClipboard = async () => {
    const signatureElement = document.getElementById("signature-preview");
    if (!signatureElement) return;

    try {
      const canvas = await html2canvas(signatureElement);
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        toast({
          title: "Success",
          description: "Signature copied to clipboard",
        });
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy signature",
        variant: "destructive",
      });
    }
  };

  const downloadSignature = async (transparent: boolean = false) => {
    const signatureElement = document.getElementById("signature-preview");
    if (!signatureElement) return;

    try {
      // Temporarily remove background for transparent download
      if (transparent) {
        signatureElement.style.backgroundColor = 'transparent';
      }

      const canvas = await html2canvas(signatureElement, {
        backgroundColor: transparent ? null : '#ffffff',
      });
      
      // Restore background
      if (transparent) {
        signatureElement.style.backgroundColor = 'white';
      }
      
      const link = document.createElement("a");
      link.download = `signature${transparent ? '-transparent' : ''}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      toast({
        title: "Success",
        description: "Signature downloaded successfully",
      });
    } catch (error) {
      // Restore background in case of error
      if (transparent) {
        const signatureElement = document.getElementById("signature-preview");
        if (signatureElement) {
          signatureElement.style.backgroundColor = 'white';
        }
      }
      toast({
        title: "Error",
        description: "Failed to download signature",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6 w-full p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 animate-fadeIn">
      <div
        id="signature-preview"
        className="min-h-[200px] p-6 bg-white rounded-md border border-gray-200 flex items-center justify-center"
      >
        <div
          className={`${font.class} text-center`}
          style={{
            color,
            fontSize: size,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
          }}
        >
          <div>{name || "Your Name"}</div>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <Button variant="outline" onClick={copyToClipboard} className="gap-2">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
        <Button 
          variant="outline" 
          onClick={() => downloadSignature(true)} 
          className="gap-2"
        >
          <ImageOff className="w-4 h-4" />
          Download Transparent
        </Button>
        <Button onClick={() => downloadSignature(false)} className="gap-2">
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
};
