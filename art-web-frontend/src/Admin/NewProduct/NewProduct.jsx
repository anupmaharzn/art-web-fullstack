import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./newproduct.scss";
import { useForm } from "react-hook-form";
import { productFormConfig } from "./productFormConfig";
import { getAllCategory } from "../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/actions/productAction";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../Components/Button/Button";
const NewProduct = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.allCategory);
  const { product } = useSelector((state) => state.createProduct);
  console.log("createdProduct", product);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quantity: 1,
    },
  });
  const handleProductForm = (data) => {
    const productData = {
      name: data.name,
      theme: data.theme,
      description: data.description,
      price: data.price,
      category_id: data.category,
      quantity: data.quantity,
      image: data.image[0],
      material: data.material,
      size: data.size,
      rarity: data.rarity,
      condition: data.condition,
      signature: data.signature,
      COA: data.COA,
      frame: data.frame,
    };
    dispatch(createProduct(productData));
    toast("Product Created Sucessfully");
  };
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <Sidebar />
      <div className="newProduct">
        <div className="newProduct__container container">
          <h1 className="newProduct__title">ADD PRODUCT</h1>
          <form
            onSubmit={handleSubmit(handleProductForm)}
            className="newProduct__form"
          >
            <div className="newProduct__left">
              <div className="form-field">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  {...register("name", productFormConfig.name)}
                />
                {errors?.name && <p>{errors.name.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="theme">Theme</label>
                <input
                  type="text"
                  name="theme"
                  placeholder="Theme"
                  {...register("theme", productFormConfig.theme)}
                />
                {errors?.theme && <p>{errors.theme.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description of Product"
                  {...register("description", productFormConfig.description)}
                />
                {errors?.description && <p>{errors.description.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price in rupees"
                  {...register("price", productFormConfig.price)}
                />
                {errors?.price && <p>{errors.price.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="category">Category</label>
                <select
                  type="text"
                  name="category"
                  placeholder="Category"
                  {...register("category", productFormConfig.category)}
                >
                  {category?.data &&
                    category.data.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                </select>
                {errors?.category && <p>{errors.category.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  {...register("quantity", productFormConfig.quantity)}
                />
                {errors?.quantity && <p>{errors.quantity.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="image">Product Image</label>
                <input
                  type="file"
                  name="image"
                  {...register("image", productFormConfig.image)}
                />
                {errors?.image && <p>{errors.image.message}</p>}
              </div>
              <div className="newProduct__button">
                <Button type="submit" theme="button">
                  CREATE
                </Button>
              </div>
            </div>
            <div className="newProduct__right">
              <div className="form-field">
                <label htmlFor="material">Material</label>
                <input
                  type="text"
                  name="material"
                  placeholder="Material"
                  {...register("material", productFormConfig.material)}
                />
                {errors?.material && <p>{errors.material.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  name="size"
                  placeholder="Size"
                  {...register("size", productFormConfig.size)}
                />
                {errors?.size && <p>{errors.size.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="rarity">Rarity</label>
                <input
                  type="text"
                  name="rarity"
                  placeholder="Rarity"
                  {...register("rarity", productFormConfig.rarity)}
                />
                {errors?.rarity && <p>{errors.rarity.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="condition">Condition</label>
                <input
                  type="text"
                  name="condition"
                  placeholder="Condition"
                  {...register("condition", productFormConfig.condition)}
                />
                {errors?.condition && <p>{errors.condition.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="signature">Signature</label>
                <input
                  type="text"
                  name="signature"
                  placeholder="Signature"
                  {...register("signature", productFormConfig.signature)}
                />
                {errors?.signature && <p>{errors.signature.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="COA">COA</label>
                <input
                  type="text"
                  name="COA"
                  placeholder="Certificate of Authenticity"
                  {...register("COA", productFormConfig.COA)}
                />
                {errors?.COA && <p>{errors.COA.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="frame">Frame</label>
                <input
                  type="text"
                  name="frame"
                  placeholder="Frame"
                  {...register("frame", productFormConfig.frame)}
                />
                {errors?.frame && <p>{errors.frame.message}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
