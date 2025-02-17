import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex flex-col justify-center items-center border-t border-gray-300 w-full mb-8 lg:mb-16 px-4 sm:px-6 lg:px-8">
      {/* Centered Logo at the top */}
      <Link href="/" passHref>
        <div className="flex justify-center items-start py-4 sm:py-6">
          <Image src="/kuky-logo.svg" alt="Kuky Logo" width={48} height={48} />
        </div>
      </Link>

      {/* Bottom section with social icons on the left and privacy links on the right */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl w-full relative py-4 min-h-[120px]">
        {/* Social Media Icons on the left */}
        <div className="flex space-x-4 items-center mb-4 sm:mb-0">
          {/* Instagram */}
          <Link
            className="flex justify-center"
            href="https://www.instagram.com/kuky_app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>

          {/* Twitter */}
          <Link
            className="flex justify-center"
            href="https://x.com/kuky_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
          </Link>

          {/* Facebook */}
          <Link
            className="flex justify-center"
            href="https://facebook.com/kukyapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
          </Link>

          {/* WhatsApp */}
          <Link
            className="flex justify-center"
            href="https://wa.me/610491711556"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </Link>

          {/* Tiktok */}
          <Link
            className="flex justify-center"
            href="https://www.tiktok.com/@kuky_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tiktok"
          >
            <Image src="/tiktok.svg" alt="Tiktok" width={24} height={24} />
          </Link>

          {/* YouTube */}
          <Link
            className="flex justify-center"
            href="https://www.youtube.com/@kuky_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Image src="/youtube.svg" alt="Youtube" width={24} height={24} />
          </Link>
        </div>

        {/* About Us, Terms & Conditions, Privacy Policy on the right */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center text-sm">
          <Link href="/">
            <div className="font-lato text-center text-[#333333] text-sm sm:text-md">
              Contact Us
            </div>
          </Link>
          <Link href="/terms-and-service">
            <div className="font-lato text-center text-[#333333] text-sm sm:text-md">
              Terms & Conditions
            </div>
          </Link>
          <Link href="/privacy-policy">
            <div className="font-lato text-center text-[#333333] text-sm sm:text-md">
              Privacy Policy
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
