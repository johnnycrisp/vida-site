import * as React from "react";
import SingleImage from "./SingleImage";
import TextSection from "./TextSection";

export default function ComponentSelector({ components }) {
  // console.log('components', components)

  return (
    <div className="campaign__components-wrapper">
      {components?.map((component) => {
        switch (component?.internal.type) {
          case "DatoCmsTextSection":
            return <TextSection key={component.id} component={component} />;
          case "DatoCmsSingleImage":
            return <SingleImage key={component.id} component={component} />;
          default:
            break;
        }
      })}
    </div>
  );
}
