import React, {useContext, useEffect, useState} from 'react';
import validator from 'validator';
import { Formik } from 'formik';
import { CartContext } from '../context/cartContext';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { saveDoc } from '../service/firebase.service';
import './checkout.css'

const Checkout = () => {

	const {cartList, removeList} = useContext(CartContext)
	const [isCreated,setIsCreated] = useState(false)
	const [orderId, setOrderId] = useState('')
	const [orderData, setOrderData] = useState([])
	
	
	const saveOrder = async (item) => {
		await saveDoc(item,'orders');
	}

	useEffect(() => {
		if(orderData.length == 0){
			return 	
		}
		saveOrder(orderData)
	}, [orderData])
	
	return (
    <>
      {!isCreated ? (
        <>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
            }}
            onSubmit={(values, { resetForm }) => {
              const uuid = uuidv4();
              setOrderData([
                {
                  id: uuid,
                  items: cartList,
                  ...values,
                },
              ]);
              resetForm();
              removeList();
              setIsCreated(true);
              setOrderId(uuid);
            }}
            validate={(values) => {
              const { email, phone, name } = values;
              let errors = {};
              if (!email || !validator.isEmail(email)) {
                errors.email = "Please enter a valid email";
              }

              if (
                !phone ||
                !validator.isNumeric(phone) ||
                !validator.isLength(phone, { min: 8, max: 8 })
              ) {
                errors.phone = "Please enter a valid 8 character phone number";
              }

              if (
                !name ||
                validator.isNumeric(name) ||
                !validator.isLength(name, { min: 3, max: 20 })
              ) {
                errors.name = "Please enter a name between 3 and 20 characters";
              }
              return errors;
            }}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              errors,
              touched,
            }) => (
              <form action="" onSubmit={handleSubmit} className="formulario">
                {cartList.length > 0 ? (
                  <>
                    <div>
                      <label htmlFor="name">Full Name </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Antonio Fernandez"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.name && errors.name && (
                        <div className="error">{errors.name}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="56987678967"
                        id="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.phone && errors.phone && (
                        <div className="error">{errors.phone}</div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="react39665@coderhouse.com"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </div>

                    <button type="submit">Create Order!</button>
                  </>
                ) : (
                  <NavLink to="/">
                    <button type="submit">
                      Your cart is empty, Go back to products!
                    </button>
                  </NavLink>
                )}
              </form>
            )}
          </Formik>
        </>
      ) : (
        <div className="order-created-container">
          <h1> Your order has been created!</h1>
          <h3> Order ID: {orderId}</h3>
          <NavLink to="/">
            <button> Go back to products!</button>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Checkout;