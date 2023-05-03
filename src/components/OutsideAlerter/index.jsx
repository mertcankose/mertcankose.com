import { useRef, useEffect, useContext } from "react";
import StoreContext from "../../context/store";

const useOutsideAlerter = (ref) => {
  const { setOpenMenu } = useContext(StoreContext);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const OutsideAlerter = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="flex-1" ref={wrapperRef}>
      {props.children}
    </div>
  );
};

export default OutsideAlerter;
