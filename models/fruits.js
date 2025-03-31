import mongoose from "mongoose"

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isReadyToEat: { type: Boolean, required: true },
})

const Fruit = mongoose.model('fruits', fruitSchema)
export default Fruit