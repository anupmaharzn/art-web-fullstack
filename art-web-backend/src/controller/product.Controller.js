const productServices = require("../services/product.services");

const store = async (req, res) => {
  const productData = {
    name: req.body.name,
    theme: req.body.theme,
    description: req.body.description,
    price: req.body.price,
    category_id: req.body.category_id,
    quantity: req.body.quantity,
    image: req.file.path,
  };
  //if creating from frontend admin side
  const aboutProduct = {
    material: req.body.material,
    size: req.body.size,
    rarity: req.body.rarity,
    condition: req.body.condition,
    signature: req.body.signature,
    COA: req.body.COA,
    frame: req.body.frame,
    // product_id: req.body.product_id,
  };
  const result = await productServices.store(productData,aboutProduct);
  return res.status(result.status).send(result);
};

const get = async (req, res) => {
  const result = await productServices.get(req.query);
  return res.status(result.status).send(result);
};
const getbyId = async (req, res) => {
  const result = await productServices.getbyId(req.params.id);
  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const productData = {
    name: req.body.name,
    theme: req.body.theme,
    description: req.body.description,
    price: req.body.price,
    category_id: req.body.category_id,
    quantity: req.body.quantity,
    image: req.file.path,
  };
  const aboutProduct = {
    material: req.body.material,
    size: req.body.size,
    rarity: req.body.rarity,
    condition: req.body.condition,
    signature: req.body.signature,
    COA: req.body.COA,
    frame: req.body.frame,
    // product_id: req.body.product_id,
  };
  const result = await productServices.edit(req.params.id, productData,aboutProduct);
  return res.status(result.status).send(result);
};
const destroy = async (req, res) => {
  const result = await productServices.destroy(req.params.id);
  return res.status(result.status).send(result);
};
module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
