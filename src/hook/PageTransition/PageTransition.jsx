import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth ,transition:{ duration: 0.1 }}}
            
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;