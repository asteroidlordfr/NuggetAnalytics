let generatedLevel = null;

function generateLevel() {
  const prompt = document.getElementById("prompt").value.toLowerCase();

  const levelName = generateName(prompt);
  document.getElementById("levelName").innerText = "Level Name: " + levelName;

  const objects = generateObjects(prompt);

  generatedLevel = buildGMD(levelName, objects);
  document.getElementById("exportBtn").disabled = false;
}

function generateName(prompt) {
  const words = ["Velocity", "Chaos", "Inferno", "Pulse", "Abyss", "Overdrive"];
  return words[Math.floor(Math.random() * words.length)] + " AI";
}

function generateObjects(prompt) {
  let objs = [];
  let x = 15;

  for (let i = 0; i < 80; i++) {
    // Block
    objs.push(`1,1,2,${x},3,30;`);

    // Spikes
    if (prompt.includes("spike") || Math.random() < 0.4) {
      objs.push(`1,8,2,${x},3,60;`);
    }

    // Orbs
    if (prompt.includes("orb") || Math.random() < 0.2) {
      objs.push(`1,36,2,${x},3,90;`);
    }

    // Pads
    if (prompt.includes("pad") || Math.random() < 0.15) {
      objs.push(`1,35,2,${x},3,30;`);
    }

    // Speed portals
    if (prompt.includes("fast") && i === 20) {
      objs.push(`1,200,2,${x},3,60;`);
    }

    x += 30;
  }
  return objs.join("");
}

function buildGMD(name, objectString) {
  return `<?xml version="1.0"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
"http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>kCEK</key>
<string>${objectString}</string>
<key>k2</key>
<string>${name}</string>
<key>k4</key>
<integer>1</integer>
<key>k13</key>
<integer>0</integer>
</dict>
</plist>`;
}

function exportGMD() {
  const blob = new Blob([generatedLevel], { type: "application/xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "AI_Level.gmd";
  link.click();
}
