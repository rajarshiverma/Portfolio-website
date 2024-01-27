import "./homearrow.scss";
import { motion } from "framer-motion";

const Homearrow = () => {
  return (
    <div className="homearrow">
      <motion.a href="#Homepage">
        <motion.i
          className="fas fa-arrow-circle-up"
          whileTap={{ scale: ".8", transition: { duration: "2" } }}
        ></motion.i>
      </motion.a>
    </div>
  );
};
export default Homearrow;
