import React, { useEffect, useState } from "react";
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";

const DotRenderer = ({ dot }) => {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const viz = new Viz({ Module, render });
    viz.renderSVGElement(dot).then(el => {
      setSvg(el.outerHTML);
    });
  }, [dot]);

  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default DotRenderer;

