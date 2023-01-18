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
  )

  const [ActiveInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  )

  const WorkExpBody = (
    <div className={styles.details}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"


        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"

        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"

        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"

        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"

        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"

        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"

        />
        <InputControl
          placeholder="Line 2"

        />
        <InputControl
          placeholder="Line 3"

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

        />
      </div>
      <InputControl
        label="Overview"

        placeholder="Enter basic overview of project"

      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"

          placeholder="Enter deployed link of project"

        />
        <InputControl
          label="Github Link"

          placeholder="Enter github link of project"

        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"

        />
        <InputControl
          placeholder="Line 2"

        />
        <InputControl
          placeholder="Line 3"

        />
        <InputControl
          placeholder="Line 4"

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

        />
      </div>
      <InputControl
        label="College/School Name"

        placeholder="Enter name of your college/school"

      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"

        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"

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

        />
        <InputControl
          label="Title"

          placeholder="Enter your title eg. Frontend developer"

        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"

          placeholder="Enter your linkedin profile link"

        />
        <InputControl
          label="Github Link"

          placeholder="Enter your github profile link"

        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"

          placeholder="Enter your email"

        />
        <InputControl
          label="Enter phone"

          placeholder="Enter your phone number"

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

        />
        <InputControl
          placeholder="Line 2"

        />
        <InputControl
          placeholder="Line 3"

        />
        <InputControl
          placeholder="Line 4"

        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"

        placeholder="Enter your objective/summary"

      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"

        placeholder="Enter something"

      />
    </div>
  );
  const generateBody = () => {
    switch (sections[ActiveSectionKey]) {
      case sections.basicInfo: return basicInfoBody;
      case sections.workExp: return WorkExpBody;
      case sections.project: return projectBody;
      case sections.education: return educationBody;
      case sections.achievements: return achievementsBody;
      case sections.summary: return summaryBody;
      case sections.others: return otherBody;
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
        {Object.keys(sections)?.map((key) => (
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



      </div>
    </div>
  )

}

export default Editor 
