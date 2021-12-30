import React, { useEffect, useState } from "react";
import "../styles/Pages/Product.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import NoData from "../assets/nodata.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Product() {
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get("https://trakkkr.herokuapp.com/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      setProduct(response.data);
    }

    fetchdata();
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [product, setProduct] = useState([]);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // Track
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0);

  const onUrlChangeHandler = (e) => {
    setUrl(e.target.value);
  };
  const onPriceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      url,
      requested_price: price,
    };

    const response = await axios
      .post("https://trakkkr.herokuapp.com/", data, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    if (response) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div className=" text-center px-0 md:px-20 py-2">
        <h1 className="text-4xl md:text-7xl px-0 md:px-20 pt-5 pb-2">
          No stress,
          <br />
          No daily Tracking
          <br />
          We Track & you get notified.
        </h1>
        <p className="text-base md:text-2xl tracking-wider font-normal pt-2 ">
          Millions of developers use Netlify to ship faster,
          <br />
          simplify their workflows, and scale effortlessly.
        </p>
        <button
          className="text-center text-white bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-6  00 "
          onClick={openModal}
        >
          Track Product
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="text-sans text-black text-2xl">Edit</h2>
          <form
            className="bg-white border rounded w-80 px-8 pt-6 pb-8 mb-5"
            onSubmit={onSubmitHandler}
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                type="text"
                name="url"
                placeholder="Place Jumia URL here"
                onChange={onUrlChangeHandler}
                value={url}
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                name="price"
                placeholder="Enter your tracking price"
                value={price}
                onChange={onPriceChangeHandler}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <div className="container mt-5 py-3">
        <div className="text-sans font-md text-blue-500 text-base font-bold">
          24 Products
        </div>
      </div>
      <div className="container mb-5">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {product.map((prod) => (
              <Link
                to={`/products/${prod.id}`}
                className="text-black non-style"
                key={prod.id}
              >
                <div
                  className="flex flex-col p-2 relative products  rounded-xl shadow-lg "
                  style={{ backgroundImage: `url("${prod.item_image_url}")` }}
                >
                  <div className="rounded full w-2 h-2 absolute right-4 top-4 bg-red-500"></div>
                  <div className="text-ms  absolute bottom-4 left-5 font-medium text-gray-700 pt-2">
                    {prod.item_title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <img src={NoData} alt="no-data" className="w-40  mx-auto mt-5" />
            <p className="text-base tracking-wide md:text-sm mt-2 text-black text-center">
              No Product to be tracked yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
