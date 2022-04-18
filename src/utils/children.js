import React from "react";

export const findChildrenByType = (type, children) => {
  return React.Children.toArray(children).filter(
    (child) => {
      // console.log("getChild", child)
      return child.props.displayname === type
    }
  );
};

export const findOneChildByType = (type, children) => {
  return findChildrenByType(type, children)[0];
}

export const cloneElement = (element, props) => {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, props);
  }

  return <></>
}