ServerEvents.recipes((event) => {
  event.remove({ output: "immersive_aircraft:quadrocopter" });
  event.remove({ output: "immersive_aircraft:gyrodyne" });
  event.remove({ output: "immersive_aircraft:airship" });
  event.remove({ output: "immersive_aircraft:engine" });
  event.remove({ output: "immersive_aircraft:boiler" });
  event.remove({ output: "immersive_aircraft:hull" });
  event.remove({ output: "immersive_aircraft:sail" });
  event.remove({ output: "immersive_aircraft:propeller" });
  event.remove({ output: "immersive_aircraft:biplane" });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["PAP", " S ", "PEP"],
    key: {
      E: [
        {
          item: "immersive_aircraft:boiler",
        },
      ],
      A: [
        {
          item: "create:andesite_casing",
        },
      ],
      S: [
        {
          item: "minecraft:string",
        },
      ],
      P: [
        {
          item: "create:propeller",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:quadrocopter",
    },
  });

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["SSS", "SSS"],
    key: {
      S: [
        {
          item: "create:white_sail",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:sail",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [" I ", "IPI", " I "],
    key: {
      I: [
        {
          item: "create:iron_sheet",
        },
      ],
      P: [
        {
          item: "create:propeller",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:propeller",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["LIL", "LIL"],
    key: {
      L: [
        {
          item: "create:andesite_casing",
        },
      ],
      I: [
        {
          item: "minecraft:iron_ingot",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:hull",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [" P ", "SES", "H_H"],
    key: {
      S: [
        {
          item: "immersive_aircraft:sail",
        },
      ],
      H: [
        {
          item: "immersive_aircraft:hull",
        },
      ],
      P: [
        {
          item: "immersive_aircraft:propeller",
        },
      ],
      E: [
        {
          item: "create:precision_mechanism",
        },
      ],
      _: [
        {
          item: "create:red_seat",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:gyrodyne",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["BPB", "MFM", "SHS"],
    key: {
      P: [
        {
          item: "create:propeller",
        },
      ],
      F: [
        {
          item: "create:fluid_tank",
        },
      ],
      H: [
        {
          item: "create:blaze_burner",
        },
      ],
      B: [
        {
          item: "create:brass_sheet",
        },
      ],
      M: [
        {
          item: "create:precision_mechanism",
        },
      ],
      S: [
        {
          item: "create:sturdy_sheet",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:engine",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["SSS", "INI", "SSS"],
    key: {
      I: [
        {
          item: "minecraft:iron_ingot",
        },
      ],
      S: [
        {
          item: "create:copper_sheet",
        },
      ],
      N: [
        {
          item: "minecraft:iron_nugget",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:boiler",
    },
  });
  event.custom({
    type: "create:mechanical_crafting",
    pattern: ["SSSSS", " ~ ~ ", " H_EP", " HHH "],
    key: {
      H: [
        {
          item: "immersive_aircraft:hull",
        },
      ],
      E: [
        {
          item: "immersive_aircraft:engine",
        },
      ],
      P: [
        {
          item: "create:propeller",
        },
      ],
      S: [
        {
          item: "immersive_aircraft:sail",
        },
      ],
      "~": [
        {
          item: "minecraft:string",
        },
      ],
      _: [
        {
          item: "create:red_seat",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:airship",
    },
    acceptMirrored: true,
  });
  event.custom({
    type: "create:mechanical_crafting",
    pattern: ["   S ", "S  S ", "HH_EP", "S  S ", "   S "],
    key: {
      H: [
        {
          item: "immersive_aircraft:hull",
        },
      ],
      E: [
        {
          item: "immersive_aircraft:engine",
        },
      ],
      P: [
        {
          item: "immersive_aircraft:propeller",
        },
      ],
      S: [
        {
          item: "immersive_aircraft:sail",
        },
      ],
      _: [
        {
          item: "create:red_seat",
        },
      ],
    },
    result: {
      item: "immersive_aircraft:biplane",
    },
    acceptMirrored: true,
  });
});
