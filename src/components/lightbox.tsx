import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function LightboxWrapper({
  images,
  open,
  index,
  onClose,
}: {
  images: { src: string; caption?: string }[];
  open: boolean;
  index: number;
  onClose: () => void;
}) {
  return (
    <Lightbox
    plugins={[Captions]}
      open={open}
      close={onClose}
      index={index}
      slides={images.map(({ src, caption }) => ({
        src,
        description: caption,
      }))}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
    />
  );
}
