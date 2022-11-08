import React from 'react';
import img from '../../images/team/ava-1.jpg';
import img2 from '../../images/team/ava-2.jpg';
import img3 from '../../images/team/ava-3.jpg';
import img4 from '../../images/team/ava-4.jpg';
const Team = () => {
    return (
    <div className='flex gap-4'>
        <div className="card w-lg-25 w-md-33 bg-base-100 shadow">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="text-6xl text-center ">Nantu!</h2>
            <p>If You need car repair please contract Here ?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Contract Me</button>
        </div>
        </div>
    </div>
    <div className="card w-lg-25 w-md-33 bg-base-100 shadow ">
            <figure><img src={img2} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="text-6xl text-center font-semibold-500 ">Boltu!</h2>
            <p>If You need car repair please contract Here ?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Contract Me</button>
        </div>
        </div>
    </div>
    <div className="card w-lg-25 w-md-33 bg-base-100  shadow">
            <figure><img src={img3} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="text-6xl text-center font-semibold-500">Jorina!</h2>
            <p>If You need car repair please contract Here ?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Contract Me</button>
        </div>
        </div>
    </div>
    <div className="card w-lg-25 w-md-33 bg-base-100  shadow">
            <figure><img src={img4} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="text-6xl text-center font-semibold-500">Sokina!</h2>
            <p>If You need car repair please contract Here ?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Contract Me</button>
        </div>
        </div>
    </div>
    </div>
    );
};

export default Team;