import React, { lazy, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CanvasLoader from "./Loader";

const BallCanvas = lazy(() => import("./canvas/Ball"));
const Tech = () => {
  return (
    <Suspense fallback={<div />}>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => {
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          );
        })}
      </div>
    </Suspense>
  );
};

export default SectionWrapper(Tech, "");
