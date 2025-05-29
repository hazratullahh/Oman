import { FeatureSteps } from "@/components/ui/WhyChooseSection";

const features = [
  {
    step: "Step 1",
    title: "Expertise – Deep knowledge of Oman regulations",
    content:
      "Our experienced team ensures your business fully complies with all Oman regulations, minimizing risks and avoiding delays.",
    image: "/images/choose/choose-1.jpg",
  },
  {
    step: "Step 2",
    title: "Efficiency – Fast and hassle-free processing",
    content:
      "We provide a streamlined process using advanced tools to deliver fast, hassle-free approvals and keep your projects moving smoothly.",
    image: "/images/choose/choose-2.jpg",
  },
  {
    step: "Step 3",
    title: "Personalized - Support Dedicated coordinator  for each client",
    content:
      "Every client receives a dedicated coordinator who offers personalized guidance and regular updates throughout the entire process.",
    image: "/images/choose/choose-3.jpg",
  },
];

export function WhyChooseUS() {
  return (
    <FeatureSteps
      features={features}
      title="Why Choose Us"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  );
}
