// import { useState } from 'react';
// import './App.css';
// import Red from './components/Red/red';
// import NameCreateContext from './NameContext';
// import Language from './translate';
// import { useEffect } from 'react';





//------------------------------------------------------------------------------------
// import { Link, Route, Routes } from "react-router-dom";
// import Button from "./components/buttons/button";
// import Header from "./components/header/header";
// import Home from "./views/home/Home";
// import Help from "./views/help/Help";
// import Contact from "./views/contact/Contact";
// import About from "./views/about/About";
// import AboutPersonal from "./views/about/AboutPersonal";
// import AboutCompany from "./views/about/AboutCompany";


//AXIOSI HAMAR---------------------------------------------------------------------------

import { useCallback, useEffect, useMemo, useState } from "react";
import publicAPI from "./services/api/publicAPI";
import './App.css';

//Bjishkneri hamar---------------------------------------------------------------------------------

import doctorAPI from './services/api/doctoraxios'

//React i18next targmanutyun kazmakerpelu hamar--------------------------------------------------

// import { Trans, useTranslation } from "react-i18next";

//REDUX


function App() {

  // const [name, setName] = useState(Language.ru);

  // function translateRU (){
  //   setName(Language.ru)
  // }

  // function translateEN (){
  //   setName(Language.en)
  // }


  // AXIOSI HAMAR........................................................................

  // const [albom, setAlbom] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [photo, setPhoto] = useState([]);
  // const [status, setStatus] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   publicAPI.get('/albums').then((res) => {
  //     setAlbom(res.data);
  //     setLoading(false)
  //   })
  // }, []);

  // const handleClickImageId = useCallback((id) => {
  //   return () => {
  //     setLoading(true);
  //     publicAPI.get('/photos', {
  //       params: {
  //         albumId: id
  //       }
  //     }).then((res) => {
  //       setPhoto(res.data)
  //       setLoading(false);
  //       setStatus(false)
  //     })
  //   }
  // })

  // const content = useMemo(() => {
  //   if (status) {
  //     return albom.map((item, index) => {
  //       return (
  //         <div onClick={handleClickImageId(item.id)} className="card" key={index}>
  //           <h2>ID: {item.id}</h2>
  //           <h3>TITLE: {item.title}</h3>
  //         </div>
  //       )
  //     })
  //   }
  //   else {
  //     return photo.map((item, index) => {
  //       return (
  //         <div key={index}>
  //           <img style={{ width: '50px', height: '50px' }} src={item.url} />
  //         </div>
  //       )
  //     })
  //   }
  // }, [status, albom, photo]);


  // userner--------------------------------------------------------------------------------------------------------------
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    publicAPI.get('/users').then((res) => {
      setUsers(res.data);

    })
  }, [])



  const getNameid = useCallback((id) => {
    return () => {
      publicAPI.get('/users', {
        params: {
          id: id
        }
      }).then((res) => {
        setName(res.data)
      })
    }
  })

  //bjishkneri hamar------------------------------------------------------------------------------
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    doctorAPI.get('/', {
      params: {
        page: 1,
        category: 1
      }
    }).then((res) => {
      setDoctor(res.data);
      console.log(res.data);
    })
  }, [])

  //React i18next targmanutyun kazmakerpelu hamar---------------------------------------------------------

  // const { t, i18n } = useTranslation();
  return (
    <>
    {doctor.count}
      {/* {doctor.map((item, index) => {
        return <h1 key={index}>
          {item.count}
        </h1>
      })} */}
      <button>Терапевт</button>
      <button>Педиатр</button>
      <button>Акушер-гинеколог</button>

        {/* userner */}
      {users.map((item, index) => {
        return <button onClick={getNameid(item.id)} key={index}>
          {item.id}
        </button>
      })}

      {name.map((item, index) => {
        return <div>
          <h1 key={index}>{item.name}</h1>
          <h1 key={index}>{item.phone}</h1>
        </div>
      })}




      {/* <NameCreateContext.Provider value={{ name, setName,translateRU,translateEN }}>
        <Red />
      </NameCreateContext.Provider>
        <div className='container'></div> */}



      {/* <Header />
      <Link to={'/help'}>Help</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/about'}>About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />}>
          <Route path="personal" element={<AboutPersonal />} />
          <Route path="company" element={<AboutCompany />} />
        </Route>
      </Routes> */}


      {/* AXIOSI HAMAR ----------------------------------------------------------------------*/}
      {/* 
      {<div>
        {loading ? <p>Loading ........</p> : content}
      </div>} */}



      {/* {React i18next targmanutyun kazmakerpelu hamar} ------------------------------------------------------*/}

      {/* <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>{t('header.name')}</div>
        <div>
        <Trans i18nKey={'header.html'}>
          <span></span><b style={{color: 'blue'}}></b><span></span><b style={{color: 'red'}}></b>
        </Trans>
        </div>
      </div>

      <button onClick={() => {
        i18n.changeLanguage('en')
      }}>ru</button>
      <button onClick={() => {
        i18n.changeLanguage('ru')
      }}>en</button> */}

    </>
  )
}

export default App;
