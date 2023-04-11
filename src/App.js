import logo from "./logo.svg";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button bg-red-500 p-5 text-3xl rounded-2xl font-bold "
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
