
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface GTMJourneyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const GTMJourneyModal = ({
  open,
  onOpenChange,
  title,
  icon,
  description,
}: GTMJourneyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <span>{icon}</span>
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-4 text-base leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GTMJourneyModal;
