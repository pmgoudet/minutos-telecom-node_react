import { socialMediaPaths } from "../../../data/SocialMediaPaths";

function SocialMedia() {
  return (
    <div className="text-cinza flex justify-around p-4 md:px-20 lg:px-60 ultra:px-96 shadow-[0_-6px_20px_rgba(0,0,0,0.25)]">
      {socialMediaPaths.map((socialMedia, index) => (
        <a
          href={socialMedia.path}
          target="_blank"
          key={index}
          className="flex gap-1 items-center "
        >
          <img
            className="w-4 h-4"
            src={socialMedia.icon}
            alt={socialMedia.title}
          />
          <p className="text-sm">{socialMedia.title}</p>
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
