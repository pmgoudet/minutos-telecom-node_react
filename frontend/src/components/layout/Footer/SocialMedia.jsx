import { socialMediaPaths } from "../../../data/SocialMediaPaths";

function SocialMedia() {
  return (
    <div className="text-cinza flex justify-around p-4 md:mx-20 lg:mx-60 ultra:mx-96">
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
