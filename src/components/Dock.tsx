import chrome from "../assets/chrome.png";
import file from "../assets/folder-management.png";
import terminal from "../assets/terminal.png";
import spotify from "../assets/spotify.png";
import play from "../assets/play.png";
import discord from "../assets/discord.png";
import office from "../assets/office.png";

interface DockItem {
  id: string;
  icon: string;
  label: string;
}

const dockItems: Record<string, DockItem> = {
  app1: { id: "1", icon: terminal, label: "terminal" },
  app2: { id: "2", icon: file, label: "file" },
  app3: { id: "3", icon: chrome, label: "chrome" },
  app4: { id: "4", icon: spotify, label: "spotify" },
  app5: { id: "5", icon: play, label: "play" },
  app6: { id: "6", icon: discord, label: "discord" },
  app7: { id: "7", icon: office, label: "office" },
};

export const Dock = () => {
  // const dockHide = true;
  return (
    <div className={`dockContainer`}>
      <div className="dockPanel glass-dark">
        <div className={`dockItemContainer`}>
          {/* key is used to differentiate unique item in map */}
          {Object.entries(dockItems).map(([key, item]) => (
            <div
              key={item.id}
              className="dockItem"
              style={{ backgroundImage: `url(${item.icon})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Todo-dinesh
// 1.enable dock hiding
// 2.make dock scrollabe if more icons
// 4.implement click action
// 5.implement window preview feature
// 6.Handle multiple windows of same apps
// 3.show running apps in right section
