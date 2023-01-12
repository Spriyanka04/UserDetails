import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Detail = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state.data;
  console.log(data.name);
  const Menus = [
    { title: "Profile" },
    { title: "Posts" },
    { title: "Gallery" },
    { title: "ToDo " },
  ];
  
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };
    
  return (
    <div className="flex p-10 ">
      <div
        className={` ${open ? "w-60" : "w-20 "
          } bg-blue-700 h-screen p-5 pt-8  rounded-3xl relative duration-300`}
      >
        <img
          src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png" alt=""
          className={`absolute cursor-pointer -right-3 top-60 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
          </h1>
        </div>
        <ul className="pt-36 divide-y">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 divide-y divide-gray-200 space-y-5">
        <div className=" flex space-x-4">
          <h1 className="text-2xl ">Profile</h1>
          <div className="flex space-x-2">
            <img src={data.profilepicture} className="rounded-full w-10 h-10 float-left " alt=""
              onClick={() => navigate('/')}

            />
            <label className="font-gray">{data.name}</label>
          </div>
        </div>
        <div className="flex divide-x divide-gray-300">
          <div className=" w-1/2 pt-10">
            <div className="h-32 flex flex-col items-center justify-center">
              <img src={data.profilepicture} className="rounded-full w-44 h-44" alt="" />
            </div>
            <div className='p-10'>
              <div className="flex items-center justify-center">
                <label className="text-black text-xl mb-3">
                  {data.name}
                </label>
              </div>
              <div className="divide-y divide-gray-300 space-y-5">
                <div className=" flex-col pt-4 pl-8 space-x-2 ">
                  <span>
                    <label className="font-gray text-gray-400 text-lg">UserName:</label>
                    <label className="font-gray">{data.name}</label>
                  </span>
                  <br />
                  <span>
                    <label className="font-gray text-gray-400 text-lg">e-mail:</label>
                    <label className="font-gray">{data.email}</label>
                  </span>
                  <br />
                  <span>
                    <label className="font-gray text-gray-400 text-lg">Phone :</label>
                    <label className="font-gray">{data.phone}</label>
                  </span>
                  <br />
                  <span>
                    <label className="font-gray text-gray-400 text-lg">WebSite :</label>
                    <label className="font-gray">{data.website}</label>
                  </span>
                </div>

                <div>
                  <div className="space-x-2 ">
                    <div className="flex items-center justify-center">
                      <label className="text-gray-400 text-xl mb-3">
                        Company
                      </label>
                    </div>
                    <div className="pl-8 ">
                      <span>
                        <label className="font-gray text-gray-400 text-lg">Name :</label>
                        <label className="font-gray">{data.company.name}</label>
                      </span>
                      <br />
                      <span>
                        <label className="font-gray text-gray-400 text-lg">Catchpharse :</label>
                        <label className="font-gray">{data.company.catchPhrase}</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-1/2 p-10">
            <div>
              <label className="text-gray-400 text-xl mb-3">
                Address :
              </label>
            </div>
            <div className="p-5">
              <span>
                <label className="font-gray text-gray-400 text-lg">Street :</label>
                <label className="font-gray">{data.address.street}</label>
              </span>
              <br />
              <span>
                <label className="font-gray text-gray-400 text-lg">suite :</label>
                <label className="font-gray">{data.address.suite}</label>
              </span>
              <br />
              <span>
                <label className="font-gray text-gray-400 text-lg">City :</label>
                <label className="font-gray">{data.address.city}</label>
              </span>
              <br />
              <span>
                <label className="font-gray text-gray-400 text-lg">ZipCode:</label>
                <label className="font-gray">{data.address.zipcode}</label>
              </span>
            </div>
            <div className="h-80 w-80">
            <img src="https://www.researchgate.net/figure/Map-of-Adayar-River-Source-Google-Maps_fig3_348366146" 
            className="h-52 w-52" alt="" />
              <h1>Code for Google Map is their but key is not supporting</h1>
              {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={data.address.lat}
                  lng={data.address.lng}
                  text="My Marker"
                />
              </GoogleMapReact> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
