import React from 'react'
import Editor from '../../Editor/Editor '
import styles from './Body.module.css'
import {ArrowDown} from 'react-feather'
import { useState } from 'react'

function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Project",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        others: "Others"
    };

const [ResumeInformation, setResumeInformation] = useState(
{
[sections.basicInfo]:{
    id: sections.basicInfo,
    title:sections.basicInfo,
    detail:{},

},
[sections.workExp]: {
    id: sections.workExp,
    sectionTitle: sections.workExp,
    details: [],
  },
  [sections.project]: {
    id: sections.project,
    sectionTitle: sections.project,
    details: [],
  },
  [sections.education]: {
    id: sections.education,
    sectionTitle: sections.education,
    details: [],
  },
  [sections.achievement]: {
    id: sections.achievement,
    sectionTitle: sections.achievement,
    points: [],
  },
  [sections.summary]: {
    id: sections.summary,
    sectionTitle: sections.summary,
    detail: "",
  },
  [sections.others]: {
    id: sections.others,
    sectionTitle: sections.others,
    detail: "",
  },
}
)

    return (
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {
                        colors.map((item) => (
                            <span className={`${styles.color}`}
                                key={item}
                                style={{ backgroundColor: item }}

                            />
                        ))
                    }
                </div>
                <button>download <ArrowDown className='svg'/>    </button>
            </div>
            <div className={styles.main}>
                <Editor sections={sections} information={ResumeInformation}/>
            </div>
        </div>
    )
}

export default Body