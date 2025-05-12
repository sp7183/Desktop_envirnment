import bg from "../assets/Luffy.png";

export const Wallpaper = () => {
  return (
    <div
      className="wallpaper"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    ></div>
  );
};
