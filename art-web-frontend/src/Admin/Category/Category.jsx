import React, { useEffect } from "react";
import "./category.scss";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  createCategory,
  deleteCategory,
} from "../redux/actions/categoryAction";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import CategoryTile from "../../Components/CategoryTile/CategoryTile";
import Button from "../../Components/Button/Button";
const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, category } = useSelector((state) => state.allCategory);
  const { category: createdCategroy } = useSelector(
    (state) => state.createCategory
  );

  console.log(createdCategroy?.status);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch, createCategory, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCategory = (data) => {
    dispatch(createCategory(data));
    setTimeout(() => {
      navigate(0);
    }, 2000);
  };

  const categoryConfig = {
    name: {
      required: "* Category Name is required.",
    },
  };

  const handleDelete = (id) => {
    console.log("clicked");
    if (window.confirm("Do you want to delete")) {
      dispatch(deleteCategory(id));
      setTimeout(() => {
        navigate(0);
      }, 2000);
    }
  };
  return (
    <div>
      <Sidebar />
      <div className="category">
        <div className="category__container container">
          <div>
            <div className="category__addsection">
              <h1 className="category__title">Add Category</h1>
              <form
                onSubmit={handleSubmit(handleCategory)}
                className="category__addForm"
              >
                <div className="form-field ">
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Category Name"
                    {...register("name", categoryConfig.name)}
                  />
                  {errors?.name && <p>{errors.name.message}</p>}
                </div>
                <Button theme="button">Add Category</Button>
              </form>
            </div>
          </div>
          <div>
            <h1 className="category__title">ALL Category List</h1>
            <div className="category__header">
              <div className="category__header--title">
                <p>Category ID</p>
                <p>Category Name</p>
                <p>Edit</p>
                <p>Delete</p>
              </div>
              <div>
                {category?.data?.length === 0 && (
                  <p style={{ textAlign: "center" }}>No Categories</p>
                )}
                {loading ? (
                  <Loader />
                ) : (
                  category?.data &&
                  category.data.map((item) => {
                    return (
                      <CategoryTile
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        handleDelete={handleDelete}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
