import React, { startTransition, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Detailed from "../components/detailed/Detailed";
import Spinner from "../components/spinner/Spinner";

const DetailedJob = () => {

  const params = useParams();

  const [current_job, setJob] = useState({});

  const jobs = useSelector(state => state.jobs.jobs);

  useEffect(() => {
    jobs[0] && jobs[0].forEach(job => { job.id === params.id && setJob(job)})
  }, [])

  return (
    <div className="py-6 px-4">
      {
        Object.keys(current_job).length ? <Detailed job={current_job}/> : <Spinner />
      }
    </div>
  )
}

export default DetailedJob