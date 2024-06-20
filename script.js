const fields = [
  {
    type: "select",
    name: "cl_allow_animated_avatars",
    alt: "Allow animated avatars",
  },
  { type: "select", name: "cl_autohelp", alt: "Autohelp pop-ups" },
  {
    type: "select",
    name: "cl_buywheel_nonumberpurchasing",
    alt: "Disable number keys when in buy menu",
  },
  { type: "select", name: "cl_color", alt: "Player color on radar" },
  {
    type: "select",
    name: "cl_crosshair_sniper_width",
    alt: "Width of sniper rifle crosshair when zoomed",
  },
  {
    type: "select",
    name: "cl_dm_buyrandomweapons",
    alt: "Random weapons in deathmatch",
  },
  {
    type: "select",
    name: "cl_hide_avatar_images",
    alt: "Hide avatar images",
  },
  { type: "select", name: "cl_hud_color", alt: "HUD color" },
  {
    type: "select",
    name: "cl_invites_only_friends",
    alt: "Disable invites from all players except friends",
  },
  {
    type: "select",
    name: "cl_invites_only_mainmenu",
    alt: "Invites only appear when on the main menu",
  },
  {
    type: "select",
    name: "cl_join_advertise",
    alt: "Allow players to join you without invites",
  },
  {
    type: "select",
    name: "cl_mute_all_but_friends_and_party",
    alt: "Mute all players except friends and party",
  },
  {
    type: "select",
    name: "cl_mute_enemy_team",
    alt: "Mute enemy team",
  },
  {
    type: "select",
    name: "cl_player_ping_mute",
    alt: "Mute ping sounds",
  },
  {
    type: "select",
    name: "cl_prefer_lefthanded",
    alt: "Left hand viewmodel",
  },
  {
    type: "select",
    name: "cl_radar_always_centered",
    alt: "Radar always centered",
  },
  {
    type: "select",
    name: "cl_radar_rotate",
    alt: "Radar rotates when turning",
  },
  {
    type: "select",
    name: "cl_radar_square_with_scoreboard",
    alt: "Radar turns square when scoreboard is open",
  },
  {
    type: "select",
    name: "cl_sanitize_player_names",
    alt: "Clean player names",
  },
  { type: "select", name: "cl_showloadout", alt: "Show loadout on HUD" },
  {
    type: "select",
    name: "cl_teamcounter_playercount_instead_of_avatars",
    alt: "Show playercount instead of avatars on HUD",
  },
  { type: "select", name: "con_enable", alt: "Enable developer console" },
  {
    type: "select",
    name: "hud_showtargetid",
    alt: "Show target info on crosshair hover",
  },
  {
    type: "select",
    name: "r_drawtracers_firstperson",
    alt: "Draw first person weapon tracers",
  },
  {
    type: "select",
    name: "r_show_build_info",
    alt: "Show game version in bottom left corner",
  },
  {
    type: "select",
    name: "snd_mute_losefocus",
    alt: "Mute game on focus loss",
  },
  {
    type: "select",
    name: "snd_mute_mvp_music_live_players",
    alt: "Disable mvp music if players are alive",
  },
  {
    type: "select",
    name: "viewmodel_presetpos",
    alt: "Viewmodel position",
  },
  {
    type: "textarea",
    name: "cl_radar_icon_scale_min",
    placeholder: "0.4 - 1",
    alt: "Radar map icon scale",
  },
  {
    type: "textarea",
    name: "cl_radar_scale",
    placeholder: "0.25 - 1",
    alt: "Radar map view scale",
  },
  {
    type: "textarea",
    name: "hud_scaling",
    placeholder: "0.5 - 0.95",
    alt: "HUD scale",
  },
  {
    type: "textarea",
    name: "mm_dedicated_search_maxping",
    placeholder: "0 - 300",
    alt: "Dedicated search maxping",
  },
  {
    type: "textarea",
    name: "cl_hud_radar_scale",
    placeholder: "0.8 - 1.3",
    alt: "HUD radar scale",
  },
  {
    type: "textarea",
    name: "zoom_sensitivity_ratio",
    placeholder: "0.1 - 10",
    alt: "Zoom sensitivity ratio",
  },
  {
    type: "textarea",
    name: "sensitivity",
    placeholder: "0.1 - 10",
    alt: "Sensitivity",
  },
];

