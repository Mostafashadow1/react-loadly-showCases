import React from 'react'
import PropsHighlight from '../molecules/PropsHighlightMolecule'
import { motion } from "framer-motion";

const LoaderShowcaseHeader = () => {
    return (
        <div className="text-center mb-16">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
                React Loadly Collection
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
                Discover beautiful, customizable loading components for React. Each
                loader supports dynamic props for ultimate flexibility in your
                applications.
            </motion.p>

            {/* Common Props Highlight */}
            <PropsHighlight />
        </div>
    )
}

export default LoaderShowcaseHeader