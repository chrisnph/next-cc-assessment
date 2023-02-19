import React from "react";

export interface ShareButtonPropsInterface {
  text?: string;
  bgColor?: string;
  textColor?: string;
  iconRight?: React.ReactElement;
  iconleft?: React.ReactElement;
  action?: "onClick";
  fn?: () => void;
}
