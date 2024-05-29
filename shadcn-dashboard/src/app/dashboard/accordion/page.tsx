import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    Id: "item-1",
    question: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    Id: "item-2",
    question: "Is it styled?",
    content: "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    Id: "item-3",
    question: "Is it animated?",
    content: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    Id: "item-4",
    question: "Is it responsive?",
    content: "Yes. It's responsive by default, but you can disable it if you prefer.",
  }
]
export default function Page() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.Id} value={item.Id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
    </div>
  );
}