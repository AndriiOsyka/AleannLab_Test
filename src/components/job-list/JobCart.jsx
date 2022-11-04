import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

library.add(faStar);

const JobCart = ({job}) => {

  const [stars, setStars] = useState([0, 0, 0, 0, 0]);

  const [isCountStarsSet, setIsCountStarsSet] = useState(false);

  const router = useNavigate();

  const printStars = (index) => {
    if(!isCountStarsSet) {
      const solidStars = [0, 0, 0, 0, 0];
      for(let i = 0; i <= index; i++) {
        solidStars[i] = 1;
      }
      setStars(solidStars);
    }
  }

  const mouseLeave = () => {
    !isCountStarsSet && setStars([0, 0, 0, 0, 0])
  }

  const setCountStars = (index) => {
    const solidStars = [0, 0, 0, 0, 0];
    for(let i = 0; i <= index; i++) {
      solidStars[i] = 1;
    }
    setStars(solidStars);
    setIsCountStarsSet(true);
  }

  return (
    <div className="job-cart max-w-screen-xl my-1 mx-1 md:mx-0 rounded-lg px-4 py-6 bg-white md:flex md:flex-row-reverse md:items-center md:justify-between" >
      <section className="my-4 pl-104 md:pl-0 ma:my-0 md:h-full flex items-center justify-between">
        <span className="flex mr-8">
          {
            stars.map((star, index) => <FontAwesomeIcon onClick={() => setCountStars(index)} onMouseLeave={() => mouseLeave()} onMouseMove={() => printStars(index)} className="h-4 w-4 text-grey-star" icon={star ? 'fa-solid fa-star' : 'fa-regular fa-star'} />)
          }
        </span>
        <div className="md:h-full flex flex-col items-end justify-between">
          <button className="hidden md:block">
            <FontAwesomeIcon className="w-4 h-5 text-bookmark-icon hover:text-grey-title" icon='fa-regular fa-bookmark' />
          </button>
          <label className="font-normal text-base text-grey-location">Posted <span>{new Date().getFullYear() - Number(job.createdAt.slice(0, 4))}</span> years ago</label>
        </div>
      </section>
      <section className="flex md:items-center">
        <img className="h-20 w-20 min-w-20 rounded-full" src={job.pictures[0]} alt="logo" />
        <div className="ml-6">
          <h3 className="font-bold text-xl text-grey-title hover:cursor-pointer hover:text-black" onClick={() => router(`/detailed/${job.id}`)}>{job.title.slice(0, job.title.length-1)}</h3>
          <div className="font-normal text-base my-2 text-grey-location flex items-center">
            <label>Department name</label>
            <FontAwesomeIcon className="h-1 w-1 mx-2"  icon="fa-solid fa-circle" />
            <span>{job.name}</span>
          </div>
          <div className="text-grey-location">
            <label><FontAwesomeIcon className="h-4 w-3 mr-2.5" icon="fa-solid fa-location-dot" /></label>
            <span>{job.address}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobCart