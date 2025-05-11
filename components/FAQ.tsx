import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
	{
   	question:"Why does Kuky ask for a video during sign-up?",
   	answer:
   		`We ask for a short video during sign-up to help keep our community safe, authentic, and free from fake accounts. Every profile is manually reviewed to ensure each member is a real person with genuine intentions — this helps us protect the integrity of our peer-to-peer space.

		That said, we completely understand how being on video — especially on the spot — can feel overwhelming. You're definitely not alone in feeling that way, and we appreciate your courage in showing up. You can record your intro video as many times as you like until you’re happy with it. No pressure, no rush.

		We're also actively exploring additional ways for people to express themselves beyond video while still keeping the same level of trust and connection within the community.

		Your comfort and safety matter to us — thanks for being part of Kuky 💛`
   },
  {
    question: "What is Kuky?",
    answer:
      "Kuky is an AI-powered app that analyzes users' videos to match them with others who share similar interests and hobbies. Our platform allows you to create a unique profile by uploading two videos - one public video introducing yourself to the community, and another private video analyzed solely for matching purposes.",
  },
  {
    question: "How does Kuky analyze my video?",
    answer:
      "Our advanced artificial intelligence algorithms process the visual content, audio, speech patterns, and metadata of your video to identify shared interests, passions, and activities. We do not store or distribute this information beyond its intended use in our secure system.",
  },
  // {
  //     question: "Is it safe to upload my private video to Kuky?",
  //     answer: "Absolutely! Protecting user data and privacy is paramount at Kuky. The analysis of your private video takes place within a highly secured environment using end-to-end encryption. Once processed, only relevant tags and categories associated with your video will be stored without any identifiable information attached."
  // },
  // {
  //     question: "Can I control who sees my private video?",
  //     answer: "Yes, your private video is exclusively used for interest-based matches and remains confidential. Only Kuky has access to this video during the matching process; no other users can view or download your private video."
  // },
  {
    question:
      "Why should I choose Kuky over traditional social media platforms?",
    answer:
      "Kuky focuses on connecting individuals through their genuine interests rather than relying on surface-level connections often found in generic social networks. By emphasizing meaningful interactions between compatible users, we aim to foster deeper relationships built upon trust, authenticity, and shared experiences.",
  },
  {
    question:
      "Will anyone know if I swipe left or right on someone else's profile?",
    answer:
      "No, all actions taken while browsing profiles remain anonymous. Swiping left or right doesn't notify the other person of your decision, allowing you to explore matches freely before making contact.",
  },
  {
    question:
      "Are there any restrictions on the type of content allowed in my videos?",
    answer:
      "To maintain a positive atmosphere for our diverse community, please refrain from sharing explicit, offensive, defamatory, discriminative, or illegal material in either your public or private videos. Violations may result in account suspension or termination.",
  },
  {
    question: "Does Kuky require a subscription fee?",
    answer:
      "Sign up today to get 3 months Free, premium features and subscriptions will become available in the future. Rest assured that we will always provide clear communication regarding pricing changes and offerings.",
  },
  {
    question: "In which countries is Kuky accessible?",
    answer:
      "At present, Kuky serves users worldwide except in regions where local laws prohibit our services. To ensure compliance with regional regulations, certain functionalities or features may vary depending on your location.",
  },
  {
    question:
      "Who developed Kuky, and why should I trust them with my personal data?",
    answer:
      "Kuky was created by experienced developers committed to fostering real human connections online. As part of our core values, we pledge transparency and integrity when handling user data. Additionally, we adhere strictly to industry best practices concerning data protection and follow guidelines established by organizations such as GDPR and CCPA. You can learn more about us here.",
  },
  {
    question:
      "Can I change my Journey on Kuky?",
    answer:
      "Absolutely — life is all about change, and so is your Journey on Kuky. It's completely normal to grow, shift focus, or find yourself in a different headspace. To update your Journey, just head to your profile settings, choose your new Journey, and upload a fresh video. This helps Kuky continue to connect you with the right people who truly understand where you're at now.",
  },
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div>
        <button
          className="flex justify-between items-center w-full text-left p-4 bg-[#F5F5F5] rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-light text-base sm:text-lg text-[#686868] pr-4">
            {item.question}
          </span>
          <span className="text-xl sm:text-2xl text-[#686868] flex-shrink-0">
            {isOpen ? (
              <Image src="arrow-up.svg" alt="arrow up" width={12} height={27} />
            ) : (
              <Image
                src="arrow-down.svg"
                alt="arrow down"
                width={12}
                height={27}
              />
            )}
          </span>
        </button>
        {isOpen && (
          <div className="px-4 pb-4 text-[#686868] mt-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="arrow-indicator.svg"
                  alt="Answer indicator"
                  width={16}
                  height={16}
                />
              </div>
              <div className="text-left text-sm font-light sm:text-base space-y-3">
				  {item.answer.split('\n\n').map((paragraph, i) => (
				    <p key={i}>{paragraph}</p>
				  ))}
				</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto my-8 sm:my-16 sm:px-4 px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-16 text-center text-black">
        FAQ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-3">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
