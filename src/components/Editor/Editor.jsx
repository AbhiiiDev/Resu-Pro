import React from 'react'
import styles from './Editor.module.css'
import { useState, useEffect } from 'react';
import InputControl from '../InputControl/InputControl';
import { X } from 'react-feather';

function Editor(props) {
  const sections = props.sections;
  // console.log('Sections prop:', sections);
  // console.log('Number of keys:', Object.keys(sections).length);


  const information = props.information;

  //for section keys: 
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  ); //initial active will be first one 
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
const [activeDetailIndex,setActiveDetailIndex]=useState(0);


  //values usestate
  const [values, setValues] = useState({
    name: activeInformation?.details?.name || "",
    title: activeInformation?.details?.name || "",
    linkedin: activeInformation?.details?.name || "",
    github: activeInformation?.details?.name || "",
    phone: activeInformation?.details?.name || "",
    email: activeInformation?.details?.name || "",
  })

  //function to update points values
  const handlePointsUpdate = (values, index) => {
    const tempValues = { ...values } //making copy of values
    if(!Array.isArray(tempValues.points)) tempValues.points=[]
    tempValues.points[index] = values
    setValues(tempValues);
  }


  //maintaining body for each component:(defines how many forms will be there)

  const WorkExpBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          value={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}

        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          value={values.companyName}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, certificationLink: event.target.value }))
          }}
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }}
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 0)

          }
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 2)}
        />
      </div>


    </div>


  )
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"

          placeholder="Enter title eg. Chat app"
          value={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}
        />
      </div>
      <InputControl
        label="Overview"

        placeholder="Enter basic overview of project"
        value={values.overview}
        onChange={(event) => {
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"

          placeholder="Enter deployed link of project"
          value={values.link}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }}
        />
        <InputControl
          label="Github Link"

          placeholder="Enter github link of project"
          value={values.github}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 0)

          }
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 1)

          }
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 2)

          }
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 3)

          }
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"


          placeholder="Enter title eg. B-tech"
          value={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}
        />
      </div>
      <InputControl
        label="College/School Name"

        placeholder="Enter name of your college/school"
        value={values.college}
        onChange={(event) => {
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }}
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }}
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          value={values.name}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }}
        />
        <InputControl
          label="Title"

          placeholder="Enter your title eg. Frontend developer"
          value={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"

          placeholder="Enter your linkedin profile link"
          value={values.linkedin}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }}
        />
        <InputControl
          label="Github Link"

          placeholder="Enter your github profile link"
          value={values.github}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"

          placeholder="Enter your email"
          value={values.email}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }}
        />
        <InputControl
          label="Enter phone"

          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }}
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 0)

          }

        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 1)

          }
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 2)

          }
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 3)

          }
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"

        placeholder="Enter your objective/summary"
        value={values.summary}
        onChange={(event) => {
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }}

      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"

        placeholder="Enter something"
        value={values.other}
        onChange={(event) => {
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }}

      />
    </div>
  );
  //detecting which section is active, whose form to show 
  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: return basicInfoBody;
      case sections.workExp: return WorkExpBody;
      case sections.project: return projectBody;
      case sections.education: return educationBody;
      case sections.achievement: return achievementsBody;
      case sections.summary: return summaryBody;
      case sections.other: return otherBody;
      default:
        return null;
    }

  };


  //handling submission of details
  //responsible for data updation
  const handleSubmission = () => {
    console.log(values);
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        {
          const tempDetail = {
            name: values.name,
            title: values.title,
            linkedin: values.linkedin,
            github: values.github,
            email: values.email,
            phone: values.phone,

          }
          props.setInformation(prev => ({
            ...prev, [sections.basicInfo]:
              { ...prev[sections.basicInfo], detail: tempDetail },
          }))
          break
        }
      case sections.workExp:
        {
          const tempDetail = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            companyName: values.companyName,
            location: values.location,
              points: values.points,


          }
          //first details then at particular index new details updated 
const tempDetails=[...information[sections.workExp]?.details];
tempDetails[activeDetailIndex]=tempDetail;

          props.setInformation(prev => ({
            ...prev, [sections.workExp]:
              { ...prev[sections.workExp], detail: tempDetails },
          }))

          break
        }
      case sections.project:
        {
          const tempDetail = {
           
            link:values.link,
            title:values.title,
            overview:values.overview,
            github: values.github,
                points: values.points,
  
           
          

          }
          //first details then at particular index new details updated 
const tempDetails=[...information[sections.project]?.details];
tempDetails[activeDetailIndex]=tempDetail;

          props.setInformation(prev => ({
            ...prev, [sections.project]:
              { ...prev[sections.project], detail: tempDetails },
          }))

          break
        }
      case sections.education:
        {
          const tempDetail = {
          title:values.title,
          college:values.college,
          startDate:values.startDate,
          endDate:values.endDate,    

          }
          //first details then at particular index new details updated 
const tempDetails=[...information[sections.education]?.details];
tempDetails[activeDetailIndex]=tempDetail;

          props.setInformation(prev => ({
            ...prev, [sections.education]:
              { ...prev[sections.education], detail: tempDetails },
          }))

          break
        }
      case sections.achievement:
        {
          const tempPoints = values.points;


          props.setInformation(prev => ({
            ...prev, [sections.achievement]:
              { ...prev[sections.achievement], points: tempPoints },
          }))

          break
        }
        case sections.summary:
          {
            const tempDetail = values.summary;
      
            props.setInformation(prev => ({
              ...prev, [sections.summary]:
                { ...prev[sections.summary], detail: tempDetail },
            }))
  
            break
          }
        case sections.other:
          {
            const tempDetail = values.other;
      
            props.setInformation(prev => ({
              ...prev, [sections.other]:
                { ...prev[sections.other], detail: tempDetail },
            }))
  
            break
          }
    }
  }
    //useeffect to set active information at time of active section key
    useEffect(() => {
      const activeInfo = information[sections[activeSectionKey]]
      setActiveInformation(activeInfo);
      setActiveDetailIndex(0);
      setValues({
        name: activeInfo?.detail?.name || "",
        overview: activeInfo?.details ? activeInfo.details[0]?.overview || "" : "", //details first by default:selected
        link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
        certificationLink: activeInfo?.details ? activeInfo.details[0]?.certificationLink || "" : "",
        companyName: activeInfo?.details ? activeInfo.details[0]?.companyName || "" : "",
        location: activeInfo?.details ? activeInfo.details[0]?.location || "" : "",
        startDate: activeInfo?.details ? activeInfo.details[0]?.startDate || "" : "",
        endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
        points: activeInfo?.details
          ? activeInfo.details[0]?.points
            ? [...activeInfo.details[0]?.points] :
            ""
          : activeInfo.points
            ? [...activeInfo.points]
            : "",
        title: activeInfo?.details
          ? activeInfo.details[0]?.title || ""
          : activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        github: activeInfo?.details
          ? activeInfo.details[0]?.github || ""
          : activeInfo?.detail?.github || "",
        phone: activeInfo?.detail?.phone || "",
        email: activeInfo?.detail?.email || "",
        summary:typeof activeInfo?.detail!==Object?activeInfo.detail :"",
        other:typeof activeInfo?.detail!==Object?activeInfo.detail :"" ,
        

      })

    }, [activeSectionKey])


    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {/* extracting object keys from sections/objects: for mapping object,  we can not
         directly map object */}
          {Object.keys(sections)?.map((key) => (
            <div className={`${styles.section} ${activeSectionKey === key ? styles.active : ""
              }`
            }
              key={key}
              onClick={() => setActiveSectionKey(key)}>

              {sections[key]}

            </div>
          ))}

        </div>
        <div className={styles.body}>
          {/* <InputControl label="title" placeholder="enter title section" /> */}

          <div className={styles.chips}>
            {activeInformation?.details
              ? activeInformation?.details?.map((item, index) => (

                <div className={`${styles.chip} ${
                  activeDetailIndex===index?styles.active:""
                }`}key={item.title + index}
                onClick={()=>setActiveDetailIndex(index)}

                >
                  <p>{sections[activeSectionKey]} {index + 1} </p>
                  <X />
                </div>

              ))
              : ""}

          </div>
          {generateBody()}

          <button onClick={handleSubmission}>Save</button>

        </div>
      </div>
    )

  }

  export default Editor;
