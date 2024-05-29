import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExitIcon, RocketIcon, StarIcon, StopIcon } from "@radix-ui/react-icons";


export default function page() {
  return (
    <div className="grid gap-3">

      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Default!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Destructive!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <StarIcon className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <ExitIcon className="h-4 w-4" />
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

    </div>
  )
}
