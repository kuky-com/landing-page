import { useEffect } from "react";

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <iframe
        src="//lightwidget.com/widgets/56e91f3eb2b253a491ca5794bf5865cb.html"
        scrolling="no"
        // allowTransparency={true}
        className="lightwidget-widget w-full"
        style={{
          border: "0",
          overflow: "hidden",
          height: "500px",
        }}
      />
    </div>
  );
};

export default InstagramFeed;
