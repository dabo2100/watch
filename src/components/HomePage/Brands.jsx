import LogoLoop from '../LogoLoop';
import p1 from '../../assets/HomePege/Loop/1-min.png';
import p2 from '../../assets/HomePege/Loop/2-min-1.png';
import p3 from '../../assets/HomePege/Loop/3-min-1.png';
import p4 from '../../assets/HomePege/Loop/4-min-1.png';
import p5 from '../../assets/HomePege/Loop/5-min.png';

const imageLogos = [
    { src: p1, alt: "P1", href: "#" },
    { src: p2, alt: "P2", href: "#" },
    { src: p4, alt: "P4", href: "#" },
    { src: p3, alt: "P3", href: "#" },
    { src: p5, alt: "P5", href: "#" },
];

function Brands() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' ,paddingTop:'70px'}}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default Brands;