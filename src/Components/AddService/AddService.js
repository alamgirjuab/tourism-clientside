import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://creepy-catacombs-89683.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className='add-service my-5 container'>
            <h2 className="text-primary">Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="description" />
                {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
                <input {...register("img")} placeholder="image url" />
                <input className="button" type="submit" />
            </form>
        </div>
    );
};

export default AddService;