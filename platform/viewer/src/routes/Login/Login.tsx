import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Svg } from '@ohif/ui';

function Local() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // Set body style
  useEffect(() => {
    console.log('window.crossOriginIsolated', window.crossOriginIsolated);
    document.body.classList.add('bg-black');
    return () => {
      document.body.classList.remove('bg-black');
    };
  }, []);

  const submit = () => {
    if (id === 'GRK' && password === 'qwer1234') {
      navigate('/project');
    } else {
      alert('아이디 비번을 확인하세요');
      return false;
    }
    //console.log(id, password);
    return false;
  };

  return (
    <section className="h-full gradient-form bg-black md:h-screen">
      <div className="w-full py-12 px-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6  text-white">
          <div className="w-80">
            <div className="lg:flex-wrap g-0">
              <div className="text-center">
                <h4 className="text-2xl font-semibold mt-1 mb-4 pb-1">LOGIN</h4>
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-2 text-base font-normal text-gray-300 bg-gray-900 bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-300 focus:bg-gray-800 focus:border-cyan-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="ID"
                    value={id}
                    onChange={e => {
                      setId(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control block w-full px-3 py-2 text-base font-normal text-gray-300 bg-gray-900 bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-300 focus:bg-gray-800 focus:border-cyan-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-800 rounded-sm bg-gray-900 checked:bg-primary-light checked:border-cyan-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-white text-sm"
                      htmlFor="exampleCheck2"
                    >
                      Remember ID
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="text-white underline underline-offset-1 text-sm"
                  >
                    Forgot Password?
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block w-full px-7 py-3 bg-primary-light text-gray-900 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-light hover:shadow-lg focus:bg-primary-light focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-light active:shadow-lg transition duration-150 ease-in-out"
                    onClick={submit}
                  >
                    Login
                  </button>
                  <p className="text-base mt-6 pt-1 mb-0 text-center">
                    Don't have an account?
                    <a
                      href="#!"
                      className="text-primary-light ml-4 underline hover:text-primary-light focus:text-primary-light transition duration-200 ease-in-out"
                    >
                      Sing Up
                    </a>
                  </p>
                </div>
                <div className="mt-48  flex justify-center">
                  <Svg
                    name="logo-ohif"
                    style={{ width: '180px', height: '40px' }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Local;