const options = {
  cl_allow_animated_avatars: ["true", "false"],
  cl_autohelp: ["0", "1"],
  cl_buywheel_nonumberpurchasing: ["0", "1"],
  cl_color: ["yellow", "purple", "green", "blue", "orange"],
  cl_crosshair_sniper_width: ["1", "2", "3", "4"],
  cl_dm_buyrandomweapons: ["0", "1"],
  cl_hide_avatar_images: ["0", "1", "2"],
  cl_hud_color: [
    "team color",
    "white",
    "light blue",
    "dark blue",
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "aqua",
    "pink",
  ],
  cl_invites_only_friends: ["0", "1"],
  cl_invites_only_mainmenu: ["0", "1"],
  cl_join_advertise: ["0", "1", "2"],
  cl_mute_all_but_friends_and_party: ["0", "1"],
  cl_mute_enemy_team: ["0", "1"],
  cl_player_ping_mute: ["0", "1"],
  cl_prefer_lefthanded: ["false", "true"],
  cl_radar_always_centered: ["0", "1"],
  cl_radar_rotate: ["true", "false"],
  cl_radar_square_with_scoreboard: ["true", "false"],
  cl_sanitize_player_names: ["false", "true"],
  cl_showloadout: ["true", "false"],
  cl_teamcounter_playercount_instead_of_avatars: ["false", "true"],
  con_enable: ["true", "false"],
  hud_showtargetid: ["true", "false"],
  r_drawtracers_firstperson: ["true", "false"],
  r_show_build_info: ["true", "false"],
  snd_mute_losefocus: ["true", "false"],
  snd_mute_mvp_music_live_players: ["false", "true"],
  viewmodel_presetpos: ["default", "classic"],
};

const form = document.querySelector("#config_form");
const formElement = document.querySelector("#config_form");

fields.forEach((field) => {
  const element = document.createElement(field.type);
  element.name = field.name;
  element.id = field.name;
  element.alt = field.alt;

  if (field.type === "textarea") {
    element.placeholder = field.placeholder;
  }

  // Create a new div element for each input element
  const div = document.createElement("div");
  div.classList.add("form-element");
  form.appendChild(div);

  // Add the label and input element to the div element
  const label = document.createElement("label");
  if (element.alt === undefined) {
    label.innerText = field.name + ":" + " ";
  } else {
    label.innerText = field.alt + ":" + " ";
    // label.innerText = field.alt + " " + field.name + ":" + " ";
  }
  label.htmlFor = element.id;
  div.appendChild(label);
  if (field.type === "select") {
    const optionValues = options[element.name]; // get the option values for this field

    for (const optionValue of optionValues) {
      const selectOption = document.createElement("option");
      selectOption.value = optionValue;
      selectOption.textContent = optionValue;

      element.appendChild(selectOption);
    }
  }

  div.appendChild(element);
});

// Add a submit button to the form
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
form.appendChild(submitButton);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new URLSearchParams(new FormData(form));
  //   console.log(formData);
  let outputText = ""; // Initialize an empty string to store the output
  for (const [key, value] of formData) {
    // Loop through each key-value pair in the formData object
    const formattedKey = `${key}`; // Format the key
    const formattedValue = `"${value}"`; // Wrap the value in double quotes
    if (value === "") {
      // If the value is an empty string, don't append it to the output text
      continue;
    } else if (key === "cl_hud_color") {
      let mappedValue;
      switch (value) {
        case "team color":
          mappedValue = `"0"`;
          break;
        case "white":
          mappedValue = `"1"`;
          break;
        case "light blue":
          mappedValue = `"2"`;
          break;
        case "dark blue":
          mappedValue = `"3"`;
          break;
        case "purple":
          mappedValue = `"4"`;
          break;
        case "red":
          mappedValue = `"5"`;
          break;
        case "orange":
          mappedValue = `"6"`;
          break;
        case "yellow":
          mappedValue = `"7"`;
          break;
        case "green":
          mappedValue = `"8"`;
          break;
        case "aqua":
          mappedValue = `"9"`;
          break;
        case "pink":
          mappedValue = `"10"`;
      }
      outputText += `${formattedKey} ${mappedValue}\n`; // Append the formatted key-value pair to the output text
    } else if (key === "viewmodel_presetpos") {
      // Check if we're processing the viewmodel_presetpos option
      // Use a simple mapping function to replace the preset position name with its numerical value
      let mappedValue;
      switch (value) {
        case "default":
          mappedValue = `"1"`;
          break;
        case "classic":
          mappedValue = `"2"`;
          break;
      }
      outputText += `${formattedKey} ${mappedValue}\n`; // Append the formatted key-value pair to the output text
      // Check if we're processing the cl_color option
    } else if (key === "cl_color") {
      // Use a simple mapping function to replace the color name with its numerical value
      let mappedValue;
      switch (value) {
        case "yellow":
          mappedValue = `"0"`;
          break;
        case "purple":
          mappedValue = `"1"`;
          break;
        case "green":
          mappedValue = `"2"`;
          break;
        case "blue":
          mappedValue = `"3"`;
          break;
        case "orange":
          mappedValue = `"4"`;
          break;
      }
      outputText += `${formattedKey} ${mappedValue}\n`; // Append the key and mapped value to the output string with a newline character
    } else {
      outputText += `${formattedKey} ${formattedValue}\n`; // Otherwise, just append the original key-value pair
    }
  }

  outputText += `host_writeconfig\n`; // this is needed for the changes to be saved to the local config of your game
  const blob = new Blob([outputText], { type: "text/plain" }); // Create a Blob object from the output string
  const url = URL.createObjectURL(blob); // Get a URL for the Blob object
  const link = document.createElement("a"); // Create an <a> element to download the file
  link.href = url; // Set the href attribute of the <a> element to the URL of the Blob object
  link.download = "autoexec.cfg"; // Set the download attribute of the <a> element to "output.txt"
  link.click(); // Simulate a click on the <a> element to trigger the download
});
