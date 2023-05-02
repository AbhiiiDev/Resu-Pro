import React from 'react'
import styles from './Editor.module.css'
import { useState, useEffect } from 'react';
import InputControl from '../InputControl/InputControl';
import { X } from 'react-feather';

function Editor(props) {
  const sections = props.sections;
  const information = props.information;
  
  const [ActiveSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  )  //initial active will be first one 
  const [ActiveInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  )

//values usestate
const [values, setValues] = useState({
  name:ActiveInformation?.details?.name || "" ,
  title:ActiveInformation?.details?.name || "" ,
  linkedin:ActiveInformation?.details?.name || "" ,
  github:ActiveInformation?.details?.name || "" ,
  phone:ActiveInformation?.details?.name || "" ,
  email:ActiveInformation?.details?.name || "" ,
})

//maintaining body for each component:(defines how many forms will be there)

  const WorkExpBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
           defaultValue={values.title}
           onChange={(event)=>{
            setValues((prev)=>({...prev,title:event.target.value } ))
           }}

        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          defaultValue={values.companyName}
          onChange={(event)=>{
            setValues((prev)=>({...prev,title:event.target.value } ))
           }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
            defaultValue={values.certificationLink}
            onChange={(event)=>{
              setValues((prev)=>({...prev,title:event.target.value } ))
             }}
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
defaultValue={values.location}
onChange={(event)=>{
  setValues((prev)=>({...prev,title:event.target.value } ))
 }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
defaultValue={values.startDate}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
defaultValue={values.endDate}
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
defaultValue={values.points ?values.points[0]:""}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ?values.points[1]:""}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ?values.points[2]:""}
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
defaultValue={values.title}
        />
      </div>
      <InputControl
        label="Overview"

        placeholder="Enter basic overview of project"
defaultValue={values.overview}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"

          placeholder="Enter deployed link of project"
defaultValue={values.link}
        />
        <InputControl
          label="Github Link"

          placeholder="Enter github link of project"
defaultValue={values.github}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ?values.points[0]:""}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ?values.points[1]:""}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ?values.points[2]:""}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ?values.points[3]:""}
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
defaultValue={values.title}
        />
      </div>
      <InputControl
        label="College/School Name"

        placeholder="Enter name of your college/school"
defaultValue={values.college}
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
defaultValue={values.startDate}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
defaultValue={values.endDate}
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
defaultValue={values.name}
        />
        <InputControl
          label="Title"

          placeholder="Enter your title eg. Frontend developer"
defaultValue={values.title}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"

          placeholder="Enter your linkedin profile link"
defaultValue={values.linkedin}
        />
        <InputControl
          label="Github Link"

          placeholder="Enter your github profile link"
defaultValue={values.github}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"

          placeholder="Enter your email"
defaultValue={values.email}
        />
        <InputControl
          label="Enter phone"

          placeholder="Enter your phone number"
defaultValue={values.phone}
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
          defaultValue={values.points ?values.points[0]:""}
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ?values.points[1]:""}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ?values.points[2]:""}
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ?values.points[3]:""}
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"

        placeholder="Enter your objective/summary"
defaultValue={values.summary}
      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"

        placeholder="Enter something"
defaultValue={values.other}
      />
    </div>
  );
  //detecting which section is active, whose form to show 
  const generateBody = () => {
    switch (sections[ActiveSectionKey]) {
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

  useEffect(() => {
    setActiveInformation(information[sections[ActiveSectionKey]])

  }, [ActiveSectionKey])


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* extracting object keys from sections/objects: for mapping object,  we can not
         directly map object */}
        { Object.keys(sections)?.map((key) => (
          <div className={`${styles.section} ${ActiveSectionKey === key ? styles.active : ""
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
          {ActiveInformation?.details
            ? ActiveInformation?.details?.map((item, index) => (

              <div className={styles.chip} key={item.title + index}>
                <p>{sections[ActiveSectionKey]} {index + 1} </p>
                <X />
              </div>

            ))
            : ""}



        </div>
        {generateBody()}

<button>Save</button>

      </div>
    </div>
  )

}

export default Editor 
