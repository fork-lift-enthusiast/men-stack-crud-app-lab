import Fruit from "../models/fruits.js";

export const indexPage = async (req, res) => {
  res.render("index.ejs");
};

export const newFruit = (req, res) => {
  res.render("fruits/new.ejs");
};
export const fruit = async (req, res) => {
  const allFruits = await Fruit.find();
  res.render("fruits/index.ejs", { fruits: allFruits });
};
export const fruits = async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  res.redirect("/fruits");
};
export const showFruit = async (req,res)=>{
  const foundFruit = await Fruit.findById(req.params.fruitId);
  res.render("fruits/showFruit.ejs", {fruit: foundFruit});
}
export const deleteFruit = async (req, res) => {
  await Fruit.findByIdAndDelete(req.params.fruitId);
  res.redirect("/fruits");
}
export const editFruitPage = async (req, res) => {
  const foundFruit = await Fruit.findById(req.params.fruitId);
  res.render("fruits/edit.ejs", {
    fruit: foundFruit,
  });
}

export const editFruit = async (req, res) => {
  // Handle the 'isReadyToEat' checkbox data
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  
  // Update the fruit in the database
  await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);

  // Redirect to the fruit's show page to see the updates
  res.redirect(`/fruits/${req.params.fruitId}`);
}