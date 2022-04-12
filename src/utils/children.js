import React from "react";

export const getChildrenByType = (type, children) => {
  return React.Children.toArray(children).filter(
    (child) => {
      // console.log("getChild", child)
      return child.props.displayname === type
    }
  );
};

export const getChildByType = (type, children) => {
  return getChildrenByType(type, children)[0];
}

export const cloneElement = (element, props) => {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, props);
  }

  return <></>
}