"use client";

// import styles from "../styles/mobilenavcontent.module.css";

const Mobilenavcontent = () => {
  return (
    <>
      <div className="hamburger">
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </div>
      <style jsx>
        {`
          .hamburger {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
          }

          .burger {
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            background-color: black;
            transform-origin: 1px;
            transition: all 0.3s linear;
          }
          @media (min-width: 600px) {
            .hamburger {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Mobilenavcontent;
