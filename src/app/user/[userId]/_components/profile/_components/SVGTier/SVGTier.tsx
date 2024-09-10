import Tier1Icon from '@/shared/assets/svg/tier/tier_1.svg';
import Tier2Icon from '@/shared/assets/svg/tier/tier_2.svg';
import Tier3Icon from '@/shared/assets/svg/tier/tier_3.svg';
import Tier4Icon from '@/shared/assets/svg/tier/tier_4.svg';
import Tier5Icon from '@/shared/assets/svg/tier/tier_5.svg';
import Tier6Icon from '@/shared/assets/svg/tier/tier_6.svg';

interface SVGTierProps {
  tier?: number;
}

const SVGTier = ({ tier = 1 }: SVGTierProps) => {
  switch (tier) {
    case 1:
      return <Tier1Icon />;
    case 2:
      return <Tier2Icon />;
    case 3:
      return <Tier3Icon />;
    case 4:
      return <Tier4Icon />;
    case 5:
      return <Tier5Icon />;
    case 6:
      return <Tier6Icon />;
    default:
      return <Tier1Icon />;
  }
};

export default SVGTier;
