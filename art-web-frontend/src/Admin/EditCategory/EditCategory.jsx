import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../Components/Button/Button";
import {
  editCategory,
  getCategoryDetail,
} from "../redux/actions/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import "./editcategory.scss";
const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryDetail } = useSelector((state) => state.detailCategory);
  console.log(categoryDetail);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const categoryConfigedit = {
    name: {
      required: "* Category Name is required.",
    },
  };
  useEffect(() => {
    dispatch(getCategoryDetail(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (categoryDetail && Object.keys(categoryDetail)?.length > 0) {
      reset({
        name: categoryDetail?.name,
      });
    }
  }, [categoryDetail]);

  const handleCategoryEdit = (data) => {
    console.log(id);
    const editData = {
      name: data.name,
    };
    dispatch(editCategory(id, editData, navigate));
  };
  return (
    <>
      <Sidebar />
      <div className="category editcategory">
        <div className="category__container container editcategory">
          <div className="category__editsection">
            <h1 className="category__title">Edit Category</h1>
            <form
              onSubmit={handleSubmit(handleCategoryEdit)}
              className="category__editForm"
            >
              <div className="form-field ">
                <label htmlFor="name">Category Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Category Name"
                  {...register("name", categoryConfigedit.name)}
                />
                {errors?.name && <p>{errors.name.message}</p>}
              </div>
              <Button type="submit" theme="button">
                Edit Category
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
