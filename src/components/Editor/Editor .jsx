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

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  ); //initial active will be first one 
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  )

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
          defaultValue={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}

        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          defaultValue={values.companyName}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          defaultValue={values.certificationLink}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, certificationLink: event.target.value }))
          }}
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          defaultValue={values.location}
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
          defaultValue={values.startDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          defaultValue={values.endDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }}
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 0)

          }
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
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
          defaultValue={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}
        />
      </div>
      <InputControl
        label="Overview"

        placeholder="Enter basic overview of project"
        defaultValue={values.overview}
        onChange={(event) => {
          setValues((prev) => ({ ...prev, overview: event.target.value }))
        }}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"

          placeholder="Enter deployed link of project"
          defaultValue={values.link}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }}
        />
        <InputControl
          label="Github Link"

          placeholder="Enter github link of project"
          defaultValue={values.github}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 0)

          }
        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 1)

          }
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 2)

          }
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ? values.points[3] : ""}
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
          defaultValue={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}
        />
      </div>
      <InputControl
        label="College/School Name"

        placeholder="Enter name of your college/school"
        defaultValue={values.college}
        onChange={(event) => {
          setValues((prev) => ({ ...prev, college: event.target.value }))
        }}
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          defaultValue={values.startDate}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          defaultValue={values.endDate}
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
          defaultValue={values.name}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }}
        />
        <InputControl
          label="Title"

          placeholder="Enter your title eg. Frontend developer"
          defaultValue={values.title}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"

          placeholder="Enter your linkedin profile link"
          defaultValue={values.linkedin}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }}
        />
        <InputControl
          label="Github Link"

          placeholder="Enter your github profile link"
          defaultValue={values.github}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"

          placeholder="Enter your email"
          defaultValue={values.email}
          onChange={(event) => {
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }}
        />
        <InputControl
          label="Enter phone"

          placeholder="Enter your phone number"
          defaultValue={values.phone}
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
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 0)

          }

        />
        <InputControl
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 1)

          }
        />
        <InputControl
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointsUpdate(event.target.value, 2)

          }
        />
        <InputControl
          placeholder="Line 4"
          defaultValue={values.points ? values.points[3] : ""}
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
        defaultValue={values.summary}
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
        defaultValue={values.other}
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
          props.setInformation(prev => ({
            ...prev, [sections.workExp]:
              { ...prev[sections.workExp], detail: tempDetail },
          }))

          break
        }
    }
  }
    //useeffect to set active information at time of active section key
    useEffect(() => {
      const activeInfo = information[sections[activeSectionKey]]
      setActiveInformation(activeInfo);
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

                <div className={styles.chip} key={item.title + index}>
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
