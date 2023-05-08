import './App.css';
import topBg from './assets/images/top-bg.png';
import bottomBg from './assets/images/bottom-bg.png';
import avatar from './assets/images/team/team-4.jpg';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { GrMail } from "react-icons/gr";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { TfiWorld } from "react-icons/tfi";

function App() {
  return (
    <div className="App">
      <div>
        <img src={topBg} alt="top bg" />
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-5 mt-[-170px]'>
            <div className='flex justify-center'>
              <img src={avatar} className='border-[15px] border-solid border-[#00a7a0] rounded-[50%]' alt="avatar" width={300} height={300} />
            </div>
            <div>
              <h1 className='font-bold text-6xl text-center my-3'>TAYA MIASS</h1>
              <h2 className='font-bold text-xl text-center my-3'>GRAPHIC DESIGNER</h2>
              <p className='my-3 text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>
            <div>
              <h1 className='font-bold text-4xl text-center my-8'>CONTACT</h1>
              <div className='flex flex-wrap my-3'>
                <div className='py-3 px-5 bg-[#00a7a0] inline-block rounded-tl-[50%] rounded-br-[50%]'>
                  <GrMail className='text-4xl text-white' />
                </div>
                <div className='my-auto mx-5'>
                  <p className='text-gray-500 text-2xl'>Tayamiass@gmail.com</p>
                </div>
              </div>
              <div className='flex flex-wrap my-3'>
                <div className='py-3 px-5 bg-[#00a7a0] inline-block rounded-tl-[50%] rounded-br-[50%]'>
                  <HiOutlinePhone className='text-4xl text-white' />
                </div>
                <div className='my-auto mx-5'>
                  <p className='text-gray-500 text-2xl'>+82 0256 2125</p>
                </div>
              </div>
              <div className='flex flex-wrap my-3'>
                <div className='py-3 px-5 bg-[#00a7a0] inline-block rounded-tl-[50%] rounded-br-[50%]'>
                  <HiOutlineMapPin className='text-4xl text-white' />
                </div>
                <div className='my-auto mx-5'>
                  <p className='text-gray-500 text-2xl'>Lima, Peru</p>
                </div>
              </div>
              <div className='flex flex-wrap my-3'>
                <div className='py-3 px-5 bg-[#00a7a0] inline-block rounded-tl-[50%] rounded-br-[50%]'>
                  <TfiWorld className='text-4xl text-white' />
                </div>
                <div className='my-auto mx-5'>
                  <p className='text-gray-500 text-2xl'>www.tayamiass.com</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-4xl text-center my-8'>SKILLS</h1>
              <div className='grid grid-cols-2 gap-2 py-3'>
                <p className='text-gray-700 text-2xl'>Web design</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                  <div className="bg-[#00a7a0] h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2 py-3'>
                <p className='text-gray-700 text-2xl'>Graphic design</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                  <div className="bg-[#00a7a0] h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2 py-3'>
                <p className='text-gray-700 text-2xl'>UI design</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                  <div className="bg-[#00a7a0] h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2 py-3'>
                <p className='text-gray-700 text-2xl'>Drawing</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                  <div className="bg-[#00a7a0] h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-2 py-3'>
                <p className='text-gray-700 text-2xl'>Animation</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                  <div className="bg-[#00a7a0] h-3 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-7'>
            <div className='mb-14'>
              <div className='py-3 w-[80%] ml-6 bg-[#00a7a0] rounded-tl-full rounded-br-full border-solid border-r-8 border-r-[#05d0c5]'>
                <h1 className='font-bold text-3xl text-center text-white'>EDUCATION</h1>
              </div>
              <div className='relative my-8'>
                <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
                <div className="relative block">
                  <div className="mb-4 rounded-md ml-[-8px]">
                    <div className="flex pb-6">
                      <span className="float-left text-white text-2xl leading-12 text-center w-14 h-5 bg-black font-semibold rounded-full"></span>
                      <div className='grid grid-cols-12 gap-6 text-gray-700 text-xl font-bold'>
                        <div className="col-span-2 text-center">
                          <p>2022</p>
                          <p>2021</p>
                        </div>
                        <div className="col-span-10">
                          <h4 className='uppercase'>Lorem Ipsum Dolor</h4>
                          <p className='text-gray-500 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pb-6">
                      <span className="float-left text-white text-2xl leading-12 text-center w-14 h-5 bg-black font-semibold rounded-full"></span>
                      <div className='grid grid-cols-12 gap-6 text-gray-700 text-xl font-bold'>
                        <div className="col-span-2 text-center">
                          <p>2022</p>
                          <p>2021</p>
                        </div>
                        <div className="col-span-10">
                          <h4 className='uppercase'>Lorem Ipsum Dolor</h4>
                          <p className='text-gray-500 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pb-6">
                      <span className="float-left text-white text-2xl leading-12 text-center w-14 h-5 bg-black font-semibold rounded-full"></span>
                      <div className='grid grid-cols-12 gap-6 text-gray-700 text-xl font-bold'>
                        <div className="col-span-2 text-center">
                          <p>2022</p>
                          <p>2021</p>
                        </div>
                        <div className="col-span-10">
                          <h4 className='uppercase'>Lorem Ipsum Dolor</h4>
                          <p className='text-gray-500 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-14'>
              <div className='py-3 w-[80%] ml-6 bg-[#00a7a0] rounded-tl-full rounded-br-full border-solid border-r-8 border-r-[#05d0c5]'>
                <h1 className='font-bold text-3xl text-center text-white'>WORK EXPERIENCE</h1>
              </div>
              <div className='relative my-8'>
                <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
                <div className="relative block">
                  <div className="mb-4 rounded-md ml-[-8px]">
                    <div className="flex pb-6">
                      <span className="float-left text-white text-2xl leading-12 text-center w-14 h-5 bg-black font-semibold rounded-full"></span>
                      <div className='grid grid-cols-12 gap-6 text-gray-700 text-xl font-bold'>
                        <div className="col-span-2 text-center">
                          <p>2022</p>
                          <p>2021</p>
                        </div>
                        <div className="col-span-10">
                          <h4 className='uppercase'>Lorem Ipsum Dolor</h4>
                          <p className='text-gray-500 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pb-6">
                      <span className="float-left text-white text-2xl leading-12 text-center w-14 h-5 bg-black font-semibold rounded-full"></span>
                      <div className='grid grid-cols-12 gap-6 text-gray-700 text-xl font-bold'>
                        <div className="col-span-2 text-center">
                          <p>2022</p>
                          <p>2021</p>
                        </div>
                        <div className="col-span-10">
                          <h4 className='uppercase'>Lorem Ipsum Dolor</h4>
                          <p className='text-gray-500 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pb-6">
                      <span className="float-left text-white text-2xl leading-12 text-center w-14 h-5 bg-black font-semibold rounded-full"></span>
                      <div className='grid grid-cols-12 gap-6 text-gray-700 text-xl font-bold'>
                        <div className="col-span-2 text-center">
                          <p>2022</p>
                          <p>2021</p>
                        </div>
                        <div className="col-span-10">
                          <h4 className='uppercase'>Lorem Ipsum Dolor</h4>
                          <p className='text-gray-500 text-base font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-14'>
              <div className='py-3 w-[80%] ml-6 bg-[#00a7a0] rounded-tl-full rounded-br-full border-solid border-r-8 border-r-[#05d0c5]'>
                <h1 className='font-bold text-3xl text-center text-white'>LANGUAGES</h1>
              </div>
              <div className='grid grid-cols-3 my-8 mx-6'>
                <div style={{ width: 150, height: 150 }}>
                  <CircularProgressbarWithChildren value={100} styles={{ path: { stroke: 'black' } }}>
                    <h2>ENGLISH</h2>
                    <h1 style={{ fontSize: 28, fontWeight: 500, marginTop: -5 }}>100%</h1>
                  </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 150, height: 150 }}>
                  <CircularProgressbarWithChildren value={85} styles={{ path: { stroke: 'black' } }}>
                    <h2>SPANISH</h2>
                    <h1 style={{ fontSize: 28, fontWeight: 500, marginTop: -5 }}>85%</h1>
                  </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 150, height: 150 }}>
                  <CircularProgressbarWithChildren value={60} styles={{ path: { stroke: 'black' } }}>
                    <h2>POLISH</h2>
                    <h1 style={{ fontSize: 28, fontWeight: 500, marginTop: -5 }}>60%</h1>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={bottomBg} alt="bottom bg" />
      </div>
    </div>
  );
}

export default App;