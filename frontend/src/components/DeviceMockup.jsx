import laptopFrame from '../assets/laptop.png';
import mobileFrame from '../assets/mobile version.png';

const DeviceMockup = ({ image, alt = 'Project Screenshot', type = 'laptop' }) => {
  const isMobile = type === 'mobile';

  return (
    <div
      className={`relative w-full mx-auto group transition-transform duration-500 hover:scale-[1.02] ${
        isMobile ? 'max-w-[200px] sm:max-w-[240px]' : 'max-w-[600px]'
      }`}
    >
      {/* Screenshot Image (Behind Frame) */}
      <div
        className={`relative overflow-hidden ${
          isMobile
            ? 'aspect-[9/19.5]'
            : 'aspect-[16/10]'
        }`}
        style={{
          borderRadius: isMobile ? '20px' : '10px',
          margin: isMobile ? '10% 10% 10% 10%' : '6% 3% 0% 3%',
        }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Device Frame PNG Overlay */}
      <img
        src={isMobile ? mobileFrame : laptopFrame}
        alt="Device Frame"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-2xl"
        style={{ zIndex: 10 }}
      />
    </div>
  );
};

export default DeviceMockup;
