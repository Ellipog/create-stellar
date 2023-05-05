// priority: 0

ServerEvents.recipes((event) => {
  // Defining functions

  // Melting
  let melting = (input, fluid, amount) => {
    event.custom({
      type: "createbigcannons:melting",
      heatRequirement: "heated",
      ingredients: [
        {
          item: input,
        },
      ],
      results: [
        {
          amount: amount,
          fluid: fluid,
        },
      ],
    });
  };

  // Mixing
  let mixing = (input1, input2, output, amount) => {
    if (input1.includes("molten")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            fluid: input1,
            amount: 90,
          },
          {
            item: input2,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else if (input2.includes("molten")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: input1,
          },
          {
            fluid: input2,
            amount: 90,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else if (input2.includes("#")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: input1,
          },
          {
            tag: input2.replace("#", ""),
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else if (input1.includes("#")) {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            tag: input1.replace("#", ""),
          },
          {
            item: input2,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:mixing",
        ingredients: [
          {
            item: input1,
          },
          {
            item: input2,
          },
        ],
        results: [
          {
            item: output,
            count: amount,
          },
        ],
      });
    }
  };

  // Milling
  let milling = (input, output, time, chance, amount) => {
    event.custom({
      type: "create:milling",
      ingredients: [
        {
          item: input,
        },
      ],
      processingTime: time,
      results: [
        {
          item: output,
          chance: chance,
          count: amount,
        },
      ],
    });
  };

  // Pressing
  let pressing = (tag, input, output) => {
    if (tag) {
      event.custom({
        type: "create:pressing",
        ingredients: [
          {
            tag: input,
          },
        ],
        results: [
          {
            item: output,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:pressing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output,
          },
        ],
      });
    }
  };

  // Splashing
  let splashing = (input, output1, chance1, amount1, output2, chance2, amount2) => {
    if (output2 == null) {
      event.custom({
        type: "create:splashing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:splashing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
          {
            item: output2,
            chance: chance2,
            count: amount2,
          },
        ],
      });
    }
  };

  // Compacting
  let compacting = (fluid, input, iAmount, output, oAmount) => {
    if (fluid) {
      event.custom({
        type: "create:compacting",
        ingredients: [
          {
            fluid: input,
            amount: iAmount,
          },
        ],
        results: [
          {
            item: output,
            count: oAmount,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:compacting",
        ingredients: [
          {
            item: input,
            count: iAmount,
          },
        ],
        results: [
          {
            item: output,
            count: oAmount,
          },
        ],
      });
    }
  };

  // Filling
  let filling = (input, fluid, amount, output) => {
    event.custom({
      type: "create:filling",
      ingredients: [
        {
          item: input,
        },
        {
          amount: amount,
          fluid: fluid,
          nbt: {},
        },
      ],
      results: [
        {
          item: output,
        },
      ],
    });
  };

  // Haunting
  let haunting = (input, output, chance, amount) => {
    event.custom({
      type: "create:haunting",
      ingredients: [
        {
          item: input,
        },
      ],
      results: [
        {
          item: output,
          chance: chance,
          count: amount,
        },
      ],
    });
  };

  // Crushing
  let crushing = (input, output1, chance1, amount1, output2, chance2, amount2) => {
    if (output2 == null) {
      event.custom({
        type: "create:crushing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
        ],
      });
    } else {
      event.custom({
        type: "create:crushing",
        ingredients: [
          {
            item: input,
          },
        ],
        results: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
          {
            item: output2,
            chance: chance2,
            count: amount2,
          },
        ],
      });
    }
  };

  // Disenchanting
  let disenchanting = (input, amount) => {
    event.custom({
      type: "create_enchantment_industry:disenchanting",
      ingredients: [
        {
          item: input,
        },
      ],
      results: [
        {
          fluid: "create_enchantment_industry:experience",
          amount: amount,
        },
      ],
    });
  };

  // Deploying
  let deploying = (input, applicator, output) => {
    event.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: input,
        },
        {
          item: applicator,
        },
      ],
      results: [
        {
          item: output,
        },
      ],
    });
  };

  // Crystallizing
  let crystallizing = (fluid, amount, type, input, output) => {
    if (type === "item") {
      event.custom({
        type: "thermal:crystallizer",
        ingredients: [
          {
            fluid: fluid,
            amount: amount,
          },
          {
            item: input,
          },
        ],
        result: [
          {
            item: output,
          },
        ],
      });
    } else {
      event.custom({
        type: "thermal:crystallizer",
        ingredients: [
          {
            fluid: fluid,
            amount: amount,
          },
          {
            tag: input,
          },
        ],
        result: [
          {
            fluid: output,
          },
        ],
      });
    }
  };

  // Charging
  let charging = (input, output, amount, energy) => {
    event.custom({
      type: "createaddition:charging",
      energy: energy,
      input: {
        item: input,
        count: 1,
      },
      result: {
        item: output,
        count: amount,
      },
      energy: energy,
    });
  };

  // Centrifuging
  let centrifuging = (input, output1, chance1, amount1, output2, chance2, amount2) => {
    if (output2 !== null) {
      event.custom({
        type: "thermal:centrifuge",
        ingredient: {
          item: input,
        },
        result: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
          {
            item: output2,
            chance: chance2,
            count: amount2,
          },
        ],
        energy: 10000,
      });
    } else {
      event.custom({
        type: "thermal:centrifuge",
        ingredient: {
          item: "thermal:oil_sand",
        },
        result: [
          {
            item: output1,
            chance: chance1,
            count: amount1,
          },
        ],
        energy: 10000,
      });
    }
  };

  // Rolling
  let rolling = (tag, input, output, amount) => {
    if (tag) {
      event.custom({
        type: "createaddition:rolling",
        input: {
          tag: input,
        },
        result: {
          item: output,
          count: amount,
        },
      });
    } else {
      event.custom({
        type: "createaddition:rolling",
        input: {
          item: input,
        },
        result: {
          item: output,
          count: amount,
        },
      });
    }
  };

  // Removing recipes that are overridden
  event.remove({ output: "minecraft:flint", type: "create:milling" });
  event.remove({ output: "create:andesite_alloy" });
  event.remove({ output: "createaddition:zinc_sheet" });
  event.remove({ output: "thermal:press_gear_die" });
  event.remove({ output: "minecraft:red_sand", type: "create:milling" });
  event.remove({ output: "ad_astra:steel_ingot" });
  event.remove({ output: "alloyed:steel_ingot", type: "create:mixing" });
  event.remove({ output: "alloyed:steel_sheet" });
  event.remove({ output: "createbigcannons:molten_steel", type: "create:mixing" });
  event.remove({ output: "minecraft:blackstone", type: "create:haunting" });
  event.remove({ output: "2x create:brass_ingot", type: "create:mixing" });
  event.remove({ output: "create:electron_tube" });
  event.remove({ output: "minecraft:netherrack", type: "create:mixing" });
  event.remove({ output: "create:precision_mechanism" });
  event.remove({ input: "create:experience_nugget", type: "create_enchantment_industry:disenchanting" });
  event.remove({ output: "create:encased_fan", type: "crafting_shaped" });
  event.remove({ output: "create:millstone", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_press", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_mixer", type: "crafting_shaped" });
  event.remove({ output: "create:windmill_bearing", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_bearing", type: "crafting_shaped" });
  event.remove({ output: "create:rope_pulley", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_piston", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_drill", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_saw", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_plough", type: "crafting_shaped" });
  event.remove({ output: "create:mechanical_harvester", type: "crafting_shaped" });
  event.remove({ output: "create:deployer", type: "crafting_shaped" });
  event.remove({ output: "sliceanddice:slicer", type: "crafting_shaped" });
  event.remove({ output: "createsifter:sifter", type: "crafting_shaped" });
  event.remove({ output: "createaddition:rolling_mill", type: "crafting_shaped" });
  event.remove({ output: "thermal:slag" });
  event.remove({ output: "create:spout" });
  event.remove({ output: "create_enchantment_industry:printer" });
  event.remove({ output: "ad_astra:iron_rod" });
  event.remove({ output: "create:fluid_tank", type: "crafting_shaped" });
  event.remove({ output: "create:hose_pulley", type: "crafting_shaped" });
  event.remove({ output: "create:item_drain", type: "crafting_shaped" });
  event.remove({ output: "create:smart_fluid_pipe", type: "crafting_shaped" });
  event.remove({ output: "create:fluid_valve", type: "crafting_shapeless" });
  event.remove({ output: "create_enchantment_industry:disenchanter", type: "crafting_shaped" });
  event.remove({ output: "ad_astra:tier_1_rocket" });
  event.remove({ output: "ad_astra:tier_2_rocket" });
  event.remove({ output: "ad_astra:tier_3_rocket" });
  event.remove({ output: "ad_astra:tier_4_rocket" });
  event.remove({ output: "ad_astra:steel_engine" });
  event.remove({ output: "ad_astra:desh_engine" });
  event.remove({ output: "ad_astra:coal_generator" });
  event.remove({ output: "ad_astra:compressor" });
  event.remove({ output: "ad_astra:nasa_workbench" });
  event.remove({ output: "ad_astra:fuel_refinery" });
  event.remove({ output: "ad_astra:oxygen_loader" });
  event.remove({ output: "minecraft:glowstone_dust", type: "create:crushing" });
  event.remove({ output: "ad_astra:steel_tank" });
  event.remove({ output: "ad_astra:desh_tank" });
  event.remove({ output: "ad_astra:ostrum_tank" });
  event.remove({ output: "ad_astra:solar_panel" });
  event.remove({ output: "ad_astra:oxygen_distributor" });
  event.remove({ output: "ad_astra:water_pump" });
  event.remove({ output: "create:steam_engine" });
  event.remove({ output: "create:extendo_grip" });
  event.remove({ output: "create:brass_funnel" });
  event.remove({ output: "create:brass_tunnel" });
  event.remove({ output: "create:andesite_funnel" });
  event.remove({ output: "create:andesite_tunnel" });
  event.remove({ output: "create:belt_connector" });
  event.remove({ output: "prettypipes:pressurizer" });
  event.remove({ output: "prettypipes:item_terminal" });
  event.remove({ output: "prettypipes:crafting_terminal" });
  event.remove({ output: "prettypipes:pipe" });
  event.remove({ output: "createaddition:tesla_coil" });
  event.remove({ output: "createaddition:modular_accumulator" });
  event.remove({ output: "createaddition:electric_motor" });
  event.remove({ output: "thermal:device_tree_extractor" });
  event.remove({ output: "thermal:device_fisher" });
  event.remove({ output: "thermal:device_composter" });
  event.remove({ output: "thermal:machine_frame" });
  event.remove({ output: "refinedstorage:silicon", input: "minecraft:quartz" });
  event.remove({ output: "refinedstorage:quartz_enriched_iron", input: "minecraft:quartz" });
  event.remove({ output: "refinedstorage:raw_basic_processor" });
  event.remove({ output: "refinedstorage:raw_improved_processor" });
  event.remove({ output: "refinedstorage:raw_advanced_processor" });
  event.remove({ output: "apotheosis:reforging_table" });
  event.remove({ output: "apotheosis:gem_cutting_table" });
  event.remove({ output: "apotheosis:salvaging_table" });
  event.remove({ output: "apotheosis:sigil_of_socketing" });
  event.remove({ output: "refinedstorage:1k_storage_part" });
  event.remove({ output: "refinedstorage:4k_storage_part" });
  event.remove({ output: "refinedstorage:16k_storage_part" });
  event.remove({ output: "refinedstorage:64k_storage_part" });
  event.remove({ output: "refinedstorage:64k_fluid_storage_part" });
  event.remove({ output: "refinedstorage:256k_fluid_storage_part" });
  event.remove({ output: "refinedstorage:1024k_fluid_storage_part" });
  event.remove({ output: "refinedstorage:4096k_fluid_storage_part" });
  event.remove({ output: "refinedstorage:disk_drive" });
  event.remove({ output: "refinedstorage:storage_monitor" });
  event.remove({ output: "refinedstorage:controller", input: "refinedstorage:advanced_processor" });
  event.remove({ output: "refinedstorage:grid", input: "refinedstorage:improved_processor" });
  event.remove({ output: "refinedstorage:crafting_grid", input: "refinedstorage:advanced_processor" });
  event.remove({ output: "refinedstorage:pattern_grid", input: "refinedstorage:advanced_processor" });
  event.remove({ output: "refinedstorage:fluid_grid", input: "refinedstorage:advanced_processor" });
  event.remove({ output: "refinedstorage:security_manager", input: "refinedstorage:security_card" });
  event.remove({ output: "refinedstorage:wireless_transmitter", input: "refinedstorage:advanced_processor" });
  event.remove({ output: "refinedstorage:disk_manipulator", input: "refinedstorage:storage_housing" });
  event.remove({ output: "refinedstorage:crafter", input: "refinedstorage:advanced_processor" });
  event.remove({ output: "refinedstorage:crafter_manager", input: "refinedstorage:advanced_processor" });
  event.remove({ output: "refinedstorage:crafting_monitor", input: "refinedstorage:improved_processor" });
  event.remove({ output: "refinedstorage:wireless_grid" });
  event.remove({ output: "refinedstorage:wireless_fluid_grid" });
  event.remove({ output: "refinedstorage:wireless_crafting_monitor" });
  event.remove({ output: "ad_astra:engine_fan" });
  event.remove({ output: "ad_astra:engine_frame" });
  event.remove({ output: "ad_astra:energizer" });
  event.remove({ output: "ad_astra:cryo_freezer" });
  event.remove({ output: "ad_astra:oxygen_sensor" });
  event.remove({ output: "mysticalagriculture:infusion_crystal" });
  event.remove({ output: "mysticalagriculture:infusion_pedestal" });
  event.remove({ output: "mysticalagriculture:infusion_altar" });
  event.remove({ output: "mysticalagriculture:awakening_pedestal" });
  event.remove({ output: "mysticalagriculture:awakening_altar" });
  event.remove({ output: "mysticalagriculture:essence_vessel" });
  event.remove({ output: "ad_astra:calorite_tank" });
  event.remove({ output: "ad_astra:calorite_engine" });
  event.remove({ output: "minecraft:iron_nugget", output: "minecraft:flint", input: "minecraft:gravel" });
  event.remove({ output: "biomesoplenty:black_sand", output: "minecraft:glass" });

  event.replaceInput({}, "thermal:redstone_servo", "kubejs:conductive_mechanism");
  event.replaceInput({}, "thermal:rf_coil", "kubejs:conductive_mechanism");

  //
  // Sequenced Assembly

  // Basic Mechanism, Base = Opgrade Base, 1x Deploying Andesite Alloy, 2x Deploying Cogwheels
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "sophisticatedstorage:upgrade_base",
    },
    results: [
      {
        item: "kubejs:basic_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_basic_mechanism",
          },
          [
            {
              item: "create:andesite_alloy",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_basic_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_basic_mechanism",
          },
          [
            {
              item: "create:cogwheel",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_basic_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_basic_mechanism",
          },
          [
            {
              item: "create:cogwheel",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_basic_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_basic_mechanism",
    },
  });

  // Basic Mechanism, Shaped
  event.shaped("kubejs:basic_mechanism", ["ABA", "CDC", "ABA"], {
    A: "create:andesite_alloy",
    B: "create:cogwheel",
    C: "create:andesite_casing",
    D: "create:shaft",
  });

  // Copper Mechanism, Base = Basic Mechanism, 1x Filling Copper 30mb, 1x Deploying Copper Gear, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:basic_mechanism",
    },
    results: [
      {
        item: "kubejs:copper_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_copper_mechanism",
          },
          [
            {
              item: "thermal:copper_gear",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_copper_mechanism",
          },
        ],
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_copper_mechanism",
          },
          {
            amount: 30,
            fluid: "kubejs:molten_copper",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_copper_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_copper_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_copper_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_copper_mechanism",
    },
  });

  // Copper Mechanism, Shaped
  event.shaped("kubejs:copper_mechanism", ["ABA", "DCD", "ABA"], {
    A: "minecraft:copper_ingot",
    B: "create:cogwheel",
    C: "kubejs:basic_mechanism",
    D: "minecraft:copper_block",
  });

  // Steel Mechanism, Base = Basic Mechanism, 1x Filling Steel 60mb, 2x Deploying Steel Plate, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:basic_mechanism",
    },
    results: [
      {
        item: "kubejs:steel_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
          {
            amount: 30,
            fluid: "createbigcannons:molten_steel",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
          [
            {
              item: "ad_astra:steel_plate",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
          [
            {
              item: "ad_astra:steel_plate",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_steel_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_steel_mechanism",
    },
  });

  // Precision Mechanism, Base = Basic Mechanism, 1x Deploying Brass Sheet, 1x Deploying Electron Tube, 1x Deploying Brass Nugget, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:basic_mechanism",
    },
    results: [
      {
        item: "create:precision_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create:incomplete_precision_mechanism",
          },
          [
            {
              item: "create:brass_sheet",
            },
          ],
        ],
        results: [
          {
            item: "create:incomplete_precision_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create:incomplete_precision_mechanism",
          },
          [
            {
              item: "create:electron_tube",
            },
          ],
        ],
        results: [
          {
            item: "create:incomplete_precision_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create:incomplete_precision_mechanism",
          },
          [
            {
              item: "create:brass_nugget",
            },
          ],
        ],
        results: [
          {
            item: "create:incomplete_precision_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "create:incomplete_precision_mechanism",
          },
        ],
        results: [
          {
            item: "create:incomplete_precision_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "create:incomplete_precision_mechanism",
    },
  });

  // Enchanted Mechanism, Base = Precision Mechanism, 1x Deploying Gem Dust, 1x Deploying Magma Cream, 1x Pressing, 1x Filling Experience 20mb
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "create:precision_mechanism",
    },
    results: [
      {
        item: "kubejs:enchanted_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
          [
            {
              item: "apotheosis:gem_dust",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
        ],
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
          {
            fluid: "create_enchantment_industry:experience",
            amount: 20,
            nbt: {},
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
          [
            {
              item: "minecraft:magma_cream",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_enchanted_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_enchanted_mechanism",
    },
  });

  // Desh Mechanism, Base Steel Mechanism, 1x Filling Molten Desh 100mb, 1x Deplopying Desh Plate, 1x Filling Refined Fuel 100mb, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:steel_mechanism",
    },
    results: [
      {
        item: "kubejs:desh_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
          {
            fluid: "kubejs:molten_desh",
            amount: 100,
            nbt: {},
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
          [
            {
              item: "ad_astra:desh_plate",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
        ],
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
          {
            fluid: "thermal:refined_fuel",
            amount: 100,
            nbt: {},
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_desh_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_desh_mechanism",
    },
  });

  // Mechanical Belt, Base = Cured Rubber, 1x Pressing, 1x Deploying Cured Rubber, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "thermal:cured_rubber",
    },
    results: [
      {
        item: "create:belt_connector",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "thermal:cured_rubber",
          },
        ],
        results: [
          {
            item: "thermal:cured_rubber",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "thermal:cured_rubber",
          },
          [
            {
              item: "thermal:cured_rubber",
            },
          ],
        ],
        results: [
          {
            item: "thermal:cured_rubber",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "thermal:cured_rubber",
          },
        ],
        results: [
          {
            item: "thermal:cured_rubber",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "thermal:cured_rubber",
    },
  });

  // Empty Spool, Base = Iron Nugget, 1x Deploying Iron Sheet
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "minecraft:iron_nugget",
    },
    results: [
      {
        item: "createaddition:spool",
      },
    ],
    loops: 2,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:iron_nugget",
          },
          [
            {
              tag: "forge:plates/iron",
            },
          ],
        ],
        results: [
          {
            item: "minecraft:iron_nugget",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "minecraft:iron_nugget",
    },
  });

  // Conductive Mechanism, Base = Precision Mechanism, 1x Pressing, 1x Deploying Capacitator, 1x Deploying Connector, 1x Deploying Alternatorm, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "create:precision_mechanism",
    },
    results: [
      {
        item: "kubejs:conductive_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "create:precision_mechanism",
          },
        ],
        results: [
          {
            item: "create:precision_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create:precision_mechanism",
          },
          [
            {
              item: "createaddition:capacitor",
            },
          ],
        ],
        results: [
          {
            item: "create:precision_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create:precision_mechanism",
          },
          [
            {
              item: "createaddition:connector",
            },
          ],
        ],
        results: [
          {
            item: "create:precision_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "create:precision_mechanism",
          },
          [
            {
              item: "createaddition:alternator",
            },
          ],
        ],
        results: [
          {
            item: "create:precision_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "create:precision_mechanism",
          },
        ],
        results: [
          {
            item: "create:precision_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "create:precision_mechanism",
    },
  });

  // Refined Mechanism, Base = Conductive Mechanism, 1x Deploying Silicon, 1x Deploying Processor Binding, 1x Filling Molten Nether Quartz, 1x Deploying Raw Basic Processor, 1x Deploying Raw Improved Processor, 1x Deploying Quartz Enriched Iron Ingot
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:conductive_mechanism",
    },
    results: [
      {
        item: "kubejs:refined_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage:silicon",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage:processor_binding",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          {
            fluid: "kubejs:molten_nether_quartz",
            amount: 40,
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage:raw_basic_processor",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage:raw_improved_processor",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage:quartz_enriched_iron",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_refined_mechanism",
    },
  });

  // Ostrum Mechanism, Base = Desh Mechanism, 1x Deploying Ostrum Engine, 1x Pressing, 1x Filling Oxygen, 1x Filling Fuel, 1x Deploying Ostrum Fluid Pipe
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:desh_mechanism",
    },
    results: [
      {
        item: "kubejs:ostrum_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
          [
            {
              item: "ad_astra:ostrum_engine",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
        ],
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
          {
            fluid: "ad_astra:oxygen",
            amount: 90,
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
        ],
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
          {
            fluid: "ad_astra:fuel",
            amount: 120,
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
          [
            {
              item: "ad_astra:ostrum_fluid_pipe",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_ostrum_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_ostrum_mechanism",
    },
  });

  // Mystical Mechanism, Base = Conductive Mechanism, 1x Deploying Prosperity, 1x Imperium Essence, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:conductive_mechanism",
    },
    results: [
      {
        item: "kubejs:mystical_mechanism",
      },
    ],
    loops: 4,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_mystical_mechanism",
          },
          [
            {
              item: "mysticalagriculture:prosperity_shard",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_mystical_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_mystical_mechanism",
          },
          [
            {
              item: "mysticalagriculture:imperium_essence",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_mystical_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_mystical_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_mystical_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_mystical_mechanism",
    },
  });

  // Calorite Mechanism, Base = Ostrum Mechanism, 1x Deploying Solid Fuel Clump, 1x Filling Cryo Fuel, 1x Deploying Calorite Ingot, 1x Pressing, 1x Deploying Cheese
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:ostrum_mechanism",
    },
    results: [
      {
        item: "kubejs:calorite_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },

          [
            {
              item: "kubejs:solid_fuel_clump",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
        ],

        transitionalItem: {
          item: "kubejs:incomplete_calorite_mechanism",
        },
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
          {
            fluid: "ad_astra:cryo_fuel",
            amount: 120,
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
          [
            {
              item: "ad_astra:calorite_ingot",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
          [
            {
              item: "ad_astra:cheese",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_calorite_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_calorite_mechanism",
    },
  });

  // Creative Mechanism, Base = Mystical Mechanism, 1x Deploying Deorum, 1x Deploying 64k Storage Part, 1x Deploying Glacio Stone, 1x Filling Molten Diamond, 1x Deploying Netherite Seeds, 1x Pressing
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "kubejs:mystical_mechanism",
    },
    results: [
      {
        item: "kubejs:creative_mechanism",

        count: 1,
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
          [
            {
              item: "forbidden_arcanus:deorum_ingot",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
          [
            {
              item: "refinedstorage:64k_storage_part",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
          [
            {
              item: "ad_astra:glacio_stone",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
        ],
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
          {
            fluid: "kubejs:molten_diamond",
            amount: 900,
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
          [
            {
              item: "mysticalagriculture:netherite_seeds",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_creative_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_creative_mechanism",
    },
  });

  // Sequenced Assembly
  //

  //
  // Melting

  // Melting Function
  let meltingIngots = (item, namespace) => {
    melting(namespace + ":" + item + "_ingot", "kubejs:molten_" + item, 90);
    melting(namespace + ":" + item + "_nugget", "kubejs:molten_" + item, 10);
  };

  let meltingRaw = (item, namespace) => {
    melting(namespace + ":raw_" + item, "kubejs:molten_" + item, 180);
    melting("create:crushed_" + item + "_ore", "kubejs:molten_" + item, 180);
    melting("createastracompat:crushed_" + item + "_ore", "kubejs:molten_" + item, 180);
  };

  let ingots = [
    { item: "brass", namespace: "create" },
    { item: "iron", namespace: "minecraft" },
    { item: "zinc", namespace: "create" },
    { item: "desh", namespace: "ad_astra" },
    { item: "ostrum", namespace: "ad_astra" },
    { item: "calorite", namespace: "ad_astra" },
    { item: "gold", namespace: "minecraft" },
    { item: "deorum", namespace: "forbidden_arcanus" },
    { item: "signalum", namespace: "thermal" },
    { item: "lumium", namespace: "thermal" },
    { item: "enderium", namespace: "thermal" },
    { item: "tin", namespace: "thermal" },
    { item: "lead", namespace: "thermal" },
    { item: "silver", namespace: "thermal" },
    { item: "nickel", namespace: "thermal" },
    { item: "electrum", namespace: "thermal" },
    { item: "invar", namespace: "thermal" },
    { item: "constantan", namespace: "thermal" },
  ];

  ingots.forEach((item) => {
    meltingIngots(item.item, item.namespace);
  });

  let raw = [
    { item: "iron", namespace: "minecraft" },
    { item: "gold", namespace: "minecraft" },
    { item: "copper", namespace: "create" },
    { item: "zinc", namespace: "create" },
    { item: "desh", namespace: "ad_astra" },
    { item: "ostrum", namespace: "ad_astra" },
    { item: "calorite", namespace: "ad_astra" },
    { item: "tin", namespace: "thermal" },
    { item: "lead", namespace: "thermal" },
    { item: "silver", namespace: "thermal" },
    { item: "nickel", namespace: "thermal" },
  ];

  raw.forEach((item) => {
    meltingRaw(item.item, item.namespace);
  });

  // Nether Quartz into 40mb Molten Nether Quartz
  melting("minecraft:quartz", "kubejs:molten_nether_quartz", 40);

  // Copper Ingot into 90mb Molten Copper
  melting("minecraft:copper_ingot", "kubejs:molten_copper", 90);

  // Copper Nugget into 10mb Molten Copper
  melting("create:copper_nugget", "kubejs:molten_copper", 10);

  // Polished Rose Quartz into 30mb Destabilized Redstone
  melting("create:polished_rose_quartz", "thermal:redstone", 30);

  // Netherite Ingot into 90mb Molten Netherite
  melting("minecraft:netherite_ingot", "kubejs:molten_netherite", 90);

  // Netherite Nugget into 10mb Molten Netherite
  melting("createdeco:netherite_nugget", "kubejs:molten_netherite", 10);

  // Obsidian Ingot into 90mb Molten Obsidian
  melting("forbidden_arcanus:obsidian_ingot", "kubejs:molten_obsidian", 90);

  // Prosperity Sard into 30mb Molten Prosperity
  melting("mysticalagriculture:prosperity_shard", "kubejs:molten_prosperity", 30);

  // Diamond into 90mb Molten Diamond
  melting("minecraft:diamond", "kubejs:molten_diamond", 90);

  // Emerald into 90mb Molten Emerald
  melting("minecraft:emerald", "kubejs:molten_emerald", 90);

  // Lapis Lazuli into 90mb Molten Lapis Lazuli
  melting("minecraft:lapis_lazuli", "kubejs:molten_lapis", 90);

  // Redstone into 90mb Molten Redstone
  melting("minecraft:redstone", "kubejs:molten_redstone", 90);

  // Pendorite Ingot into 90mb Molten Pendorite
  melting("byg:pendorite_ingot", "kubejs:molten_pendorite", 90);

  // Melting
  //

  //
  // Milling

  // Flint into Gray Dye, 200, 90%
  milling("minecraft:flint", "minecraft:gray_dye", 200, 0.9, 1);

  // Granite into Orange Dye, 200, 90%
  milling("minecraft:granite", "minecraft:orange_dye", 200, 0.9, 1);

  // Gravel Into Sand, 125, 100%
  milling("minecraft:gravel", "minecraft:sand", 125, 1.0, 1);

  // Netherrack into Cinder Flour, 100, 80%
  milling("minecraft:netherrack", "create:cinder_flour", 100, 0.8, 1);

  // Brass Ingot into Brass Nuggets, 100, 100%, 6
  milling("create:brass_ingot", "create:brass_nugget", 100, 1.0, 6);

  // Kelp into Lime Dye, 75, 100%, 2
  milling("minecraft:kelp", "minecraft:lime_dye", 75, 1.0, 2);

  // Moon Stone into Moon Cobblestone, 200, 100%, 1
  milling("ad_astra:moon_stone", "ad_astra:moon_cobblestone", 200, 1.0, 1);

  // Moon Cobblestone into Moon Sand, 200, 100%, 1
  milling("ad_astra:moon_cobblestone", "ad_astra:moon_sand", 200, 1.0, 1);

  // Mars Stone into Mars Cobblestone, 200, 100%, 1
  milling("ad_astra:mars_stone", "ad_astra:mars_cobblestone", 200, 1.0, 1);

  // Mars Cobblestone into Mars Sand, 200, 100%, 1
  milling("ad_astra:mars_cobblestone", "ad_astra:mars_sand", 200, 1.0, 1);

  // Milling
  //

  //
  // Mixing

  // Gray Dye + Cobblestone = Tuff, 1
  mixing("minecraft:gray_dye", "minecraft:cobblestone", "minecraft:tuff", 1);

  // Tuff + Iron Nuggets = Andesite Alloy, 1
  mixing("minecraft:tuff", "#forge:nuggets/iron", "create:andesite_alloy", 1);

  // Tuff + Zinc Nuggets = Andesite Alloy, 1
  mixing("minecraft:tuff", "#forge:nuggets/zinc", "create:andesite_alloy", 1);

  // Molten Nether Quartz + Cobblestone = Diorite, 1
  mixing("kubejs:molten_nether_quartz", "minecraft:cobblestone", "minecraft:diorite", 1);

  // Molten Nether Quartz + Diorite = Andesite, 1
  mixing("kubejs:molten_nether_quartz", "minecraft:diorite", "minecraft:andesite", 1);

  // Molten Nether Quartz + Andesite = Granite, 1
  mixing("kubejs:molten_nether_quartz", "minecraft:andesite", "minecraft:granite", 1);

  // Orange Dye + Sand = Orange Sand,
  mixing("minecraft:orange_dye", "minecraft:sand", "biomesoplenty:orange_sand", 1);

  // Blackstone + Flint = Black Sand
  mixing("minecraft:blackstone", "minecraft:flint", "biomesoplenty:black_sand", 1);

  // Molten Copper + Gearworking Die = Copper Gear, 1, Gearworking Die, 1
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 180,
        fluid: "kubejs:molten_copper",
      },
      {
        item: "thermal:press_gear_die",
      },
    ],
    results: [
      {
        item: "thermal:copper_gear",
      },
      {
        item: "thermal:press_gear_die",
      },
    ],
  });

  // Heated, 1 Coal + 3 Iron Ingot = 180mb Molten Steel
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "minecraft:coal",
      },
      {
        item: "minecraft:iron_ingot",
      },
      {
        item: "minecraft:iron_ingot",
      },
      {
        item: "minecraft:iron_ingot",
      },
    ],
    results: [
      {
        amount: 180,
        fluid: "createbigcannons:molten_steel",
      },
    ],
  });

  // 25mb Lava + Cobblestone = Netherrack
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 25,
        fluid: "minecraft:lava",
      },
      {
        item: "minecraft:cobblestone",
      },
    ],
    results: [
      {
        item: "minecraft:netherrack",
      },
    ],
  });

  // Heated, 150mb Molten Iron + 1 Coal = 90mb Molten Steel
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        amount: 150,
        fluid: "kubejs:molten_iron",
      },
      {
        item: "minecraft:coal",
      },
    ],
    results: [
      {
        amount: 90,
        fluid: "createbigcannons:molten_steel",
      },
    ],
  });

  // Heated, Molten Copper + Molten Zinc = Molten Brass
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        amount: 90,
        fluid: "kubejs:molten_copper",
      },
      {
        amount: 90,
        fluid: "kubejs:molten_zinc",
      },
    ],
    results: [
      {
        amount: 180,
        fluid: "kubejs:molten_brass",
      },
    ],
  });

  // Molten Nether Quartz + Soul Sand = Glowstone
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 90,
        fluid: "kubejs:molten_nether_quartz",
      },
      {
        item: "minecraft:soul_sand",
      },
    ],
    results: [
      {
        item: "minecraft:glowstone",
      },
    ],
  });

  // Heated, 150mb Water + Coal + Sulfur Dust = 100mb Oil
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 150,
        fluid: "minecraft:water",
      },
      {
        item: "minecraft:coal",
      },
      {
        item: "thermal:sulfur_dust",
      },
    ],
    results: [
      {
        amount: 100,
        fluid: "ad_astra:oil",
      },
    ],
  });

  // Heated, 100mb Oil + 200mb Water = 75mb Light Oil + 75mb Sulfuric Heavy Oil
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        amount: 100,
        fluid: "ad_astra:oil",
      },
      {
        amount: 200,
        fluid: "minecraft:water",
      },
    ],
    results: [
      {
        amount: 75,
        fluid: "thermal:light_oil",
      },
      {
        amount: 50,
        fluid: "kubejs:sulfuric_heavy_oil",
      },
    ],
  });

  // Heated, 75mb Light Oil + Solid Fuel Clump = 100mb Refined Fuel
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        amount: 75,
        fluid: "thermal:light_oil",
      },
      {
        item: "kubejs:solid_fuel_clump",
      },
    ],
    results: [
      {
        amount: 100,
        fluid: "thermal:refined_fuel",
      },
    ],
  });

  // Heated, 50mb Fuel + Solid Fuel Clump = 50mb Refined Fuel
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        amount: 50,
        fluid: "ad_astra:fuel",
      },
      {
        item: "kubejs:solid_fuel_clump",
      },
    ],
    results: [
      {
        amount: 50,
        fluid: "thermal:refined_fuel",
      },
    ],
  });

  // Heated, 50mb Refined Fuel + 25mb Oxygen = 50mb Fuel
  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        amount: 50,
        fluid: "thermal:refined_fuel",
      },
      {
        amount: 25,
        fluid: "ad_astra:oxygen",
      },
    ],
    results: [
      {
        amount: 50,
        fluid: "ad_astra:fuel",
      },
    ],
  });

  // 50mb Destabilized Redstone + Iron Nugget + Silicon + Processor Binding = Raw Basic Processor
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 50,
        fluid: "thermal:redstone",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "refinedstorage:silicon",
      },
      {
        item: "refinedstorage:processor_binding",
      },
    ],
    results: [
      {
        item: "refinedstorage:raw_basic_processor",
      },
    ],
  });

  // 50mb Destabilized Redstone + Gold Nugget + Silicon + Processor Binding = Raw Improved Processor
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 50,
        fluid: "thermal:redstone",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "refinedstorage:silicon",
      },
      {
        item: "refinedstorage:processor_binding",
      },
    ],
    results: [
      {
        item: "refinedstorage:raw_improved_processor",
      },
    ],
  });

  // 50mb Destabilized Redstone + Diamond + Silicon + Processor Binding = Raw Advanced Processor
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        amount: 50,
        fluid: "thermal:redstone",
      },
      {
        item: "minecraft:diamond",
      },
      {
        item: "refinedstorage:silicon",
      },
      {
        item: "refinedstorage:processor_binding",
      },
    ],
    results: [
      {
        item: "refinedstorage:raw_advanced_processor",
      },
    ],
  });

  // Mixing
  //

  //
  // Blasting

  // Gravel into Flint
  event.blasting("minecraft:flint", "minecraft:gravel");

  // Black Sand into Coal
  event.blasting("minecraft:coal", "biomesoplenty:black_sand");

  // Cinder Flour into Redstone
  event.blasting("minecraft:redstone", "create:cinder_flour");

  // Blasting
  //

  //
  // Shaped

  // Andesite Alloy, Shaped, 2 iron nuggets, 2 tuff, cross pattern 2x2
  event.shaped("create:andesite_alloy", ["IT", "TI"], {
    I: "#forge:nuggets/iron",
    T: "minecraft:tuff",
  });

  // Andesite Alloy, Shaped, 2 iron nuggets, 2 tuff, cross pattern 2x2
  event.shaped("create:andesite_alloy", ["TI", "IT"], {
    I: "#forge:nuggets/iron",
    T: "minecraft:tuff",
  });

  // Andesite Alloy, Shaped, 2 zinc nuggets, 2 tuff, cross pattern 2x2
  event.shaped("create:andesite_alloy", ["TI", "IT"], {
    I: "#forge:nuggets/zinc",
    T: "minecraft:tuff",
  });

  // Andesite Alloy, Shaped, 2 zinc nuggets, 2 tuff, cross pattern 2x2
  event.shaped("create:andesite_alloy", ["IT", "TI"], {
    I: "#forge:nuggets/zinc",
    T: "minecraft:tuff",
  });

  // 4x Zinc Plate + Diamond Gear = Gearworking Die
  event.shaped(Item.of("thermal:press_gear_die"), [" Z ", "ZDZ", " Z "], {
    D: "thermal:diamond_gear",
    Z: "createdeco:zinc_sheet",
  });

  // Basic Mechanism, Andesite Casing, Propeller = Encased Fan
  event.shaped(Item.of("create:encased_fan"), ["C", "A", "B"], { A: "create:andesite_casing", B: "create:propeller", C: "kubejs:basic_mechanism" });

  // Basic Mechanism, Stone, Andesite Casing = Millstone
  event.shaped(Item.of("create:millstone"), ["C", "B", "A"], { A: "create:andesite_casing", B: "#forge:stone", C: "kubejs:basic_mechanism" });

  // Basic Mechanism, Andesite Casing, Iron Block = Mechanical Press
  event.shaped(Item.of("create:mechanical_press"), ["C", "A", "B"], { A: "create:andesite_casing", B: "minecraft:iron_block", C: "kubejs:basic_mechanism" });

  // Basic Mechanism, Andesite Casing, Whisk = Mechanical Mixer
  event.shaped(Item.of("create:mechanical_mixer"), ["C", "A", "B"], { A: "create:andesite_casing", B: "create:whisk", C: "kubejs:basic_mechanism" });

  // Wooden Slabs, Stone, Basic Mechanism = Windmill Bearing
  event.shaped(Item.of("create:windmill_bearing"), ["C", "A", "B"], { A: "#forge:stone", B: "kubejs:basic_mechanism", C: "#minecraft:wooden_slabs" });

  // Wooden Slabs, Andesite Casing, Basic Mechanism = Mechanical Bearing
  event.shaped(Item.of("create:mechanical_bearing"), ["C", "A", "B"], { A: "create:andesite_casing", B: "kubejs:basic_mechanism", C: "#minecraft:wooden_slabs" });

  // Basic Mechanism, Wool, Plates/Iron = Rope Pulley
  event.shaped(Item.of("create:rope_pulley"), ["B", "A", "C"], { A: "#minecraft:wool", B: "kubejs:basic_mechanism", C: "#forge:plates/iron" });

  // Wooden Slabs, Basic Mechanism, Piston Extension Pole = Mechanical Piston
  event.shaped(Item.of("create:mechanical_piston"), ["C", "B", "A"], { A: "create:piston_extension_pole", B: "kubejs:basic_mechanism", C: "#minecraft:wooden_slabs" });

  // Plates/Iron, Andesite Alloy, Basic Mechanism, Andesite Alloy, Andesite Casing = Mechanical Harvester
  event.shaped(Item.of("create:mechanical_harvester"), ["CDC", "CBC", " A "], { A: "create:andesite_casing", B: "kubejs:basic_mechanism", C: "create:andesite_alloy", D: "#forge:plates/iron" });

  // 3x Plates/Iron, Andesite Alloy, Basic Mechanism, Andesite Alloy, Andesite Casing = Mechanical Plough
  event.shaped(Item.of("create:mechanical_plough"), ["DDD", "CBC", " A "], { A: "create:andesite_casing", B: "kubejs:basic_mechanism", C: "create:andesite_alloy", D: "#forge:plates/iron" });

  // Andesite Alloy, 4x Plates/Zinc = Zinc Hand
  event.shaped(Item.of("kubejs:zinc_hand"), [" A ", "BBB", " B "], { A: "create:andesite_alloy", B: "#forge:plates/zinc" });

  // Basic Mechanism, Andesite Casing, Turntable = Slicer
  event.shaped(Item.of("sliceanddice:slicer"), ["A", "B", "C"], { A: "kubejs:basic_mechanism", B: "create:andesite_casing", C: "create:turntable" });

  // Planks, Andesite Casing, Sticks, Basic Mechanism, Stone = Sifter
  event.shaped(Item.of("createsifter:sifter"), ["ABA", "DCD", " E "], { A: "#minecraft:planks", B: "create:andesite_casing", C: "kubejs:basic_mechanism", D: "#forge:rods/wooden", E: "#forge:stone" });

  // Plates/Iron, Shaft, Andesite Alloy, Basic Mechanism, Andesite Casing = Rolling Mill
  event.shaped(Item.of("createaddition:rolling_mill"), ["ABA", "CDC", "CEC"], {
    A: "#forge:plates/iron",
    B: "create:shaft",
    C: "create:andesite_alloy",
    D: "kubejs:basic_mechanism",
    E: "create:andesite_casing",
  });

  // 8 Minecraft Logs, Water Bucket = Rubber
  event
    .shaped(Item.of("4x thermal:rubber"), ["AAA", "ABA", "AAA"], { A: "#minecraft:logs_that_burn", B: "minecraft:water_bucket" })
    .replaceIngredient("minecraft:water_bucket", "minecraft:water_bucket");

  // Copper Mechanism, Cured Rubber = Spout
  event.shaped(Item.of("create:spout"), ["A", "B"], { A: "kubejs:copper_mechanism", B: "thermal:cured_rubber" });

  // Copper Mechanism, Cured Rubber, Plates/Iron = Printer
  event.shaped(Item.of("create_enchantment_industry:printer"), ["A", "B", "C"], { A: "kubejs:copper_mechanism", B: "thermal:cured_rubber", C: "#forge:plates/iron" });

  // Plates/Copper, Copper Mechanism, Barrel = Fluid Tank
  event.shaped(Item.of("create:fluid_tank"), ["ABA", "ACA", "ABA"], { A: "#forge:plates/copper", B: "kubejs:copper_mechanism", C: "minecraft:barrel" });

  // Copper Mechanism, Dried Kelp Block, Plates/Copper = Hose Pulley
  event.shaped(Item.of("create:hose_pulley"), ["B", "C", "A"], { A: "#forge:plates/copper", B: "kubejs:copper_mechanism", C: "minecraft:dried_kelp_block" });

  // Iron Bars, Copper Mechanism = Item Drain
  event.shaped(Item.of("create:item_drain"), ["B", "A"], { A: "kubejs:copper_mechanism", B: "minecraft:iron_bars" });

  // Plates/Gold, Fluid Pipe, Copper Mechanism = Smart Fluid Pipe
  event.shaped(Item.of("create:smart_fluid_pipe"), ["A", "B", "C"], { A: "#forge:plates/gold", B: "create:fluid_pipe", C: "kubejs:copper_mechanism" });

  // Plates/Iron, Fluid Pipe, Copper Mechanism = Fluid Valve
  event.shaped(Item.of("create:fluid_valve"), ["A", "B", "C"], { A: "#forge:plates/iron", B: "create:fluid_pipe", C: "kubejs:copper_mechanism" });

  // Sandpaper, Copper Casing, Copper Mechanism = Disenchanter
  event.shaped(Item.of("create_enchantment_industry:disenchanter"), ["C", "A", "B"], { A: "create:copper_casing", B: "kubejs:copper_mechanism", C: "#create:sandpaper" });

  // Plates/Steel, Steel Mechanism, Engine Frame, Engine Fan = Steel Engine
  event.shaped(Item.of("ad_astra:steel_engine"), ["ABA", " C ", " D "], {
    A: "#forge:plates/steel",
    B: "kubejs:steel_mechanism",
    C: "ad_astra:engine_frame",
    D: "ad_astra:engine_fan",
  });

  // Plates/Desh, Desh Mechanism, Engine Frame, Engine Fan = Desh Engine
  event.shaped(Item.of("ad_astra:desh_engine"), ["ABA", " C ", " D "], {
    A: "#forge:plates/desh",
    B: "kubejs:desh_mechanism",
    C: "ad_astra:engine_frame",
    D: "ad_astra:engine_fan",
  });

  // Plates/Iron, Steel Mechanism, Furnace = Coal Generator
  event.shaped(Item.of("ad_astra:coal_generator"), ["ABA", "ACA", "ABA"], { A: "#forge:plates/iron", B: "kubejs:steel_mechanism", C: "minecraft:furnace" });

  // Plates/Iron, Piston, Steel Mechanism = Compressor
  event.shaped(Item.of("ad_astra:compressor"), ["ABA", "ACA", "ABA"], { A: "#forge:plates/iron", B: "minecraft:piston", C: "kubejs:steel_mechanism" });

  // Redstone Torch, Lever, Steel Mechanism, Crafting Table, Block of Redstone, Steel Block = Nasa Workbench
  event.shaped(Item.of("ad_astra:nasa_workbench"), ["ACA", "CDC", "EFE"], {
    A: "minecraft:redstone_torch",
    C: "kubejs:steel_mechanism",
    D: "minecraft:crafting_table",
    E: "minecraft:redstone_block",
    F: "#forge:storage_blocks/steel",
  });

  // Plates/Steel, Bucket, Steel Mechanism = Fuel Refinery
  event.shaped(Item.of("ad_astra:fuel_refinery"), ["AAA", "BCB", "AAA"], { A: "#forge:plates/steel", B: "minecraft:bucket", C: "kubejs:steel_mechanism" });

  // Plates/Steel, Engine Fan, Oxygen Tank, Steel Mechanism, Block of Redstone = Oxygen Loader
  event.shaped(Item.of("ad_astra:oxygen_loader"), ["ABA", "CDC", "AEA"], {
    A: "#forge:plates/steel",
    B: "ad_astra:engine_fan",
    C: "ad_astra:oxygen_tank",
    D: "kubejs:steel_mechanism",
    E: "minecraft:redstone_block",
  });

  // Plates/Steel, Steel Mechanism, Bucket, Rods/Iron = Steel Tank
  event.shaped(Item.of("ad_astra:steel_tank"), ["BA ", "ACD", "BA "], { A: "#forge:plates/steel", B: "kubejs:steel_mechanism", C: "minecraft:bucket", D: "#forge:rods/iron" });

  // Plates/Desh, Desh Mechanism, Bucket, Rods/Iron = Desh Tank
  event.shaped(Item.of("ad_astra:desh_tank"), ["BA ", "ACD", "BA "], { A: "#forge:plates/desh", B: "kubejs:desh_mechanism", C: "minecraft:bucket", D: "#forge:rods/iron" });

  // Plates/Ostrum, Ostrum Mechanism, Bucket, Rods/Iron = Ostrum Tank
  event.shaped(Item.of("ad_astra:ostrum_tank"), ["BA ", "ACD", "BA "], { A: "#forge:plates/ostrum", B: "kubejs:ostrum_mechanism", C: "minecraft:bucket", D: "#forge:rods/iron" });

  // Blue Stained Glass, Plates/Steel, Desh Mechanism, Plates/Desh = Solar Panel
  event.shaped(Item.of("ad_astra:solar_panel"), ["AAA", "BCB", "CDC"], { A: "minecraft:blue_stained_glass", B: "#forge:plates/steel", C: "kubejs:desh_mechanism", D: "#forge:plates/desh" });

  // Engine Fan, Desh Mechanism, Oxygen Tank, Oxygen Loader, Plates/Desh, Oxygen Gear = Oxygen Distributor
  event.shaped(Item.of("ad_astra:oxygen_distributor"), ["ABA", "CDC", "EFE"], {
    A: "ad_astra:engine_fan",
    B: "kubejs:desh_mechanism",
    C: "ad_astra:oxygen_tank",
    D: "ad_astra:oxygen_loader",
    E: "#forge:plates/desh",
    F: "ad_astra:oxygen_gear",
  });

  // Desh Mechanism, Dispenser, Plates/Desh, Hopper = Water Pump
  event.shaped(Item.of("ad_astra:water_pump"), ["ADA", "DCD", "ABA"], { A: "kubejs:desh_mechanism", B: "minecraft:dispenser", C: "#forge:plates/desh", D: "minecraft:hopper" });

  // Plates/Gold, Engine, Copper Block = Steam Engine
  event.shaped(Item.of("create:steam_engine"), ["A", "B", "C"], { A: "#forge:plates/gold", B: "immersive_aircraft:engine", C: "minecraft:copper_block" });

  // Electron Tube, Precision Mechanism, Cured Rubber = Brass Funnel
  event.shaped(Item.of("create:brass_funnel"), ["A", "B", "C"], { A: "create:electron_tube", B: "create:precision_mechanism", C: "thermal:cured_rubber" });

  // Electron Tube, Precision Mechanism, Cured Rubber = Brass Tunnel
  event.shaped(Item.of("create:brass_tunnel"), ["AA", "BB", "CC"], { A: "create:electron_tube", B: "create:precision_mechanism", C: "thermal:cured_rubber" });

  // Basic Mechanism, Cured Rubber = Andesite Funnel
  event.shaped(Item.of("create:andesite_funnel"), ["A", "B"], { A: "kubejs:basic_mechanism", B: "thermal:cured_rubber" });

  // Basic Mechanism, Cured Rubber = Andesite Tunnel
  event.shaped(Item.of("create:andesite_tunnel"), ["AA", "BB"], { A: "kubejs:basic_mechanism", B: "thermal:cured_rubber" });

  // Cured Rubber = Mechanical Belt
  event.shaped(Item.of("create:belt_connector"), ["AAA"], { A: "thermal:cured_rubber" });

  // Precision Mechanism, High Speed Module, Redstone Block = Pipe Pressurizer
  event.shaped(Item.of("prettypipes:pressurizer"), ["ABA", "DCD", "ABA"], {
    A: "create:precision_mechanism",
    B: "prettypipes:high_speed_module",
    C: "minecraft:redstone_block",
    D: "create:brass_funnel",
  });

  // Precision Mechanism, Craftin Table, Redstone Dust, Item Terminal = Crafting Terminal
  event.shaped(Item.of("prettypipes:crafting_terminal"), ["ABA", "CDC", "ABA"], {
    A: "create:precision_mechanism",
    B: "minecraft:crafting_table",
    C: "minecraft:redstone",
    D: "prettypipes:item_terminal",
  });

  // Basic Mechanism, Ender Pearl, Iron Block, High Retrieval Module, Chest, High Extraction Module = Item Terminal
  event.shaped(Item.of("prettypipes:item_terminal"), ["ABC", "DFE", "CBA"], {
    A: "kubejs:basic_mechanism",
    B: "minecraft:ender_pearl",
    C: "minecraft:iron_block",
    D: "prettypipes:high_retrieval_module",
    E: "prettypipes:high_extraction_module",
    F: "#forge:chests",
  });

  // Precision Mechanism, Iron Bars, Glass, Brass Ingot = Pipe
  event.shaped(Item.of("prettypipes:pipe"), [" A ", "BCB", " D "], { A: "create:precision_mechanism", B: "minecraft:iron_bars", C: "#forge:glass", D: "create:brass_ingot" });

  // Rods/Copper, Conductive Mechanism, Brass Casing, Gold Wire = Accumulator
  event.shaped(Item.of("createaddition:modular_accumulator"), [" B ", "DCD", "ABA"], {
    A: "#forge:rods/copper",
    B: "kubejs:conductive_mechanism",
    C: "create:brass_casing",
    D: "createaddition:gold_wire",
  });

  // Planks, Iron Gear, Glass, Bucket, Redstone Servo = Arboreal Extractor
  event.shaped(Item.of("thermal:device_tree_extractor"), ["ABA", "CDC", "AEA"], {
    A: "#minecraft:planks",
    B: "thermal:iron_gear",
    C: "#forge:glass",
    D: "minecraft:bucket",
    E: "thermal:redstone_servo",
  });

  // Planks, Copper Gear, Glass, Fishing Rod, Redstone Servo = Aquatic Entangler
  event.shaped(Item.of("thermal:device_fisher"), ["ABA", "CDC", "AEA"], {
    A: "#minecraft:planks",
    B: "thermal:copper_gear",
    C: "#forge:glass",
    D: "minecraft:fishing_rod",
    E: "thermal:redstone_servo",
  });

  // Planks, Iron Gear, Glass, Composter, Redstone Servo = Batch Composter
  event.shaped(Item.of("thermal:device_composter"), ["ABA", "CDC", "AEA"], {
    A: "#minecraft:planks",
    B: "thermal:iron_gear",
    C: "#forge:glass",
    D: "minecraft:composter",
    E: "thermal:redstone_servo",
  });

  // Conductive Mechanism, Glass, Tin Gear = Machine Frame
  event.shaped(Item.of("thermal:machine_frame"), ["ABA", "BCB", "ABA"], { A: "kubejs:conductive_mechanism", B: "#forge:glass", C: "thermal:tin_gear" });

  // Enchanted Mechanism, Netherite Ingot, Gem Dust, Enchanting Table, Nether Bricks = Reforing Table
  event.shaped(Item.of("apotheosis:reforging_table"), ["ABA", "CDC", "EEE"], {
    A: "kubejs:enchanted_mechanism",
    B: "minecraft:netherite_ingot",
    C: "apotheosis:gem_dust",
    D: "minecraft:enchanting_table",
    E: "minecraft:nether_bricks",
  });

  // Smooth Stone, Shears, Enchanted Mechanism, Gem Dust, Planks = Gem Cutting Table
  event.shaped(Item.of("apotheosis:gem_cutting_table"), ["ABA", "CDC", "ECE"], {
    A: "minecraft:smooth_stone",
    B: "minecraft:shears",
    C: "kubejs:enchanted_mechanism",
    D: "apotheosis:gem_dust",
    E: "#minecraft:planks",
  });

  // Enchanted Mechanism, Iron Pickaxe, Smithing Table, Iron Axe, Gem Dust, Lava Bucket = Salvaging Table
  event.shaped(Item.of("apotheosis:salvaging_table"), ["ABA", "CDC", "EFE"], {
    A: "kubejs:enchanted_mechanism",
    B: "minecraft:iron_pickaxe",
    C: "minecraft:smithing_table",
    D: "minecraft:iron_axe",
    E: "apotheosis:gem_dust",
    F: "minecraft:lava_bucket",
  });

  // Enchanted Mechanism, Dragon's Breath, Gem Dust, Lodestone, Amethyst Shard = Sigil of Socketing
  event.shaped(Item.of("apotheosis:sigil_of_socketing"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:enchanted_mechanism",
    B: "minecraft:dragon_breath",
    C: "apotheosis:gem_dust",
    D: "minecraft:lodestone",
    E: "minecraft:amethyst_shard",
  });

  // Refined Mechanism, Quartz Enriched Iron, Glass, Redstone, Silicon = 1k Storage Part
  event.shaped(Item.of("refinedstorage:1k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "#forge:glass",
    D: "refinedstorage:silicon",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, 1k Storage Part, Redstone, Basic Processor = 4k Storage Part
  event.shaped(Item.of("refinedstorage:4k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "refinedstorage:1k_storage_part",
    D: "refinedstorage:basic_processor",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, 4k Storage Part, Redstone, Improved Processor = 16k Storage Part
  event.shaped(Item.of("refinedstorage:16k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "refinedstorage:4k_storage_part",
    D: "refinedstorage:improved_processor",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, 16k Storage Part, Redstone, Advanced Processor = 64k Storage Part
  event.shaped(Item.of("refinedstorage:64k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "refinedstorage:16k_storage_part",
    D: "refinedstorage:advanced_processor",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, Glass, Bucket, Silicon = 64k Fluid Storage Part
  event.shaped(Item.of("refinedstorage:64k_fluid_storage_part"), ["ABE", "CDC", "ECA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "#forge:glass",
    D: "minecraft:bucket",
    E: "refinedstorage:silicon",
  });

  // Refined Mechanism, Quartz Enriched Iron, 64k Fluid Storage Part, Bucket, Basic Processor = 256k Fluid Storage Part
  event.shaped(Item.of("refinedstorage:256k_fluid_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "refinedstorage:64k_fluid_storage_part",
    D: "refinedstorage:basic_processor",
    E: "minecraft:bucket",
  });

  // Refined Mechanism, Quartz Enriched Iron, 256k Fluid Storage Part, Bucket, Improved Processor = 1024k Fluid Storage Part
  event.shaped(Item.of("refinedstorage:1024k_fluid_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "refinedstorage:256k_fluid_storage_part",
    D: "refinedstorage:improved_processor",
    E: "minecraft:bucket",
  });

  // Refined Mechanism, Quartz Enriched Iron, 1024k Fluid Storage Part, Bucket, Advanced Processor = 4096k Fluid Storage Part
  event.shaped(Item.of("refinedstorage:4096k_fluid_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:quartz_enriched_iron",
    C: "refinedstorage:1024k_fluid_storage_part",
    D: "refinedstorage:advanced_processor",
    E: "minecraft:bucket",
  });

  // Quartz Enriched Iron, Chest, Refined Mechanism, Machine Casing, Advanced Processor = Disk Drive
  event.shaped(Item.of("refinedstorage:disk_drive"), ["ABA", "CDC", "AEA"], {
    A: "refinedstorage:quartz_enriched_iron",
    B: "minecraft:chest",
    C: "kubejs:refined_mechanism",
    D: "refinedstorage:machine_casing",
    E: "refinedstorage:advanced_processor",
  });

  // Basic Processor, Construction Core, Glass, Refined Mechanism, Machine Casing, Destruction Core = Storage Monitor
  event.shaped(Item.of("refinedstorage:storage_monitor"), ["ABC", "DEC", "AFC"], {
    A: "refinedstorage:basic_processor",
    B: "refinedstorage:construction_core",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage:machine_casing",
    F: "refinedstorage:destruction_core",
  });

  // Refined Mechanism, Advanced Processor, Silicon, Machine Casing = Controller
  event.shaped(Item.of("refinedstorage:controller"), ["ABA", "CDC", "ACA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:advanced_processor",
    C: "refinedstorage:silicon",
    D: "refinedstorage:machine_casing",
  });

  // Improved Processor, Construction Core, Glass, Refined Mechanism, Machine Casing, Destruction Core = Grid
  event.shaped(Item.of("refinedstorage:grid"), ["ABC", "DEC", "AFC"], {
    A: "refinedstorage:improved_processor",
    B: "refinedstorage:construction_core",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage:machine_casing",
    F: "refinedstorage:destruction_core",
  });

  // Refined Mechanism, Chest, Security Card, Machine Casing = Security Manager
  event.shaped(Item.of("refinedstorage:security_manager"), ["ABA", "CDC", "ACA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:chest",
    C: "refinedstorage:security_card",
    D: "refinedstorage:machine_casing",
  });

  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Machine Casing, Advanced Processor = Wireless Transmitter
  event.shaped(Item.of("refinedstorage:wireless_transmitter"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage:quartz_enriched_iron",
    D: "refinedstorage:machine_casing",
    E: "refinedstorage:advanced_processor",
  });

  // Refined Mechanism, Storage Housing, Construction Core, Machine Casing, Destruction Core = Disk Manipulator
  event.shaped(Item.of("refinedstorage:disk_manipulator"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:storage_housing",
    C: "refinedstorage:construction_core",
    D: "refinedstorage:machine_casing",
    E: "refinedstorage:destruction_core",
  });

  // Refined Mechanism, Construction Core, Advanced Processor, Machine Casing, Destruction Core = Crafter
  event.shaped(Item.of("refinedstorage:crafter"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage:construction_core",
    C: "refinedstorage:advanced_processor",
    D: "refinedstorage:machine_casing",
    E: "refinedstorage:destruction_core",
  });

  // Advanced Processor, Crafter, Glass, Refined Mechanism, Machine Casing = Crafter Manager
  event.shaped(Item.of("refinedstorage:crafter_manager"), ["ABC", "DEC", "ABC"], {
    A: "refinedstorage:advanced_processor",
    B: "#refinedstorage:crafter",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage:machine_casing",
  });

  // Improved Processor, Pattern, Glass, Refined Mechanism, Machine Casing = Crafting Monitor
  event.shaped(Item.of("refinedstorage:crafting_monitor"), ["ABC", "DEC", "ABC"], {
    A: "refinedstorage:improved_processor",
    B: "refinedstorage:pattern",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage:machine_casing",
  });

  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Grid, Advanced Processor = Wireless Grid
  event.shaped(Item.of("refinedstorage:wireless_grid"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage:quartz_enriched_iron",
    D: "#refinedstorage:grid",
    E: "refinedstorage:advanced_processor",
  });

  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Fluid Grid, Advanced Processor = Wireless Fluid Grid
  event.shaped(Item.of("refinedstorage:wireless_fluid_grid"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage:quartz_enriched_iron",
    D: "#refinedstorage:fluid_grid",
    E: "refinedstorage:advanced_processor",
  });

  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Crafting Grid, Advanced Processor = Wireless Crafting Grid
  event.shaped(Item.of("refinedstorage:wireless_crafting_monitor"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage:quartz_enriched_iron",
    D: "#refinedstorage:crafting_monitor",
    E: "refinedstorage:advanced_processor",
  });

  // Rods/Steel, Plates/Steel = Engine Fan
  event.shaped(Item.of("ad_astra:engine_fan"), [" A ", "ABA", " A "], { A: "kubejs:steel_rod", B: "#forge:plates/steel" });

  // Rods/Steel, Plates/Steel = Engine Frame
  event.shaped(Item.of("ad_astra:engine_frame"), ["AAA", "ABA", "AAA"], { A: "kubejs:steel_rod", B: "#forge:plates/steel" });

  // Ostrum Mechanism, Diamond, Ostrum Plate, Diamond Block, Ostrum Block = Energizer
  event.shaped(Item.of("ad_astra:energizer"), ["ABA", "CDC", "EAE"], {
    A: "kubejs:ostrum_mechanism",
    B: "minecraft:diamond",
    C: "ad_astra:ostrum_plate",
    D: "minecraft:diamond_block",
    E: "ad_astra:ostrum_block",
  });

  // Ostrum Plate, Ostrum Mechanism, Ostrum Tank, Ostrum Block = Cryo Freezer
  event.shaped(Item.of("ad_astra:cryo_freezer"), ["ABA", "BCB", "DBD"], {
    A: "ad_astra:ostrum_plate",
    B: "kubejs:ostrum_mechanism",
    C: "ad_astra:ostrum_tank",
    D: "ad_astra:ostrum_block",
  });

  // Ostrum Mechanism, Engine Fan, Ostrum Ingot, Observer, Redstone Lamp = Oxygen Sensor
  event.shaped(Item.of("ad_astra:oxygen_sensor"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:ostrum_mechanism",
    B: "ad_astra:engine_fan",
    C: "ad_astra:ostrum_ingot",
    D: "minecraft:observer",
    E: "minecraft:redstone_lamp",
  });

  // Inferium Essence, Prosperity Shard, Ice Shard = Infusion Crystal
  event.shaped(Item.of("mysticalagriculture:infusion_crystal"), ["ABA", "BCB", "ABA"], {
    A: "mysticalagriculture:inferium_essence",
    B: "mysticalagriculture:prosperity_shard",
    C: "ad_astra:ice_shard",
  });

  // Mystical Mechanism, Red Wool, Stone = Infusion Pedestal
  event.shaped(Item.of("mysticalagriculture:infusion_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" });

  // Mystical Mechanism, Red Wool, Stone = Infusion Altar
  event.shaped(Item.of("mysticalagriculture:infusion_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:red_wool", C: "minecraft:stone" });

  // Mystical Mechanism, Orange Wool, Soulstone = Awakening Pedestal
  event.shaped(Item.of("mysticalagriculture:awakening_pedestal"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" });

  // Mystical Mechanism, Orange Wool, Soulstone = Awakening Altar
  event.shaped(Item.of("mysticalagriculture:awakening_altar"), ["ABA", " C ", "CCC"], { A: "kubejs:mystical_mechanism", B: "minecraft:orange_wool", C: "mysticalagriculture:soulstone" });

  // Mystical Mechanism, Glass, Soulstone = Essence Vessel
  event.shaped(Item.of("mysticalagriculture:essence_vessel"), ["ABA", " C ", " C "], { A: "kubejs:mystical_mechanism", B: "minecraft:glass", C: "mysticalagriculture:soulstone" });

  // Calorite Mechanism, Plates/Calorite, Bucket, Rods/Iron = Calorite Tank
  event.shaped(Item.of("ad_astra:calorite_tank"), ["AB ", "BCD", "AB "], {
    A: "kubejs:calorite_mechanism",
    B: "#forge:plates/calorite",
    C: "minecraft:bucket",
    D: "#forge:rods/iron",
  });

  // Plates/Calorite, Calorite Mechanism, Engine Frame, Engine Fan = Calorite Engine
  event.shaped(Item.of("ad_astra:calorite_engine"), ["ABA", " C ", " D "], { A: "#forge:plates/calorite", B: "kubejs:calorite_mechanism", C: "ad_astra:engine_frame", D: "ad_astra:engine_fan" });

  // Shaped
  //

  //
  // Shapeless

  // Grid, Refined Mechanism, Crafting Table = Crafting Grid
  event.shapeless(Item.of("refinedstorage:crafting_grid"), ["refinedstorage:grid", "kubejs:refined_mechanism", "minecraft:crafting_table"]);

  // Grid, Refined Mechanism, Pattern = Pattern Grid
  event.shapeless(Item.of("refinedstorage:pattern_grid"), ["refinedstorage:grid", "kubejs:refined_mechanism", "refinedstorage:pattern"]);

  // Grid, Refined Mechanism, Bucket = Fluid Grid
  event.shapeless(Item.of("refinedstorage:fluid_grid"), ["refinedstorage:grid", "kubejs:refined_mechanism", "minecraft:bucket"]);

  // Blizz Powder, Glass Shard = Prosperity Shard
  event.shapeless(Item.of("mysticalagriculture:prosperity_shard"), ["thermal:blizz_powder", "quark:clear_shard"]);

  // Shapeless
  //

  //
  // Pressing

  // #Planks Into Upgrade Base
  pressing(true, "minecraft:planks", "sophisticatedstorage:upgrade_base");

  // Pressing
  //

  //
  // Splashing

  // Orange Sand into Copper Nuggets
  splashing("biomesoplenty:orange_sand", "create:copper_nugget", 0.25, 1, "create:copper_nugget", 0.08, 1);

  // Rose Quartz into Polished Rose Quartz
  splashing("create:rose_quartz", "create:polished_rose_quartz", 1, 1);

  // Moon Sand into Desh Nuggets
  splashing("ad_astra:moon_sand", "ad_astra:desh_nugget", 0.25, 1, "ad_astra:desh_nugget", 0.08, 1);

  // Gravel into Flint and Iron Nugget
  splashing("minecraft:gravel", "minecraft:flint", 0.25, 1, "minecraft:iron_nugget", 0.25, 1);

  // Splashing
  //

  //
  // Compacting

  // Fluid to Nugget & Ingot
  let compactingNugget = (item, namespace) => {
    compacting(true, "kubejs:molten_" + item, 90, namespace + ":" + item + "_ingot", 1);
    compacting(true, "kubejs:molten_" + item, 10, namespace + ":" + item + "_nugget", 1);
  };

  // List of Ores
  let oresToCompact = [
    { item: "brass", namespace: "create" },
    { item: "iron", namespace: "minecraft" },
    { item: "zinc", namespace: "create" },
    { item: "desh", namespace: "ad_astra" },
    { item: "ostrum", namespace: "ad_astra" },
    { item: "calorite", namespace: "ad_astra" },
    { item: "gold", namespace: "minecraft" },
    { item: "deorum", namespace: "forbidden_arcanus" },
    { item: "signalum", namespace: "thermal" },
    { item: "lumium", namespace: "thermal" },
    { item: "enderium", namespace: "thermal" },
    { item: "tin", namespace: "thermal" },
    { item: "lead", namespace: "thermal" },
    { item: "silver", namespace: "thermal" },
    { item: "nickel", namespace: "thermal" },
    { item: "electrum", namespace: "thermal" },
    { item: "invar", namespace: "thermal" },
    { item: "constantan", namespace: "thermal" },
  ];

  oresToCompact.forEach((element) => {
    compactingNugget(element.item, element.namespace);
  });

  // Fluid, 90mb Molten Steel into Steel Ingot
  compacting(true, "createbigcannons:molten_steel", 90, "ad_astra:steel_ingot", 1);

  // Fluid, 10mb Molten Steel into Steel Nugget
  compacting(true, "createbigcannons:molten_steel", 10, "ad_astra:steel_nugget", 1);

  // Fluid, 90mb Molten Copper into Copper Ingot
  compacting(true, "kubejs:molten_copper", 90, "minecraft:copper_ingot", 1);

  // Fluid, 10mb Molten Copper into Copper Nugget
  compacting(true, "kubejs:molten_copper", 10, "create:copper_nugget", 1);

  // Fluid, 90mb Molten Diamond into Diamond
  compacting(true, "kubejs:molten_diamond", 90, "minecraft:diamond", 1);

  // Fluid, 90mb Molten Emerald into Emerald
  compacting(true, "kubejs:molten_emerald", 90, "minecraft:emerald", 1);

  // Fluid, 90mb Molten Lapis into Lapis Lazuli
  compacting(true, "kubejs:molten_lapis", 90, "minecraft:lapis_lazuli", 1);

  // Fluid, 90mb Molten Redstone into Redstone
  compacting(true, "kubejs:molten_redstone", 90, "minecraft:redstone", 1);

  // Fluid, 40mb Molten Quartz into Quartz
  compacting(true, "kubejs:molten_nether_quartz", 40, "minecraft:quartz", 1);

  // Fluid, 90mb Molten Netherite into Netherite Ingot
  compacting(true, "kubejs:molten_netherite", 90, "minecraft:netherite_ingot", 1);

  // Fluid, 10mb Molten Netherite into Netherite Nugget
  compacting(true, "kubejs:molten_netherite", 10, "createdeco:netherite_nugget", 1);

  // Fluid, 90mb Molten Obisidan into Obisidan Ingot
  compacting(true, "kubejs:molten_obisidan", 90, "forbidden_arcanus:obsidian_ingot", 1);

  // Fluid, 90mb Molten Prosperity into Prosperity Shard
  compacting(true, "kubejs:molten_prosperity", 30, "mysticalagriculture:prosperity_shard", 1);

  // Fluid, 90mb Molten Pendorite into Pendorite Ingot
  compacting(true, "kubejs:molten_pendorite", 90, "byg:pendorite_ingot", 1);

  // Fluid, 30mb Latex into Rubber
  compacting(true, "thermal:latex", 30, "thermal:rubber", 1);

  // Item, 9 Blue Ice into Blizz Cube
  compacting(false, "minecraft:blue_ice", 1, "thermal:blizz_rod", 1);

  // Heated, 50mb Heavy Oil into Solid Fuel Clump
  event.custom({
    type: "create:compacting",
    heatRequirement: "heated",
    ingredients: [
      {
        fluid: "thermal:heavy_oil",
        amount: 50,
      },
    ],
    results: [
      {
        item: "kubejs:solid_fuel_clump",
        count: 1,
      },
    ],
  });

  // Heated, 50mb Sulfuric Heavy Oil into 50mb Heavy Oil + Sulfur
  event.custom({
    type: "create:compacting",
    ingredients: [
      {
        fluid: "kubejs:sulfuric_heavy_oil",
        amount: 50,
      },
    ],
    results: [
      {
        fluid: "thermal:heavy_oil",
        amount: 50,
      },
      {
        item: "thermal:sulfur",
        count: 1,
      },
    ],
  });

  // Compacting
  //

  //
  // Haunting

  // Cobbled Deepslate into Blackstone, 100%, 1
  haunting("minecraft:cobbled_deepslate", "minecraft:blackstone", 1.0, 1);

  // Tuff into Cobbled Deepslate, 100%, 1
  haunting("minecraft:tuff", "minecraft:cobbled_deepslate", 1.0, 1);

  // Iron Nugget into Zinc Nugget, 100%, 1
  haunting("minecraft:iron_nugget", "create:zinc_nugget", 1.0, 1);

  // Haunting
  //

  //
  // Filling

  // Iron Sheet + 15mb Destabilized Redstone = Electron Tube
  filling("create:iron_sheet", "thermal:redstone", 15, "create:electron_tube");

  // Stick + 3mb Destabilized Redstone = Redstone Torch
  filling("minecraft:stick", "thermal:redstone", 3, "minecraft:redstone_torch");

  // Glowstone Dust + 20mb Liquid Experience = Gem Dust
  filling("minecraft:glowstone_dust", "create_enchantment_industry:experience", 20, "apotheosis:gem_dust");

  // Slimeball + 30mb Lava = Magma Cream
  filling("minecraft:slime_ball", "minecraft:lava", 30, "minecraft:magma_cream");

  // Soul Sand + 90mb Molten Nether Quartz = Glowstone
  filling("minecraft:soul_sand", "kubejs:molten_nether_quartz", 90, "minecraft:glowstone");

  // Andesite Alloy + 15mb Molten Nether Quartz = Silicon
  filling("create:andesite_alloy", "kubejs:molten_nether_quartz", 15, "refinedstorage:silicon");

  // Iron Ingot + 90mb Molten Nether Quarz = Quartz Enriched Iron
  filling("minecraft:iron_ingot", "kubejs:molten_nether_quartz", 90, "refinedstorage:quartz_enriched_iron");

  // Fluid Pipe + 360bm Molten Ostrum = Ostrum Fluid Pipe
  filling("create:fluid_pipe", "kubejs:molten_ostrum", 360, "ad_astra:ostrum_fluid_pipe");

  // Moon Stone + 120mb Molten Gold = Moon Cheese Ore
  filling("ad_astra:moon_stone", "kubejs:molten_gold", 120, "ad_astra:moon_cheese_ore");

  // Filling
  //

  //
  // Crushing

  // Glowstone into Glowstone Dust, 95%, 1 and Nugget Of Experience, 35%, 2
  crushing("minecraft:glowstone", "minecraft:glowstone_dust", 0.95, 1, "create:experience_nugget", 0.35, 2);

  // Sulfur into Sulfur Dust, 100%, 1
  crushing("thermal:sulfur", "thermal:sulfur_dust", 1.0, 1);

  // Mercury Stone into Mercury Cobblestone, 100%, 1 and Ice Shard, 25%, 1
  crushing("ad_astra:mercury_stone", "ad_astra:mercury_cobblestone", 1.0, 1, "ad_astra:ice_shard", 0.125, 1);

  // Crushing Wheel into Arcane Crystal Dust Speck, 50%, 1
  crushing("create:crushing_wheel", "forbidden_arcanus:arcane_crystal_dust_speck", 0.5, 1);

  // End Stone into Phantom Membrane, 12%, 1 and End Stone, 100%, 1
  crushing("minecraft:end_stone", "minecraft:phantom_membrane", 0.12, 1, "minecraft:end_stone", 1.0, 1);

  // Crushing
  //

  //
  // Disenchanting

  // Nugget of Experience, 10
  disenchanting("create:experience_nugget", 10);

  // Disenchanting
  //

  //
  // Smithing

  // Basic Mechanism + Drill Head = Mechanical Drill
  event.smithing("create:mechanical_drill", "kubejs:basic_mechanism", "thermal:drill_head");

  // Basic Mechanism + Saw Blade = Mechanical Saw
  event.smithing("create:mechanical_saw", "kubejs:basic_mechanism", "thermal:saw_blade");

  // Basic Mechanism + Zinc Hand = Deployer
  event.smithing("create:deployer", "kubejs:basic_mechanism", "kubejs:zinc_hand");

  // Smithing
  //

  //
  // Nasa Workbench

  // Tier 1 Rocket, Steel
  event.custom({
    type: "ad_astra:nasa_workbench",
    ingredients: [
      {
        ingredient: {
          item: "ad_astra:rocket_nose_cone",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:steel_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:steel_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:steel_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:steel_blocks",
        },
      },
      {
        ingredient: {
          item: "kubejs:steel_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:steel_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:steel_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:steel_tank",
        },
      },
      {
        ingredient: {
          item: "ad_astra:steel_tank",
        },
      },
      {
        ingredient: {
          item: "kubejs:steel_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
      {
        ingredient: {
          item: "ad_astra:steel_engine",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
    ],
    output: "ad_astra:tier_1_rocket",
  });

  // Tier 2 Rocket, Desh
  event.custom({
    type: "ad_astra:nasa_workbench",
    ingredients: [
      {
        ingredient: {
          item: "ad_astra:rocket_nose_cone",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:desh_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:desh_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:desh_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:desh_blocks",
        },
      },
      {
        ingredient: {
          item: "kubejs:desh_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:desh_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:desh_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:desh_tank",
        },
      },
      {
        ingredient: {
          item: "ad_astra:desh_tank",
        },
      },
      {
        ingredient: {
          item: "kubejs:desh_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
      {
        ingredient: {
          item: "ad_astra:desh_engine",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
    ],
    output: "ad_astra:tier_2_rocket",
  });

  // Tier 3 Rocket, Ostrum
  event.custom({
    type: "ad_astra:nasa_workbench",
    ingredients: [
      {
        ingredient: {
          item: "ad_astra:rocket_nose_cone",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:ostrum_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:ostrum_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:ostrum_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:ostrum_blocks",
        },
      },
      {
        ingredient: {
          item: "kubejs:ostrum_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:ostrum_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:ostrum_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:ostrum_tank",
        },
      },
      {
        ingredient: {
          item: "ad_astra:ostrum_tank",
        },
      },
      {
        ingredient: {
          item: "kubejs:ostrum_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
      {
        ingredient: {
          item: "ad_astra:ostrum_engine",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
    ],
    output: "ad_astra:tier_3_rocket",
  });

  // Tier 4 Rocket, Calorite
  event.custom({
    type: "ad_astra:nasa_workbench",
    ingredients: [
      {
        ingredient: {
          item: "ad_astra:rocket_nose_cone",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:calorite_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:calorite_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:calorite_blocks",
        },
      },
      {
        ingredient: {
          tag: "ad_astra_platform:calorite_blocks",
        },
      },
      {
        ingredient: {
          item: "kubejs:calorite_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:calorite_mechanism",
        },
      },
      {
        ingredient: {
          item: "kubejs:calorite_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:calorite_tank",
        },
      },
      {
        ingredient: {
          item: "ad_astra:calorite_tank",
        },
      },
      {
        ingredient: {
          item: "kubejs:calorite_mechanism",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
      {
        ingredient: {
          item: "ad_astra:calorite_engine",
        },
      },
      {
        ingredient: {
          item: "ad_astra:rocket_fin",
        },
      },
    ],
    output: "ad_astra:tier_4_rocket",
  });

  // Nasa Workbench
  //

  //
  // Mechanical Crafting

  // Extendo Grip
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      H: {
        item: "kubejs:zinc_hand",
      },
      L: {
        tag: "forge:ingots/brass",
      },
      R: {
        item: "create:precision_mechanism",
      },
      S: {
        tag: "forge:rods/wooden",
      },
    },
    pattern: [" L ", " R ", "SSS", "SSS", " H "],
    result: {
      item: "create:extendo_grip",
    },
  });

  // Tesla Coil
  event.custom({
    type: "create:mechanical_crafting",
    pattern: ["SCS", " A ", "CBC", "PEP"],
    key: {
      A: {
        item: "create:andesite_alloy",
      },
      C: {
        item: "kubejs:conductive_mechanism",
      },
      P: {
        tag: "forge:plates/brass",
      },
      B: {
        item: "create:brass_casing",
      },
      S: {
        item: "createaddition:copper_spool",
      },
      E: {
        item: "create:electron_tube",
      },
    },
    result: {
      item: "createaddition:tesla_coil",
    },
  });

  // Electric Motor
  event.custom({
    type: "create:mechanical_crafting",
    pattern: ["  A  ", " BSB ", "BCRCB", " CSC "],
    key: {
      A: {
        item: "create:andesite_alloy",
      },
      C: {
        item: "kubejs:conductive_mechanism",
      },
      B: {
        tag: "forge:plates/brass",
      },
      R: {
        tag: "forge:rods/iron",
      },
      S: {
        item: "createaddition:copper_spool",
      },
    },
    result: {
      item: "createaddition:electric_motor",
    },
  });

  // Tier 4 Rocket, Calorite
  event.custom({
    type: "create:mechanical_crafting",
    pattern: ["  A  ", " CDC ", " CDC ", " BDB ", "BRDRB", "F E F"],
    key: {
      A: {
        item: "ad_astra:rocket_nose_cone",
      },
      C: {
        tag: "ad_astra_platform:calorite_blocks",
      },
      B: {
        item: "kubejs:calorite_mechanism",
      },
      R: {
        item: "ad_astra:calorite_tank",
      },
      F: {
        item: "ad_astra:rocket_fin",
      },
      E: {
        item: "ad_astra:calorite_engine",
      },
      D: {
        item: "ad_astra:calorite_nugget",
      },
    },
    result: {
      item: "ad_astra:tier_4_rocket",
    },
  });

  // Creative Motor
  event.custom({
    type: "create:mechanical_crafting",
    pattern: ["CSRRC", "SBBBR", "SBCBR", "SBBBR", "CSSRC"],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        tag: "forge:plates/brass",
      },
      R: {
        item: "create:steam_engine",
      },
      S: {
        item: "create:water_wheel",
      },
    },
    result: {
      item: "create:creative_motor",
    },
  });

  // Creative Blaze Cake
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" RRR ", "RBSBR", "BSCSB", " CSC "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "thermal:sulfur",
      },
      R: {
        item: "kubejs:solid_fuel_clump",
      },
      S: {
        item: "create:blaze_cake",
      },
    },
    result: {
      item: "create:creative_blaze_cake",
    },
  });

  // Creative Generator
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" BBB ", "BRCRB", "BC CB", "BRCRB", " BBB "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "createaddition:electric_motor",
      },
      R: {
        tag: "forge:plates/brass",
      },
    },
    result: {
      item: "createaddition:creative_energy",
    },
  });

  // Creative Storage Disk
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" BAB ", "BACAB", "BCDCB", "BACAB", " BAB "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "refinedstorage:64k_storage_disk",
      },
      A: {
        item: "refinedstorage:16k_storage_disk",
      },
      D: {
        item: "minecraft:chest",
      },
    },
    result: {
      item: "refinedstorage:creative_storage_disk",
    },
  });

  // Creative Fluid Disk
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" BAB ", "BACAB", "BCDCB", "BACAB", " BAB "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "refinedstorage:4096k_fluid_storage_disk",
      },
      A: {
        item: "refinedstorage:1024k_fluid_storage_disk",
      },
      D: {
        item: "minecraft:bucket",
      },
    },
    result: {
      item: "refinedstorage:creative_fluid_storage_disk",
    },
  });

  // Creative Controller
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" B B ", "BACAB", "BCDCB", "BACAB", " B B "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "refinedstorage:advanced_processor",
      },
      A: {
        item: "refinedstorage:improved_processor",
      },
      D: {
        item: "refinedstorage:controller",
      },
    },
    result: {
      item: "refinedstorage:creative_controller",
    },
  });

  // Creative RF Coil
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" B B ", "BACAB", "BCDCB", "BACAB", " B B "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "thermal:rf_coil_storage_augment",
      },
      A: {
        item: "thermal:silver_ingot",
      },
      D: {
        item: "thermal:rf_coil_xfer_augment",
      },
    },
    result: {
      item: "thermal:rf_coil_creative_augment",
    },
  });

  // Creative Flux Efficiency
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" BAB ", "BACAB", "BCDCB", "BACAB", " BAB "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "thermal:machine_efficiency_augment",
      },
      A: {
        item: "thermal:lumium_ingot",
      },
      D: {
        item: "thermal:machine_speed_augment",
      },
    },
    result: {
      item: "thermal:machine_efficiency_creative_augment",
    },
  });

  // Creative Storage Upgrade
  event.custom({
    type: "create:mechanical_crafting",
    pattern: [" BDB ", "BACAD", "BCDCB", "BACAD", " BDB "],
    key: {
      C: {
        item: "kubejs:creative_mechanism",
      },
      B: {
        item: "storagedrawers:emerald_storage_upgrade",
      },
      A: {
        item: "storagedrawers:diamond_storage_upgrade",
      },
      D: {
        item: "storagedrawers:shroud_key",
      },
    },
    result: {
      item: "storagedrawers:creative_storage_upgrade",
    },
  });

  // Mechanical Crafting
  //

  //
  // Cutting

  // Planks Into 2x Sticks
  event.custom({
    type: "create:cutting",
    ingredients: [
      {
        tag: "minecraft:planks",
      },
    ],
    processingTime: 50,
    results: [
      {
        item: "minecraft:stick",
        count: 2,
      },
    ],
  });

  // Cutting
  //

  //
  // Deploying

  // Spool + Copper Wire = Copper Spool
  deploying("createaddition:spool", "createaddition:copper_wire", "createaddition:copper_spool");

  // Deploying
  //

  //
  // Crystallizer

  // Water, 100mb, Plants, String
  crystallizing("minecraft:water", 100, "item", "minecraft:kelp", "minecraft:string");

  // Crystallizer
  //

  //
  // Charging

  // Brass Nugget + 300rf = Gold Nugget
  charging("create:brass_nugget", "minecraft:gold_nugget", 1, 300);

  // Charging
  //

  //
  // Centrifuge

  // Mars Sand = Ostrum Nugget, 0.75, 1, Ostrum Nugget, 0.25, 1
  centrifuging("ad_astra:mars_sand", "ad_astra:ostrum_nugget", 0.75, 1, "ad_astra:ostrum_nugget", 0.25, 1);

  // Venus Sand = Calorite Nugget, 0.75, 1, Calorite Nugget, 0.25, 1
  centrifuging("ad_astra:venus_sand", "ad_astra:calorite_nugget", 0.75, 1, "ad_astra:calorite_nugget", 0.25, 1);

  // Centrifuge
  //

  //
  // Rolling

  // Tag, Plates/Steel = Steel Rod
  rolling(true, "forge:plates/steel", "kubejs:steel_rod", 1);

  // Rolling
  //
});
