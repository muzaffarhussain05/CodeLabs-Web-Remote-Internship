import React, { useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';

const NewOrder = () => {
  const { user, cart, setCart, orders, setOrders,login } = useContext(AppContext);
  const orderId = uuidv4();
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [priority, setPriority] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!user || user.trim() === '') errs.user = 'Name is required';
    if (!/^\d{10,15}$/.test(phone)) errs.phone = 'Valid phone number is required';
    if (!address || address.trim().length < 5) errs.address = 'Address must be at least 5 characters';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const newOrder = {
      id: orderId,
      user,
      phone,
      address,
      priority,
      cart,
      totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toISOString(),
    };

    setOrders([...orders, newOrder]);
    setCart([]);
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="overflow-y-scroll mt-18 mb-18">
      <div className="mx-auto max-w-3xl">
        <div className="px-4 py-6">
          <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
              <label className='sm:basis-40' htmlFor="customer">First Name</label>
              <input
                type="text"
                className='input grow'
                name='customer'
                required
                value={user}
                readOnly
              />
              {errors.user && <p className="text-red-500 text-sm">{errors.user}</p>}
            </div>

            <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
              <label htmlFor="phone" className='sm:basis-40'>Phone Number</label>
              <div className="grow">
                <input
                  type="tel"
                  className='input w-full'
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className='relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
              <label htmlFor="address" className='sm:basis-40'>Address</label>
              <div className="grow">
                <input
                  type="text"
                  className='input w-full'
                  name='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              <span className='absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]'>
                <button
                  type="button"
                  className='inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-2 md:px-5 md:py-2.5 text-xs'
                >
                  Get position
                </button>
              </span>
            </div>

            <div className='mb-12 flex items-center gap-5'>
              <input
                type="checkbox"
                className='h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
                name="priority"
                checked={priority}
                onChange={(e) => setPriority(e.target.checked)}
              />
              <label htmlFor="priority" className='font-medium'>
                Want to give your order priority?
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-3 md:px-6 md:py-4"
              >
                Order now from €29.00
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
