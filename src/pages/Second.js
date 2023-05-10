import React from "react";
import StarRatings from 'react-star-ratings';

import topBg from '../assets/images/2-top.png';
import textBg from '../assets/images/2-textbg.png';
import avatar from '../assets/images/team/team-1.jpg';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";

const Second = () => {

    const [rating1, setRating1] = React.useState(5);
    const [rating2, setRating2] = React.useState(5);
    const [rating3, setRating3] = React.useState(4);
    const [rating4, setRating4] = React.useState(3);
    const [rating5, setRating5] = React.useState(2);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3 bg-[#e9e9e9] border-solid border-r-2 border-[#d2d2d2]">
                <div className="mt-20">
                    <img src={avatar} style={{ width: '100%' }} alt="avatar" />
                </div>
                <div className="py-8 border-b-2 border-solid border-white">
                    <h1 className='font-bold text-3xl text-center mb-4'>CONTACT</h1>
                    <div>
                        <div className='flex flex-wrap my-3'>
                            <div className='py-1 px-6 bg-black inline-block rounded-br-3xl'>
                                <HiOutlineMail className='text-2xl text-white' />
                            </div>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>Tayamiass@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap my-3'>
                            <div className='py-1 px-6 bg-[#096eb2] inline-block rounded-br-3xl'>
                                <HiOutlinePhone className='text-2xl text-white' />
                            </div>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>+1 267 404 1272</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap my-3'>
                            <div className='py-1 px-6 bg-[#079fdb] inline-block rounded-br-3xl'>
                                <HiOutlineMapPin className='text-2xl text-white' />
                            </div>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>132, Kingston, New York</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap my-3'>
                            <div className='py-1 px-6 bg-[#1b202b] inline-block rounded-br-3xl'>
                                <FaLinkedinIn className='text-2xl text-white' />
                            </div>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>rezument</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b-2 border-solid border-white">
                    <h1 className='font-bold text-3xl text-center mb-4'>SKILLS</h1>
                    <div>
                        <div className='grid grid-cols-2 flex-wrap my-3'>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>Web design</p>
                            </div>
                            <StarRatings
                                rating={rating1}
                                starRatedColor="#026eb1"
                                changeRating={newRating => setRating1(newRating)}
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="3px"
                                name='rating'
                            />
                        </div>
                        <div className='grid grid-cols-2 flex-wrap my-3'>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>Graphic design</p>
                            </div>
                            <StarRatings
                                rating={rating2}
                                starRatedColor="#026eb1"
                                changeRating={newRating => setRating2(newRating)}
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="3px"
                                name='rating'
                            />
                        </div>
                        <div className='grid grid-cols-2 flex-wrap my-3'>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>UI design</p>
                            </div>
                            <StarRatings
                                rating={rating3}
                                starRatedColor="#026eb1"
                                changeRating={newRating => setRating3(newRating)}
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="3px"
                                name='rating'
                            />
                        </div>
                        <div className='grid grid-cols-2 flex-wrap my-3'>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>Drawing</p>
                            </div>
                            <StarRatings
                                rating={rating4}
                                starRatedColor="#026eb1"
                                changeRating={newRating => setRating4(newRating)}
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="3px"
                                name='rating'
                            />
                        </div>
                        <div className='grid grid-cols-2 flex-wrap my-3'>
                            <div className='my-auto mx-5'>
                                <p className='text-gray-800'>Animation</p>
                            </div>
                            <StarRatings
                                rating={rating5}
                                starRatedColor="#026eb1"
                                changeRating={newRating => setRating5(newRating)}
                                numberOfStars={5}
                                starDimension="25px"
                                starSpacing="3px"
                                name='rating'
                            />
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b-2 border-solid border-white">
                    <h1 className='font-bold text-3xl text-center mb-4'>LANGUAGES</h1>
                    <div>
                        <div className='grid grid-cols-12 flex-wrap my-3'>
                            <div className='col-span-5 my-auto mx-5'>
                                <p className='text-gray-800'>ENGLISH</p>
                            </div>
                            <div className="col-span-7 bg-gray-200 h-3 mr-5">
                                <div className="bg-[#026eb1] h-5" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 flex-wrap my-3'>
                            <div className='col-span-5 my-auto mx-5'>
                                <p className='text-gray-800'>SPANISH</p>
                            </div>
                            <div className="col-span-7 bg-gray-200 h-3 mr-5">
                                <div className="bg-[#026eb1] h-5" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 flex-wrap my-3'>
                            <div className='col-span-5 my-auto mx-5'>
                                <p className='text-gray-800'>POLISH</p>
                            </div>
                            <div className="col-span-7 bg-gray-200 h-3 mr-5">
                                <div className="bg-[#026eb1] h-5" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-9">
                <div className="bg-cover h-[80px] w-full" style={{ backgroundImage: `url(${topBg})` }}>
                    <p className="text-right pt-6 pr-10 uppercase text-white text-lg font-semibold">
                        the course of life - YANN RESUME
                    </p>
                </div>
                <div className="py-6 pl-5 pr-10">
                    <h1 className='font-bold text-4xl mb-4'>YANN RESUME</h1>
                    <h2 className='font-bold text-2xl mb-4'>FULL STACK WEB DEVELOPER</h2>
                    <p className="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="py-6 pr-10">
                    <div className="bg-cover h-[50px] w-full" style={{ backgroundImage: `url(${textBg})` }}>
                        <h2 className='font-bold pl-5 text-2xl pt-2 mb-4 text-white'>WORK EXPERIENCE</h2>
                    </div>
                    <div className="pl-5">
                        <div className="flex justify-between mt-5">
                            <p className="text-[#096eb2] text-lg font-bold">Lorem Ipsum is simply</p>
                            <p className="text-[#079fdb] text-base">Dec 2012 - Automobile</p>
                        </div>
                        <div>
                            <p className="text-gray-500">
                                <strong className="font-bold text-black">Lorem Ipsum is simply</strong>
                                 - Lorem Ipsum
                            </p>
                        </div>
                        <p className="text-gray-800 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className="font-bold mt-7">Missions / Results obtained</p>
                        <ul className="text-gray-800">
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                        </ul>
                    </div>
                    <div className="pl-5">
                        <div className="flex justify-between mt-5">
                            <p className="text-[#096eb2] text-lg font-bold">Lorem Ipsum is simply</p>
                            <p className="text-[#079fdb] text-base">Dec 2012 - Automobile</p>
                        </div>
                        <div>
                            <p className="text-gray-500">
                                <strong className="font-bold text-black">Lorem Ipsum is simply</strong>
                                 - Lorem Ipsum
                            </p>
                        </div>
                        <p className="text-gray-800 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className="font-bold mt-7">Missions / Results obtained</p>
                        <ul className="text-gray-800">
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-6 pb-20 pr-10">
                    <div className="bg-cover h-[50px] w-full" style={{ backgroundImage: `url(${textBg})` }}>
                        <h2 className='font-bold pl-5 text-2xl pt-2 mb-4 text-white'>EDUCATION</h2>
                    </div>
                    <div className="pl-5">
                        <div className="flex justify-between mt-5">
                            <p className="text-[#096eb2] text-lg font-bold">Lorem Ipsum is simply</p>
                            <p className="text-[#079fdb] text-base">2003 - 2007</p>
                        </div>
                        <div>
                            <p className="text-gray-500">
                                <strong className="font-bold text-black">Lorem Ipsum is simply</strong>
                                 - Lorem Ipsum
                            </p>
                        </div>
                        <p className="text-gray-800 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="pl-5">
                        <div className="flex justify-between mt-5">
                            <p className="text-[#096eb2] text-lg font-bold">Lorem Ipsum is simply</p>
                            <p className="text-[#079fdb] text-base">2007 - 2011</p>
                        </div>
                        <div>
                            <p className="text-gray-500">
                                <strong className="font-bold text-black">Lorem Ipsum is simply</strong>
                                 - Lorem Ipsum
                            </p>
                        </div>
                        <p className="text-gray-800 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Second;