import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
};

const FooterImage = ({ src, alt }: Props) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      variants={{
        active: { scale: 1.08 },
      }}
      whileHover="active"
      whileTap={{ scale: 1 }}
      whileFocus="active"
    />
  );
};

export default FooterImage;
