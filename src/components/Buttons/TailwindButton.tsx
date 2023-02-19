import { ShareButtonPropsInterface } from "./interfaces";

const TailwindButton: React.FC<ShareButtonPropsInterface> = ({
  text,
  textColor,
  bgColor,
  action,
  iconRight,
  fn,
}) => {
  if (!fn) fn = () => {};
  if (!action) action = "onClick";
  if (!textColor) textColor = "text-white";
  if (!bgColor) bgColor = " ";

  return (
    <button
      className={`px-4 py-2 text-white font-medium rounded-md w-full ${bgColor} ${textColor}`}
      {...{ [action]: fn }}
    >
      <span>{text}</span>
      {iconRight && iconRight}
    </button>
  );
};

export default TailwindButton;
