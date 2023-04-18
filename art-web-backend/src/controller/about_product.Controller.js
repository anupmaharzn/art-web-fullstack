const aboutproductServices = require("../services/about_product.services");

const store = async (req, res) => {
  const aboutProduct = {
    material: req.body.material,
    size: req.body.size,
    rarity: req.body.rarity,
    condition: req.body.condition,
    signature: req.body.signature,
    COA: req.body.COA,
    frame: req.body.frame,
    product_id: req.body.product_id,
  };
  const result = await aboutproductServices.store(aboutProduct);
  return res.status(result.status).send(result);
};

const get = async (req, res) => {
  const result = await aboutproductServices.get();
  return res.status(result.status).send(result);
};

const getbyId = async (req, res) => {
  const result = await aboutproductServices.getbyId(req.params.id);
  return res.status(result.status).send(result);
};
const edit = async (req, res) => {
  const aboutProduct = {
    material: req.body.material,
    size: req.body.size,
    rarity: req.body.rarity,
    condition: req.body.condition,
    signature: req.body.signature,
    COA: req.body.COA,
    frame: req.body.frame,
    product_id: req.body.product_id,
  };
  const result = await aboutproductServices.edit(req.params.id, aboutProduct);
  return res.status(result.status).send(result);
};
const destroy = async (req, res) => {
  const result = await aboutproductServices.destroy(req.params.id);
  return res.status(result.status).send(result);
};

module.exports = {
  store,
  get,
  getbyId,
  edit,
  destroy,
};
