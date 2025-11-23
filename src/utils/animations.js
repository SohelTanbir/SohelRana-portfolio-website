// Reusable Framer Motion animation variants

// Fade in animation
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Fade in from direction
export const fadeInDirection = (direction = "up", delay = 0) => ({
    hidden: {
        opacity: 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut"
        }
    }
});

// Stagger container
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren
        }
    }
});

// Stagger item
export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Scale animation
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Hover animation
export const hoverScale = {
    scale: 1.02,
    transition: {
        duration: 0.3,
        ease: "easeInOut"
    }
};

// Tap animation
export const tapScale = {
    scale: 0.95
};

// Slide in from side
export const slideIn = (direction = "left", delay = 0) => ({
    hidden: {
        x: direction === "left" ? -100 : 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut"
        }
    }
});

// Rotate in
export const rotateIn = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Viewport scroll animation options
export const scrollReveal = {
    viewport: { once: true, amount: 0.2 }
};
