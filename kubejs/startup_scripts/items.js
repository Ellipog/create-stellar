// priority: 0

StartupEvents.registry("item", (event) => {
  let item = (name) => {
    let id = name.toLowerCase().replace(/ /g, "_");
    event.create(id).texture(`stellar:item/${id}`).displayName(name);
  };
  let mechanism = (name) => {
    let id = name.toLowerCase();
    event.create(`incomplete_${id}_mechanism`).texture(`stellar:item/incomplete_${id}_mechanism`).displayName(`Incomplete ${name} Mechanism`);
    event.create(`${id}_mechanism`).texture(`stellar:item/${id}_mechanism`).displayName(`${name} Mechanism`);
  };

  mechanism("Basic");
  mechanism("Copper");
  mechanism("Steel");
  mechanism("Enchanted");
  mechanism("Desh");
  mechanism("Conductive");
  mechanism("Refined");
  mechanism("Ostrum");
  mechanism("Mystical");
  mechanism("Calorite");
  mechanism("Creative");

  item("Steel Rod");
  item("Zinc Hand");
  item("Solid Fuel Clump");
});
