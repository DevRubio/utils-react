import { Button } from "@/components/ui/button";
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button variant="success">success</Button>
      <Button variant="success" capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">       
        <ChevronRightIcon className="w-4 h-4" />
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4"/> Login with email
      </Button>
      <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
    </div>
  );
}