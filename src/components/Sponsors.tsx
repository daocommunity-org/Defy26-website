import Image from 'next/image';

interface Sponsor {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

const sponsors: Sponsor[] = [
  
  {
    name: 'ZKWallet',
    logoUrl: '/Sponsors/zkwalletlogo.png',
    websiteUrl: 'https://zkinnovations.com'
  },
  {
    name: 'Gizmolab',
    logoUrl: '/Sponsors/gizmolablogo.png',
    websiteUrl: 'https://www.gizmolab.io'
  },
  {
    name: 'MTutor',
    logoUrl: '/Sponsors/mtutorlogo.png',
    websiteUrl: 'https://www.m-tutor.com/'
  },
  {
    name: 'MOI Technology',
    logoUrl: '/Sponsors/moilogo.png',
    websiteUrl: 'https://moi.technology/'
  },
  {
    name: 'Krypcore',
    logoUrl: '/Sponsors/krypcorelogo.png',
    websiteUrl: 'https://krypcore.com'
  },
  {
    name: 'Qoneqt',
    logoUrl: '/Sponsors/qoneqtlogo.png',
    websiteUrl: 'https://qoneqt.com'
  },
  {
    name: 'QuickNode',
    logoUrl: '/Sponsors/quicknodelogo.png',
    websiteUrl: 'https://www.quicknode.com/'
  },
  {
    name: 'Quillaudits',
    logoUrl: '/Sponsors/quilauditslogo.png',
    websiteUrl: 'https://www.quillaudits.com/smart-contract-audit'
  }
  
];

const Sponsors: React.FC = () => {
  const doubledSponsors = [...sponsors, ...sponsors];
  return (
    <section id="sponsors" className="sponsors-section">
      <h2 className="section-title">Previous Year Sponsors</h2>

      <div className="sponsor-scroll-container">
        <div className="sponsor-scroll-content">
          {doubledSponsors.map((sponsor, index) => (
            <a href={sponsor.websiteUrl} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="sponsor-item">
              <Image 
                src={sponsor.logoUrl} 
                alt={`${sponsor.name} logo`} 
                fill
                style={{ objectFit: 'contain' }} 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;