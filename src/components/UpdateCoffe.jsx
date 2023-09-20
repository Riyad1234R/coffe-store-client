import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, catagory, details, photo, } =coffee;
    const handleUpdateCoffe =event=>{
        event.preventDefault();

        const form =event.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const catagory =form.catagory.value;
        const details =form.details.value;
        const photo =form.photo.value;

        const updatedCoffee ={name,quantity,supplier,taste,catagory,details,photo,}

        console.log(updatedCoffee)

        // send data to the server
        fetch( `http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
       console.log(data)
       if(data.modifiedCount >0){
        Swal.fire({
            title: 'Success!',
            text: 'Coffe updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
       }
              
            
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
        <h2 className='text-3xl font-extrabold'>Update Coffe:{name}</h2>
        <form onSubmit={handleUpdateCoffe}>
            {/* form name and quantity row */}
            <div className='md:flex mb-6'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffe Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name='name' defaultValue={name} placeholder="Coffe Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Availabil Quantiy</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Availabil Quantiy" className="input input-bordered w-full" />
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
                        
                        <input type="text" name='supplier'defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
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
                        
                        <input type="text" name='catagory'defaultValue={catagory} placeholder="Catagory" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="details"defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
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
                        
                        <input type="text" name='photo'defaultValue={photo} placeholder="photo URL" className="input input-bordered w-full" />
                    </label>
                </div>              
            </div>
            <input type="submit" value="Update Cooffe "className='btn btn-block' />
        </form>
    </div>
    );
};

export default UpdateCoffe;