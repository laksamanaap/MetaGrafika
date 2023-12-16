import React, { Suspense, useState, useEffect, useMemo } from "react";
import Loading from "./Loading";

// Import the component dynamically
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Isometric = ({ splineUrl }) => {
  const [cachedSpline, setCachedSpline] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const importSpline = async () => {
      try {
        const module = await import("@splinetool/react-spline");
        setCachedSpline(module);
        // optional
        // setTimeout(() => {
        //   setIsLoaded(true);
        // }, 2000);
      } catch (error) {
        console.error("Error importing Spline component:", error);
      }
    };

    importSpline();
  }, []);

  // Set Loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        {isLoaded && cachedSpline ? (
          <cachedSpline.default
            className="sm:h-720 sm:w-460 md:h-720 md:w-460 lg:h-720 lg:w-460"
            scene={splineUrl}
          />
        ) : null}
      </Suspense>
      {!isLoaded && <Loading />}
    </>
  );
};

export default Isometric;
