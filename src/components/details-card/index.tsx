import { Fragment } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { CgDribbble } from 'react-icons/cg';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaLinkedin,
  FaMastodon,
  FaReddit,
  FaStackOverflow,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { RiDiscordFill, RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { SiResearchgate, SiX, SiUdemy, SiGitlab, SiLeetcode } from 'react-icons/si';
import { Profile } from '../../interfaces/profile';
import {
  SanitizedGithub,
  SanitizedSocial,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

type Props = {
  profile: Profile | null;
  loading: boolean;
  social: SanitizedSocial;
  github: SanitizedGithub;
};

const isCompanyMention = (company: string): boolean => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company: string): string => {
  return `https://github.com/${company.substring(1)}`;
};

const getFormattedMastodonValue = (
  mastodonValue: string,
  isLink: boolean,
): string => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  link?: string;
  skeleton?: boolean;
}> = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <div className="flex justify-start py-1 px-1 items-center">
      <div className="grow font-medium gap-2 flex items-center my-0.5">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? 'grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex justify-start py-1 px-1 items-center"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

const ClickableTitleItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  link?: string;
}> = ({ icon, title, link }) => {
  return (
    <div className="flex flex-col items-center p-1.5 text-center">
      <div className="mb-1">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <div className="text-xl">{icon}</div>
            <span className="text-xs font-medium">{title}</span>
          </a>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <div className="text-xl">{icon}</div>
            <span className="text-xs font-medium">{title}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const OrganizationItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode | string;
  link?: string;
  skeleton?: boolean;
}> = ({ icon, title, value, link, skeleton = false }) => {
  const renderValue = () => {
    if (typeof value === 'string') {
      return value.split(' ').map((company) => {
        company = company.trim();
        if (!company) return null;

        if (isCompanyMention(company)) {
          return (
            <a
              href={companyLink(company)}
              target="_blank"
              rel="noreferrer"
              key={company}
            >
              {company}
            </a>
          );
        } else {
          return <span key={company}>{company}</span>;
        }
      });
    }
    return value;
  };

  return (
    <div className="flex justify-start py-1 px-1 items-center">
      <div className="grow font-medium gap-2 flex items-center my-0.5">
        {icon} {title}
      </div>
      <div
        className={`${
          skeleton ? 'grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 space-x-2 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {renderValue()}
      </div>
    </div>
  );
};

/**
 * Renders the details card component.
 * 
 * Note: Make sure to add 'gitlab' and 'leetcode' to your SanitizedSocial interface:
 * - gitlab: string; // GitLab username
 * - leetcode: string; // LeetCode username
 *
 * @param {Object} profile - The profile object.
 * @param {boolean} loading - Indicates whether the data is loading.
 * @param {Object} social - The social object.
 * @param {Object} github - The GitHub object.
 * @return {JSX.Element} The details card component.
 */
const DetailsCard = ({ profile, loading, social, github }: Props) => {
  
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ widthCls: 'w-4', heightCls: 'h-4' })}
          title={skeleton({ widthCls: 'w-24', heightCls: 'h-4' })}
          value={skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="text-base-content">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.company && (
                <OrganizationItem
                  icon={<FaBuilding />}
                  title="Student at:"
                  value={profile.company}
                  link={
                    isCompanyMention(profile.company.trim())
                      ? companyLink(profile.company.trim())
                      : undefined
                  }
                />
              )}
              
              {/* Location and Contact Information - Moved before Social */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3">Information</h3>
                <ListItem
                  icon={<MdLocationOn />}
                  title="Based in:"
                  value="Thessaloniki, Greece"
                />
                {social?.email && (
                  <ListItem
                    icon={<RiMailFill />}
                    title="Email:"
                    value={social.email}
                    link={`mailto:${social.email}`}
                  />
                )}
                {social?.phone && (
                  <ListItem
                    icon={<RiPhoneFill />}
                    title="Phone:"
                    value={social.phone}
                    link={`tel:${social.phone}`}
                  />
                )}
              </div>
              
              {/* Social Media Grid */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3">Social</h3>
                <div className="grid grid-cols-4 gap-1">
                  <ClickableTitleItem
                    icon={<AiFillGithub />}
                    title="GitHub"
                    link={`https://github.com/${github.username}`}
                  />
                  {social?.gitlab && social.gitlab.trim() && (
                    <ClickableTitleItem
                      icon={<SiGitlab />}
                      title="GitLab"
                      link={`https://gitlab.com/${social.gitlab}`}
                    />
                  )}
                  {social?.leetcode && social.leetcode.trim() && (
                    <ClickableTitleItem
                      icon={<SiLeetcode />}
                      title="LeetCode"
                      link={`https://leetcode.com/${social.leetcode}`}
                    />
                  )}
                  {social?.researchGate && (
                    <ClickableTitleItem
                      icon={<SiResearchgate />}
                      title="ResearchGate"
                      link={`https://www.researchgate.net/profile/${social.researchGate}`}
                    />
                  )}
                  {social?.x && (
                    <ClickableTitleItem
                      icon={<SiX />}
                      title="X"
                      link={`https://x.com/${social.x}`}
                    />
                  )}
                  {social?.mastodon && (
                    <ClickableTitleItem
                      icon={<FaMastodon />}
                      title="Mastodon"
                      link={getFormattedMastodonValue(social.mastodon, true)}
                    />
                  )}
                  {social?.linkedin && (
                    <ClickableTitleItem
                      icon={<FaLinkedin />}
                      title="LinkedIn"
                      link={`https://www.linkedin.com/in/${social.linkedin}`}
                    />
                  )}
                  {social?.dribbble && (
                    <ClickableTitleItem
                      icon={<CgDribbble />}
                      title="Dribbble"
                      link={`https://dribbble.com/${social.dribbble}`}
                    />
                  )}
                  {social?.behance && (
                    <ClickableTitleItem
                      icon={<FaBehanceSquare />}
                      title="Behance"
                      link={`https://www.behance.net/${social.behance}`}
                    />
                  )}
                  {social?.facebook && (
                    <ClickableTitleItem
                      icon={<FaFacebook />}
                      title="Facebook"
                      link={`https://www.facebook.com/${social.facebook}`}
                    />
                  )}
                  {social?.instagram && (
                    <ClickableTitleItem
                      icon={<AiFillInstagram />}
                      title="Instagram"
                      link={`https://www.instagram.com/${social.instagram}`}
                    />
                  )}
                  {social?.reddit && (
                    <ClickableTitleItem
                      icon={<FaReddit />}
                      title="Reddit"
                      link={`https://www.reddit.com/user/${social.reddit}`}
                    />
                  )}
                  {social?.threads && (
                    <ClickableTitleItem
                      icon={<FaSquareThreads />}
                      title="Threads"
                      link={`https://www.threads.net/@${social.threads.replace('@', '')}`}
                    />
                  )}
                  {social?.youtube && (
                    <ClickableTitleItem
                      icon={<FaYoutube />}
                      title="YouTube"
                      link={`https://www.youtube.com/@${social.youtube}`}
                    />
                  )}
                  {social?.udemy && (
                    <ClickableTitleItem
                      icon={<SiUdemy />}
                      title="Udemy"
                      link={`https://www.udemy.com/user/${social.udemy}`}
                    />
                  )}
                  {social?.medium && (
                    <ClickableTitleItem
                      icon={<AiFillMediumSquare />}
                      title="Medium"
                      link={`https://medium.com/@${social.medium}`}
                    />
                  )}
                  {social?.dev && (
                    <ClickableTitleItem
                      icon={<FaDev />}
                      title="Dev"
                      link={`https://dev.to/${social.dev}`}
                    />
                  )}
                  {social?.stackoverflow && (
                    <ClickableTitleItem
                      icon={<FaStackOverflow />}
                      title="Stack Overflow"
                      link={`https://stackoverflow.com/users/${social.stackoverflow}`}
                    />
                  )}
                  {social?.website && (
                    <ClickableTitleItem
                      icon={<FaGlobe />}
                      title="Website"
                      link={
                        !social.website.startsWith('http')
                          ? `http://${social.website}`
                          : social.website
                      }
                    />
                  )}
                  {social?.telegram && (
                    <ClickableTitleItem
                      icon={<FaTelegram />}
                      title="Telegram"
                      link={`https://t.me/${social.telegram}`}
                    />
                  )}
                  {social?.discord && (
                    <ClickableTitleItem
                      icon={<RiDiscordFill />}
                      title="Discord"
                      link={`https://discord.com/app`}
                    />
                  )}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;