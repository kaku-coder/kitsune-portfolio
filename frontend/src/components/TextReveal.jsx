import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({
  children,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  stagger = 0.03,
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      rotateX: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      },
    },
  };

  const renderAnimatedChildren = (node, keyPrefix = 'tr') => {
    if (typeof node === 'string' || typeof node === 'number') {
      const str = String(node);
      return str.split('').map((char, i) => (
        <motion.span
          key={`${keyPrefix}-${i}`}
          variants={charVariants}
          className="inline-block"
          style={{ perspective: '600px', transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    }

    if (React.isValidElement(node)) {
      if (
        node.type === 'svg' ||
        (typeof node.type === 'string' && node.type.toLowerCase() === 'svg')
      ) {
        return (
          <motion.span variants={charVariants} className="inline-block">
            {node}
          </motion.span>
        );
      }

      const childContent = React.Children.map(node.props.children, (child, idx) =>
        renderAnimatedChildren(child, `${keyPrefix}-el-${idx}`)
      );

      return React.cloneElement(node, { ...node.props }, childContent);
    }

    return node;
  };

  const formattedContent = React.Children.map(children, (child, idx) =>
    renderAnimatedChildren(child, `root-${idx}`)
  );

  const MotionTag = motion[Tag] || motion.h1;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={className}
      style={{ perspective: '600px' }}
    >
      {formattedContent}
    </MotionTag>
  );
}
