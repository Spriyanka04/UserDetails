import React from 'react'
import Record from './records.json';
import './index.css'
import { useNavigate } from 'react-router-dom';

function UserList() {
    const navigate = useNavigate();

  return (
    <>
      
      <div className='h-full w-full place-items-center bg-slate-400' >
              <div className="h-screen flex flex-col items-center justify-center">
                <div className="w-96">
                  <div className='bg-gray-100 h-16 p-4 pl-28 rounded-t-lg'>
                    <p className="text-black text-xl mb-3">
                      Select an account
                    </p>
                  </div>
                  <div className='bg-white divide-y divide-gray-200 rounded-b-lg'>
                    {
                      Record.map(record => {
                        return (
                          <div className="box h-12 w-80 pl-10">
                            <div className='p-3 space-x-5'>
                              <img src={record.profilepicture} className="rounded-full w-8 h-8 float-left" alt=''
                                onClick={()=> navigate('/detail', {
                                    state:{
                                        data: record
                                    }
                                  })}
                              />

                              <label>{record.name}</label>

                            </div>

                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
    </>
  );
}
export default UserList;
