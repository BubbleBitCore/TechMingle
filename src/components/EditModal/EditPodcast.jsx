import { motion } from "framer-motion"

const EditPodcast = () => {
  return (
    <>
      <motion.div
      key={"EditDiv"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 0.2,
      }}></motion.div>
    </>
  )
}

export default EditPodcast
