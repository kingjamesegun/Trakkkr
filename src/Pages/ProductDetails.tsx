import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ProductData } from './types';
import { Redirect } from 'react-router';
import { useHistory, useParams } from 'react-router-dom';

// styles for modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
  },
};

//avoid any type
function ProductDetails() {
  let { id } = useParams<{ id: string }>();
  let history = useHistory();
  const [redirect, setredirect] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    async function fetchedproduct() {
      try {
        const res = await axios.get(`https://trakkkr.herokuapp.com/${id}`, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });

        setProduct(res.data);
      } catch (error) {
        console.log('error fetching' + error);
      }
    }
    fetchedproduct();
  }, [id]);

  const onDeleteButton = async () => {
    const res = await axios
      .delete(`https://trakkkr.herokuapp.com/${id}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
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

  const onEditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      requested_price: price,
    };

    const res = await axios
      .patch(`https://trakkkr.herokuapp.com/${id}`, data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });

    if (res) {
      setModalIsOpen(false);
      setredirect(true);
    }
  };
  const onPriceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const openEditModal = () => {
    setModalIsOpen(true);
  };
  const closeEditModal = () => {
    setModalIsOpen(false);
  };

  const openDeleteModal = () => {
    setModalDeleteOpen(true);
  };
  const closeDeleteModal = () => {
    setModalDeleteOpen(false);
  };
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  };

  if (redirect) {
    return <Redirect to="/product" />;
  }

  if (!product) return null;
  const { last_price, item_title, requested_price, item_image_url } = product;
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 pt-4">
        <div className="col-span-1 border rounded-4xl">
          <div
            className=" rounded-lg"
            style={{
              backgroundImage: `url("${item_image_url}")`,
              height: '400px',
              width: '100%',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
        <div className="col-span-2 px-6 py-0">
          <div className="text-3xl font-sans ">{item_title}????</div>
          <div>
            <p className="font-serif text-base mt-1 mb-0 text-xs text-gray-400 font-semibold">Price on Jumia</p>
            <p className="font-serif text-lg mt-0">#{last_price}</p>
          </div>
          <div className="">
            <p className="font-serif text-base mt-1 mb-0 text-xs text-gray-400 font-semibold">Requested Price</p>
            <p className="font-serif text-6xl mt-0">#{requested_price}</p>
          </div>
          <div>
            <button
              className="captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md"
              onClick={openDeleteModal}
            >
              Delete
            </button>

            <Modal
              isOpen={modalDeleteOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeDeleteModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 className="text-sans text-black text-2xl">Are you sure you want to delete {item_title}?</h2>
              <button
                className="  py-2 px-5 border rounded-md font-semibold mr-3 font-sans text-base"
                onClick={() => {
                  history.goBack();
                }}
              >
                No
              </button>
              <button
                className="bg-red-500 text-white py-2 px-5 border rounded-md font-semibold mr-3 font-sans text-base"
                onClick={onDeleteButton}
              >
                Yes
              </button>
            </Modal>
            <button
              className="captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md"
              onClick={openEditModal}
            >
              Edit
            </button>
            <button
              className="captializze font-semibold mr-3 font-sans text-base bg-blue-500 text-white py-2 px-5 border rounded-md"
              onClick={() => {
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
                    onChange={onPriceChangeHandler}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
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
