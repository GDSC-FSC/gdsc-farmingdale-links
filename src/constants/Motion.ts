import { motion } from "framer-motion";

export const MotionArticle = motion.article;
export const MotionDiv = motion.div;
export const MotionFigure = motion.figure
export const MotionFooter = motion.footer;
export const MotionHeader = motion.header;
export const MotionMain = motion.main;
export const MotionMenu = motion.menu;
export const MotionNav = motion.nav;
export const MotionPicture = motion.picture;
export const MotionSection = motion.section;
export const MotionAside = motion.aside;

export const CrossFadeVariants = {
  fadeOut: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      delay: 7,
      duration: 10,
      repeatDelay: 7
    }
  },
  fadeIn: {
    opacity: 0,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      delay: 7,
      duration: 10,
      repeatDelay: 7
    }
  }
}
