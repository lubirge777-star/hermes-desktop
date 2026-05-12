import icon from "../../assets/lubi-icon.png";

interface LubiLogoProps {
  size?: number;
  premium?: boolean;
}

function LubiLogo({ size = 32, premium = false }: LubiLogoProps): React.JSX.Element {
  if (premium) {
    return (
      <div className="welcome-logo">
        <img
          src={icon}
          width={size}
          height={size}
          className="rounded-full"
          alt="Lubi"
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </div>
    );
  }
  return (
    <img
      src={icon}
      width={size}
      height={size}
      className="rounded-full"
      alt="Lubi"
    />
  );
}

export default LubiLogo;
