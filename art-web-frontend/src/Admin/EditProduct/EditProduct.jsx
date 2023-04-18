import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./editproduct.scss";
import { useForm } from "react-hook-form";
import * as ProductFormConfig from "../NewProduct/productFormConfig";
import { getAllCategory } from "../redux/actions/categoryAction";
import { getProductDetail, editProduct } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Button from "../../Components/Button/Button";
import { useParams } from "react-router-dom";
import { API } from "../../config";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { category } = useSelector((state) => state.allCategory);
  const { productDetail } = useSelector((state) => state.adminproductDetail);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getProductDetail(id));
  }, [dispatch, id]);
  //for default value in edit product
  useEffect(() => {
    if (
      productDetail &&
      Object.keys(productDetail)?.length > 0 &&
      productDetail?.id
    ) {
      reset({
        name: productDetail?.name,
        theme: productDetail?.theme,
        description: productDetail?.description,
        price: productDetail?.price,
        category: productDetail?.category_id,
        quantity: productDetail?.quantity,
        material: productDetail?.about_product?.material,
        size: productDetail?.about_product?.size,
        rarity: productDetail?.about_product?.rarity,
        condition: productDetail?.about_product?.condition,
        signature: productDetail?.about_product?.signature,
        COA: productDetail?.about_product?.COA,
        frame: productDetail?.about_product?.frame,
      });
    }
  }, [productDetail]);
  const handleEditProductForm = (data) => {
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
    dispatch(editProduct(id, productData));
  };

  return (
    <div>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <Sidebar />
      <div className="newProduct">
        <div className="newProduct__container container">
          <h1 className="newProduct__title">EDIT PRODUCT</h1>
          <form
            onSubmit={handleSubmit(handleEditProductForm)}
            className="newProduct__form"
          >
            <div className="newProduct__left">
              <div className="form-field">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  {...register(
                    "name",
                    ProductFormConfig.productFormConfig.name
                  )}
                />
                {errors?.name && <p>{errors.name.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="theme">Theme</label>
                <input
                  type="text"
                  name="theme"
                  placeholder="Theme"
                  {...register(
                    "theme",
                    ProductFormConfig.productFormConfig.theme
                  )}
                />
                {errors?.theme && <p>{errors.theme.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description of Product"
                  {...register(
                    "description",
                    ProductFormConfig.productFormConfig.description
                  )}
                />
                {errors?.description && <p>{errors.description.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price in rupees"
                  {...register(
                    "price",
                    ProductFormConfig.productFormConfig.price
                  )}
                />
                {errors?.price && <p>{errors.price.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="category">Category</label>
                <select
                  type="text"
                  name="category"
                  {...register(
                    "category",
                    ProductFormConfig.productFormConfig.category
                  )}
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
                  {...register(
                    "quantity",
                    ProductFormConfig.productFormConfig.quantity
                  )}
                />
                {errors?.quantity && <p>{errors.quantity.message}</p>}
              </div>
              <div className="form-field form-img">
                <label htmlFor="image">Product Image</label>
                <div className="img-container">
                  <img
                    src={`${API}/${productDetail?.image}`}
                    alt="detail-img"
                  ></img>
                  <input
                    type="file"
                    name="image"
                    {...register(
                      "image",
                      ProductFormConfig.productFormConfig.image
                    )}
                  />
                </div>
                {errors?.image && <p>{errors.image.message}</p>}
              </div>
              <div className="newProduct__button">
                <Button theme="button">EDIT</Button>
              </div>
            </div>
            <div className="newProduct__right">
              <div className="form-field">
                <label htmlFor="material">Material</label>
                <input
                  type="text"
                  name="material"
                  placeholder="Material"
                  {...register(
                    "material",
                    ProductFormConfig.productFormConfig.material
                  )}
                />
                {errors?.material && <p>{errors.material.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  name="size"
                  placeholder="Size"
                  {...register(
                    "size",
                    ProductFormConfig.productFormConfig.size
                  )}
                />
                {errors?.size && <p>{errors.size.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="rarity">Rarity</label>
                <input
                  type="text"
                  name="rarity"
                  placeholder="Rarity"
                  {...register(
                    "rarity",
                    ProductFormConfig.productFormConfig.rarity
                  )}
                />
                {errors?.rarity && <p>{errors.rarity.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="condition">Condition</label>
                <input
                  type="text"
                  name="condition"
                  placeholder="Condition"
                  {...register(
                    "condition",
                    ProductFormConfig.productFormConfig.condition
                  )}
                />
                {errors?.condition && <p>{errors.condition.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="signature">Signature</label>
                <input
                  type="text"
                  name="signature"
                  placeholder="Signature"
                  {...register(
                    "signature",
                    ProductFormConfig.productFormConfig.signature
                  )}
                />
                {errors?.signature && <p>{errors.signature.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="COA">COA</label>
                <input
                  type="text"
                  name="COA"
                  placeholder="Certificate of Authenticity"
                  {...register("COA", ProductFormConfig.productFormConfig.COA)}
                />
                {errors?.COA && <p>{errors.COA.message}</p>}
              </div>
              <div className="form-field">
                <label htmlFor="frame">Frame</label>
                <input
                  type="text"
                  name="frame"
                  placeholder="Frame"
                  {...register(
                    "frame",
                    ProductFormConfig.productFormConfig.frame
                  )}
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

export default EditProduct;
