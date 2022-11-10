import React, { useEffect, useState } from 'react';

const ServiceAdd = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);


    const handlePlaceOrder = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const description = form.message.value;
        const ratings = form.rating.value;
        const price = form.price.value;

        const users = {
            name,img,description,price,ratings
        }


        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        })
            .then(res => res.json())
            .then(data => {
                const newUser = [...user, data]
                setUser(newUser)
            })
            .catch(error => console.error(error))


    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name="name" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="Your price" className="input input-ghost w-full  input-bordered"  />
                    <input name="img" type="text" placeholder="Your photoUrl" className="input input-ghost w-full  input-bordered"  />
                    <input name="rating" type="number" placeholder="Your rating" className="input input-ghost w-full  input-bordered"  />
                    <input name="message" type="text" placeholder="Your description" className="input input-ghost w-full  input-bordered"  />
                    
                </div>

                <input className='btn mt-5 btn-primary mb-5' type="submit" value="Please Review" />
            </form>
        </div>
    );
};

export default ServiceAdd;