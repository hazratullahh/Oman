import { FeatureSteps } from "@/components/ui/WhyChooseSection"

const features = [
    {
        step: 'Step 1',
        title: 'Expertise – Deep knowledge of UAE regulations',
        content: 'Our experienced team ensures your business fully complies with all UAE regulations, minimizing risks and avoiding delays.',
        image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop'
    },
    {
        step: 'Step 2',
        title: 'Efficiency – Fast and hassle-free processing',
        content: 'We provide a streamlined process using advanced tools to deliver fast, hassle-free approvals and keep your projects moving smoothly.',
        image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
    },
    {
        step: 'Step 3',
        title: 'Personalized - Support Dedicated coordinator  for each client',
        content: 'Every client receives a dedicated coordinator who offers personalized guidance and regular updates throughout the entire process.',
        image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
    },
]

export function WhyChooseUS() {
    return (
        <FeatureSteps
            features={features}
            title="Why Choose Us"
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
        />
    )
}