import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";
import Modal from "react-modal";

// styles for modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
  },
};

function ProductDetails(props) {
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    async function fetchedproduct() {
      const res = await axios.get(`https://trakkkr.herokuapp.com/${id}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      setProduct(res.data);
    }

    fetchedproduct();
  }, [id]);

  const [product, setProduct] = useState("");
  const [redirect, setredirect] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const onDeleteButton = async () => {
    const res = await axios
      .delete(`https://trakkkr.herokuapp.com/${product.id}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });

    if (res) {
      setredirect(true);
      console.log(res);
    }
  };

  const onEditSubmit = async (e) =>{
    e.preventDefault();
    const data = {
      requested_price: price

    }

    const res = await axios.patch(`https://trakkkr.herokuapp.com/${product.id}`, data,{
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    }).catch((err)=>{
      console.log(err);
    });

    if(res){
      setModalIsOpen(false);
    }
  }
  const onPriceChangeHandler = (e) =>{
    setPrice(e.target.value);
  }

  const openEditModal = () => {
    setModalIsOpen(true);
  };
  const closeEditModal = () => {
    setModalIsOpen(false);
  };
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  


  if (redirect) {
    return <Redirect to="/product" />;
  }
  

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 pt-4">
        <div className="col-span-1 border rounded-4xl">
          <div
            className=" rounded-lg"
            style={{
              backgroundImage: `url("${product.item_image_url}")`,
              height: "400px",
              width: "100%",
              backgroundSize: "cover",
            }}
          ></div>
          {console.log(product)}
        </div>
        <div className="col-span-2 px-6 py-0">
          <div className="text-3xl font-sans ">{product.item_title}</div>
          <div>
            <p className="font-serif text-base mt-1 mb-0 text-xs text-gray-400 font-semibold">
              Price on Jumia
            </p>
            <p className="font-serif text-lg mt-0">#{product.last_price}</p>
          </div>
          <div className="">
            <p className="font-serif text-base mt-1 mb-0 text-xs text-gray-400 font-semibold">
              Requested Price
            </p>
            <p className="font-serif text-6xl mt-0">
              #{product.requested_price}
            </p>
          </div>
          <div>
            <button
              className="captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md"
              onClick={onDeleteButton}
            >
              Delete
            </button>
            <button
              className="captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md"
              onClick={openEditModal}
            >
              Edit
            </button>
            <button
              className="captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md"
              onClick={()=> {
                history.goBack(); 
              }}
            >
              Back
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeEditModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 className="text-sans text-black text-2xl">Edit</h2>
                <form onSubmit={onEditSubmit}>
                  <div className="mb-4">
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" 
                      id="price" 
                      type="number" 
                      placeholder="price"
                      name="price"
                      value={price}
                      onChange= {onPriceChangeHandler}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
