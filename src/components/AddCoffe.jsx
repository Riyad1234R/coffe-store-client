import React from 'react';
import Swal from 'sweetalert2';

const AddCoffe = () => {
    const handleAddCoffe =event=>{
        event.preventDefault();

        const form =event.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const catagory =form.catagory.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const newCoffe ={name,quantity,supplier,taste,catagory,details,photo,}

        console.log(newCoffe)

        // send data to the server
        fetch( 'http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffe)
        })
        .then(res =>res.json())
        .then(data =>{
       
                Swal.fire({
                    title: 'Success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffe</h2>
            <form onSubmit={handleAddCoffe}>
                {/* form name and quantity row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='name' placeholder="Coffe Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Availabil Quantiy</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="quantity" placeholder="Availabil Quantiy" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form catagory and details row */}
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Catagory</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='catagory' placeholder="Catagory" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name='photo' placeholder="photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>              
                </div>
                <input type="submit" value="Add Cooffe "className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddCoffe;