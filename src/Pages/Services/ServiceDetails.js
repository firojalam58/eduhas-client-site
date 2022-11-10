import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/Authentication/AuthProvider";
const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  const service = useLoaderData();
  const [active, setActive] = useState(true);
  const [review, setReview] = useState([]);
  const { _id, img, price, ratings, name, description } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/clientEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [user?.email]);


  const handleDelete = id=>{
      fetch(`http://localhost:5000/delete/${id}`,{
        method: 'DELETE',
        
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){

          toast.success('Delete Success')
          const remaining = review.filter(reviews => reviews._id !== id);
           setReview(remaining);
        }
      })
  }



  
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const names = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const ratings = form.rating.value;

    const reviews = {
      name: names,
      email: user?.email,
      userEmail: email,
      phone: phone,
      message: message,
      price: price,
      ratingClient: ratings,
      serviceId: _id,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Review Success')
          form.reset();
        }
      });
  };

  return (
    <div className="grid grid-cols-1 gap-3 mt-5 mb-5 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <div className="card card-compact mt-5 mb-5 bg-base-100 shadow-xl">
          <figure>
            <img src={img} className="rounded-lg" alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{user?.email}</p>
            <p className="text-2xl font-semibold text-primary-500">
              Ratings:{user?.ratingClient}$
            </p>
            <div>
              {active ? (
                <p>
                  {description.length > 100 ? (
                    <>
                      {" "}
                      {description.slice(0, 100) + "..."}{" "}
                      <button
                        className="font-semibold"
                        onClick={() => setActive(!active)}
                      >
                        Read more
                      </button>
                    </>
                  ) : (
                    description
                  )}
                </p>
              ) : (
                <p>
                  {description}{" "}
                  <button
                    className="font-semibold"
                    onClick={() => setActive(!active)}
                  >
                    {" "}
                    Read Less{" "}
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-20 mb-6">
          <form onSubmit={handlePlaceOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <input
                name="name"
                type="text"
                placeholder="First Name"
                className="input input-ghost w-full  input-bordered"
              />

              <input
                name="phone"
                type="number"
                placeholder="Your Phone"
                className="input input-ghost w-full  input-bordered"
                required
              />
              <input
                name="email"
                type="text"
                placeholder="Your email"
                className="input input-ghost w-full  input-bordered"
              />

              <input
                name="rating"
                type="number"
                placeholder="Your rating"
                className="input input-ghost w-full  input-bordered"
              />
            </div>
            <textarea
              name="message"
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Your Message"
              required
            ></textarea>

            <input
              className="btn mt-5 btn-primary mb-5"
              type="submit"
              value="Please Review"
            />

          </form>
        </div>
      </div>

      <div>

        {review.map((rev) => (

          <div key={rev._id}>
            {
              <div className="card w-45 mb-5 mt-5 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{rev.name}</h2>
                  <p className="card-title">Rating:{rev.ratingClient} Star</p>
                  <p className="text-start">Message: {rev.message}</p>
                  <p className="text-start">Phone:-{rev.phone}</p>
                  <p className="text-start">Login User Email: {rev.email}</p>
                  
                <button className="btn btn-primary" onClick={()=> handleDelete(rev._id)}>Delete</button>
                <Link to={`/edit/${rev._id}`}><button className="btn btn-primary">Update Review</button></Link>
                </div>
              </div>
            }
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
