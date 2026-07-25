import laptopFrame from '../assets/laptop.png';
import mobileFrame from '../assets/mobile version.png';

const DeviceMockup = ({ image, alt = 'Project Screenshot', type = 'laptop' }) => {
  const isMobile = type === 'mobile';

  return (
    <div
      className={`relative w-full mx-auto will-change-transform ${
        isMobile ? 'max-w-[180px] sm:max-w-[220px]' : 'max-w-[600px]'
      }`}
    >
      {/* Screenshot Image (Behind Frame) */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: isMobile ? '20px' : '10px',
          margin: isMobile ? '10% 10% 10% 10%' : '6% 3% 0% 3%',
          aspectRatio: isMobile ? '9 / 19.5' : '16 / 10',
        }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Device Frame PNG Overlay */}
      <img
        src={isMobile ? mobileFrame : laptopFrame}
        alt="Device Frame"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{ zIndex: 10 }}
      />
    </div>
  );
};

export default DeviceMockup;
