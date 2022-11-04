import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../store/action-creators/jobsFetch";
import Spinner from "../spinner/Spinner";
import JobCart from "./JobCart";

const JobList = () => {

  const dispatch = useDispatch();

  const jobs = useSelector(state => state.jobs.jobs);

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  return (
    <div className="py-7 px-3 bg-slate-300 flex flex justify-center">
      <div className="flex flex-col items-stretch">
        {jobs.length ? jobs[0].map(job => <JobCart job={job} key={job.id}/>) : <Spinner />}
      </div>
    </div>
  )
}

export default JobList