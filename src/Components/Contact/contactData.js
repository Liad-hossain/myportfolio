import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Discord from "@iconscout/react-unicons/icons/uil-discord";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Link from "@iconscout/react-unicons/icons/uil-link";
import Contact from "../../img/envelope.png";

export const contactData = {
  logo: Contact,
  title: "Contact",
  description: {
    type: "string",
    value:
      "If you want to hire me or get in touch, feel free to reach out through any of the platforms. I try to reply as soon as possible.",
  },
  email: {
    type: "url",
    title: "liad1809008@gmail.com",
    value: "mailto:liad1809008@gmail.com",
  },
  contacts: [
    {
      type: "url",
      title: "Gmail",
      logo: Email,
      value: "mailto:liad1809008@gmail.com",
    },
    {
      type: "url",
      title: "LinkedIn",
      logo: Linkedin,
      value: "https://www.linkedin.com/in/liad-hossain",
    },
    {
      type: "url",
      title: "GitHub",
      logo: Github,
      value: "https://github.com/Liad-hossain",
    },
    {
      type: "url",
      title: "Facebook",
      logo: Facebook,
      value: "https://www.facebook.com/md.liad.hossain.2024/",
    },
    {
      type: "url",
      title: "Discord",
      logo: Discord,
      value: "https://discord.com/users/liadhossain",
    },
    {
      type: "url",
      title: "LinkTree",
      logo: Link,
      value: "https://linktr.ee/liad_hossain",
    },
  ],
};
