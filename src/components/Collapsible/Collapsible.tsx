import React, { useState } from "react";
interface IProps {
  open?: boolean;
  children?: React.ReactNode;
  title: React.ReactNode;
}

export const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (<>
    <div className="cardx border">
      <div>
        <div className="d-flex justify-content-between">
          {title}            
          <button type="button" className="btn" onClick={handleFilterOpening}>
            {!isOpen ? (<i className="bi bi-chevron-down"></i>) : (<i className="bi bi-chevron-up"></i>)}
          </button>
        </div>
      </div>
      <div>
        <div>{isOpen && <div className="p-3">{children}</div>}</div>
      </div>
    </div>
  </>);
};
