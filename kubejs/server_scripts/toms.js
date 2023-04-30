ServerEvents.recipes((event) => {
  event.remove({ output: "toms_storage:ts.storage_terminal" });
  event.remove({ output: "toms_storage:ts.crafting_terminal" });
  event.remove({ output: "toms_storage:ts.inventory_cable" });
  event.remove({ output: "toms_storage:ts.inventory_cable_connector" });
  event.remove({ output: "toms_storage:ts.inventory_cable_connector_filtered" });
  event.remove({ output: "toms_storage:ts.inventory_cable_connector_framed" });
  event.remove({ output: "toms_storage:ts.inventory_cable_frame" });
  event.remove({ output: "toms_storage:ts.inventory_connector" });
  event.remove({ output: "toms_storage:ts.inventory_proxy" });
  event.remove({ output: "toms_storage:ts.level_emitter" });
  event.remove({ output: "toms_storage:ts.open_crate" });
  event.remove({ output: "toms_storage:ts.paint_kit" });
  event.remove({ output: "toms_storage:ts.trim" });

  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" P ", "SSS", "SSS", "SSS", "AML"],
    key: {
      P: {
        item: "toms_storage:ts.storage_terminal",
      },
      S: {
        item: "create:mechanical_crafter",
      },
      L: {
        item: "create:linked_controller",
      },
      M: {
        item: "create:precision_mechanism",
      },
      A: {
        item: "create:sturdy_sheet",
      },
    },
    result: {
      item: "toms_storage:ts.crafting_terminal",
    },
    acceptMirrored: false,
  });
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        item: "create:brass_sheet",
      },
      {
        item: "minecraft:dried_kelp",
      },
    ],
    result: {
      item: "toms_storage:ts.inventory_cable",
      count: 8,
    },
  });
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        item: "toms_storage:ts.inventory_cable",
      },
      {
        item: "create:chute",
      },
    ],
    result: {
      item: "toms_storage:ts.inventory_cable_connector",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["I", "S", "P"],
    key: {
      P: {
        item: "create:electron_tube",
      },
      S: {
        item: "toms_storage:ts.inventory_cable_connector",
      },
      I: {
        tag: "forge:plates/brass",
      },
    },
    result: {
      item: "toms_storage:ts.inventory_cable_connector_filtered",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["SSS", "SCS", "SSS"],
    key: {
      C: {
        item: "toms_storage:ts.inventory_cable_connector",
      },
      S: {
        tag: "forge:rods/wooden",
      },
    },
    result: {
      item: "toms_storage:ts.inventory_cable_connector_framed",
      count: 1,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["SSS", "SCS", "SSS"],
    key: {
      C: {
        item: "toms_storage:ts.inventory_cable",
      },
      S: {
        tag: "forge:rods/wooden",
      },
    },
    result: {
      item: "toms_storage:ts.inventory_cable_framed",
      count: 1,
    },
  });
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        item: "create:brass_casing",
      },
      {
        item: "create:chute",
      },
    ],
    result: {
      item: "toms_storage:ts.inventory_connector",
    },
  });
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        item: "toms_storage:ts.inventory_connector",
      },
      {
        item: "create:smart_chute",
      },
    ],
    result: {
      item: "toms_storage:ts.inventory_proxy",
    },
  });
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        item: "create:content_observer",
      },
      {
        item: "toms_storage:ts.inventory_cable",
      },
    ],
    result: {
      item: "toms_storage:ts.level_emitter",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["PSP", "PCP", "PTP"],
    key: {
      P: {
        tag: "minecraft:planks",
      },
      C: {
        tag: "forge:chests/wooden",
      },
      S: {
        tag: "forge:rods/wooden",
      },
      T: {
        tag: "minecraft:trapdoors",
      },
    },
    result: {
      item: "toms_storage:ts.open_crate",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["RGB", "iaW", "bS "],
    key: {
      b: {
        item: "minecraft:water_bucket",
      },
      a: {
        item: "minecraft:bucket",
      },
      R: {
        tag: "forge:dyes/red",
      },
      G: {
        tag: "forge:dyes/green",
      },
      B: {
        tag: "forge:dyes/blue",
      },
      W: {
        tag: "minecraft:wool",
      },
      S: {
        tag: "forge:rods/wooden",
      },
      i: {
        tag: "forge:dyes/black",
      },
    },
    result: {
      item: "toms_storage:ts.paint_kit",
      count: 1,
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [" C ", "cGg", "PPP"],
    key: {
      C: {
        item: "create:precision_mechanism",
      },
      c: {
        item: "create:content_observer",
      },
      P: {
        tag: "minecraft:buttons",
      },
      G: {
        item: "create:display_link",
      },
      g: {
        item: "create:display_board",
      },
    },
    result: {
      item: "toms_storage:ts.storage_terminal",
    },
  });
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["###", "#X#", "###"],
    key: {
      X: {
        item: "create:brass_tunnel",
      },
      "#": {
        tag: "forge:rods/wooden",
      },
    },
    result: {
      item: "toms_storage:ts.trim",
      count: 2,
    },
  });
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        item: "toms_storage:ts.painted_trim",
      },
      {
        item: "minecraft:water_bucket",
      },
    ],
    result: {
      item: "toms_storage:ts.trim",
      count: 1,
    },
  });
});
