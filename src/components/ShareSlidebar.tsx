import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { QRCodeSVG } from "qrcode.react";
import { Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const websiteUrl = typeof window !== "undefined" ? window.location.origin : "";
const shareTitle = "Superior Limousine LLC";
const shareText = "Experience premier executive and luxury transportation with Superior Limousine LLC!";

export const ShareSlidebar = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: websiteUrl });
      } catch (error) {
        if ((error as Error).name !== "AbortError") console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(websiteUrl);
      toast({ title: "Link copied!", description: "Website link has been copied to clipboard" });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-60">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="h-12 w-12 rounded-l-xl rounded-r-none bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-80 sm:w-96">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-2xl">Share & Connect</SheetTitle>
          </SheetHeader>

          {/* Share Buttons */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold mb-3">Share Our Services</h3>
            <Button
              onClick={handleWebShare}
              variant="outline"
              className="w-full border-primary/30 hover:bg-primary/10 flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" /> Share
            </Button>
          </div>

          {/* QR Code */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl w-fit mx-auto">
              <QRCodeSVG value={websiteUrl} size={200} level="H" includeMargin />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Scan this QR code to visit Superior Limousine LLC
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShareSlidebar;
