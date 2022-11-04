import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { TileLayer, MapContainer, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import Btn from "../../assets/UI/button/Btn";
import Header from "../../assets/UI/header/Header";
import Pill from "../../assets/UI/pill/Pill";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Detailed = ({job}) => {
  
  const [description, setDescription] = useState([]);

  const router = useNavigate();

  const myIcon = L.icon({
    iconUrl: require('../../assets/icon/my-icon.png'),
    iconSize: [30, 30]
  });

  useEffect(() => {
    job.description && setDescription(job.description.split('\n'))
  }, [job])

  useEffect(() => {
    description.length && setDescription(description.filter(text => text.length > 10))
  }, [description.length])

  return(
    <div>
        {(Object.keys(job).length && description.length) &&
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-4/6">
                <div className="flex flex-col items-start">
                    <div className="w-full md:flex md:justify-between">
                        <Header>Job Details</Header>
                        <div className="flex font-normal text-base text-grey-star mt-6 mb-8 md:w-full md:justify-end md:mt-0 md:mb-6 md:border-b-2">
                            <button className="flex items-center">
                                <FontAwesomeIcon className="h-5 w-5 text-grey-star" icon='fa-regular fa-star' />
                                <span className="ml-3">Save to my list</span>
                            </button>
                            <button className="flex items-center ml-7">
                                <FontAwesomeIcon className="h-5 w-5 text-grey-star" icon='fa-solid fa-share-nodes' />
                                <span className="ml-3">Share</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex my-7">
                        <Btn style={'text-white bg-grey-title uppercase py-4 px-7 rounded-lg font-semibold text-xs hover:bg-grey-location duration-300'}>Apply now</Btn>
                    </div>
                    <div className="w-full">
                        <div className="md:flex justify-between items-start">
                            <h3 className="font-bold text-2xl text-grey-title md:w-4/6">{job.title}</h3>
                            <div className="hidden flex-col items-end justify-center md:flex">
                                <label className="text-grey-location font-normal text-lg">Brutto, per year</label>
                                <div className="text-grey-title font-bold text-xl mt-1">
                                    <FontAwesomeIcon className="" icon='fa-solid fa-euro-sign' />
                                    <span>{job.salary.split('-')[0].slice(0, -1)} 000 - {job.salary.split('-')[1].slice(0, -1)} 000</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between mt-1 mb-3.5">
                            <label className="font-light text-xs text-grey-location">Posted <span>{job.createdAt && new Date().getFullYear() - Number(job.createdAt.slice(0, 4))}</span> years ago</label>
                            <div className="flex flex-col items-end justify-center md:hidden">
                                <label className="text-grey-location font-normal text-lg">Brutto, per year</label>
                                <div className="text-grey-title font-bold text-xl mt-1">
                                    <FontAwesomeIcon className="" icon='fa-solid fa-euro-sign' />
                                    <span>{job.salary.split('-')[0].slice(0, -1)} 000 - {job.salary.split('-')[1].slice(0, -1)} 000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {description.length && 
                    <div>
                        <p className="font-normal text-lg text-grey-location mb-11">{description[0]}</p>
                        <h4 className="font-bold text-xl text-grey-title">{description[1]}</h4>
                        <p className="font-normal text-lg text-grey-location mb-5" >{description[2]}</p>
                        <h4 className="font-bold text-xl text-grey-title">{description[3]}</h4>
                        <ul className="pl-5 list-square font-normal text-lg text-grey-location mb-5">{description[4].split('.').map(text => text && <li>{text}</li>)}</ul>
                    </div>}
                    <div className="w-full md:w-auto flex justify-center items-center mb-32">
                        <Btn style={'text-white bg-grey-title uppercase py-4 px-7 rounded-lg font-semibold text-xs hover:bg-grey-location duration-300'}>Apply now</Btn>
                    </div>
                    <div className="w-full flex flex-col md:flex-col-reverse">
                        <div className="mb-11 w-full">
                            <Header>Attached images</Header>
                            <div className="w-full h-24 flex overflow-hidden">
                                {job.pictures.map(picture => <img className="min-w-200 max-w-200 h-full mr-1 rounded-lg" src={picture} alt="img"/>)}
                            </div>
                        </div>
                        <div className="mb-11 w-full">
                            <Header>Additional info</Header>
                            <ul>
                                <li className="text-grey-star font-normal text-lg">Employment type
                                    <ul className="flex mt-2.5 mb-6">
                                        {job.employment_type.map(type => <li><Pill style="bg-bg-pill-employment text-pill-employment border border-border-employment border-solid">{type}</Pill></li>)}
                                    </ul>
                                </li>
                                <li className="text-grey-star font-normal text-lg">Benefits
                                    <ul className="flex mt-2.5 mb-6">
                                        {job.benefits.map(type => <li><Pill style="bg-bg-pill-benefits text-pill-benefits border border-border-benefits border-solid">{type}</Pill></li>)}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block mt-20"><Btn onclick={() => router('/')} style='hidden md:flex text-grey-star uppercase bg-btn-grey-star rounded-lg py-4 px-6 font-semibold text-xs justify-between items-center duration-500 hover:bg-grey-star hover:text-white'><FontAwesomeIcon className="h-5 w-5 mr-5" icon="fa-solid fa-angle-left"/>Return to job board</Btn></div>
                </div>
            </div>
            <section className="flex justify-center w-full md:w-auto md:ml-6">
                <div className="flex w-full md:w-auto flex-col">
                    <div className="md:hidden w-full md:w-auto"><Header>Contacts</Header></div>
                    <div className="flex justify-center">
                        <div className="bg-bg-grey-location rounded-lg overflow-hidden relative">
                            <div className="bg-grey-circle z-10 w-64 h-64 rounded-full absolute top-n12 left-n77"></div>
                            <div className="z-20 bg-transparent px-14 py-7 flex flex-col text-white text-lg font-normal">
                                <h5 className="font bold text-xl z-20">Department name. <br/> {job.name}.</h5>
                                <div className="my-2 z-20">
                                    <label><FontAwesomeIcon className="z-20h-4 w-3 mr-2.5 text-grey-location" icon="fa-solid fa-location-dot" /></label>
                                    <span className="z-20">{job.address}</span>
                                </div>
                                <span className="z-20">{job.phone}</span>
                                <span className="z-20">{job.email}</span>
                            </div>
                            <div className="h-60 w-full relative overflow-hidden">
                                <MapContainer className="h-full w-full z-10" center={[job.location.lat, job.location.long]} zoom={9} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker icon={myIcon} position={[job.location.lat, job.location.long]}>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        }
    </div>
  )
}

export default Detailed