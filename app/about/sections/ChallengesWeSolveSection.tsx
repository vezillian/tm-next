import ChallengesWeSolveCard from '../components/ChallengesWeSolveCard';

export interface Challenge {
    imageSrc: string;
    title: string;
    description: string;
    bgColor: string;
    delay: number;
}

const challenges: Challenge[] = [
    {
        imageSrc: '/images/onlineandoffline.png',
        title: 'Integrated Online and Offline Sales',
        description: 'Prevent stock losses and enhance visibility across all channels, ensuring you never miss a sale.',
        bgColor: 'bg-blue-600',
        delay: 30,
    },
    {
        imageSrc:  '/images/digitalinventory.jpg',
        title: 'Digital Inventory Management',
        description: 'Secure your records for future reference, which is crucial for obtaining affordable credit from banks.',
        bgColor: 'bg-blue-700',
        delay: 40,
    },
    {
        imageSrc:  '/images/streamlined.jpeg',
        title: 'Streamlined Operations',
        description: 'Optimize your departmental processes to boost productivity and reduce operational bottlenecks.',
        bgColor: 'bg-blue-800',
        delay: 50,
    },
    {
        imageSrc:  '/images/geolocation.png',
        title: 'Geolocation Tools',
        description: 'Increase sales volume and profitability through smart, location-based insights that allow you to strategically target your market.',
        bgColor: 'bg-blue-900',
        delay: 60,
    },
    {
        imageSrc:  '/images/realtime.webp',
        title: 'Real-time Data',
        description: 'Make informed decisions with up-to-the-minute insights into your business\'s performance, allowing you to adapt quickly to changing market conditions.',
        bgColor: 'bg-blue-900',
        delay: 60,
    },
    {
        imageSrc:  '/images/compliance.webp',
        title: 'Tax Compliance Monitoring',
        description: 'Stay ahead with automated tax tracking, ensuring you remain compliant and positively contribute to economic growth..',
        bgColor: 'bg-blue-900',
        delay: 60,
    },
];

const ChallengesWeSolveSection: React.FC = () => {

    return (
        <section className="services-area pt-10 bg-blue-900 pb-24" id="solutions">
            <div className="container mx-auto">
                <div className="flex justify-center mb-14">
                    <div className="w-full max-w-2xl">
                        <h2 className="text-white text-center text-3xl font-bold">Challenges we solve</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {challenges.map((challenge, index) => (
                        <ChallengesWeSolveCard
                            key={index} // It's generally better to use a unique identifier if available
                            imageSrc={challenge.imageSrc}
                            title={challenge.title}
                            description={challenge.description}
                            bgColor={challenge.bgColor}
                            delay={challenge.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ChallengesWeSolveSection