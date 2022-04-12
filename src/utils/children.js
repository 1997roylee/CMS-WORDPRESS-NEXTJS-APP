import React from "react";

export const getChildrenByType = (type, children) => {
  return React.Children.toArray(children).filter(
    (child) => child.props.displayName === type
  );
};

export const getChildByType = (type, children) => {
    return getChildrenByType(type, children)[0];
}