import {Tooltip} from '@/components/ui/tooltip';
import Platform from '@/entities/Platform';
import {HStack} from '@chakra-ui/react';
import {BsGlobe} from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';

type Props = {
  platforms: Platform[];
};

const iconMap: Record<string, React.ReactNode> = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  nintendo: <SiNintendo />,
  mac: <FaApple />,
  linux: <FaLinux />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />,
};

const PlatformIconList = ({platforms = []}: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map(platform => (
        <Tooltip
          key={platform.id}
          content={platform.name}
          aria-label={platform.name}
          positioning={{placement: 'top'}}
          openDelay={100}
          closeDelay={100}
          disabled
        >
          {iconMap[platform.slug]}
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
