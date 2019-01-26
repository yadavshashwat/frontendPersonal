import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var worknew = this.props.data.work.map(function(work){
        var pointer = null;
        pointer = work.description_list.map(function(point){
            return <li>{point.description}</li>
        });
        var media = null;
        
        media = work.media_coverage.map(function(point,index){
          console.log(index)
          if (index===0){
            return <span><a href={point.link}>{point.name}</a></span>
          }else{
            return <span> | <a href={point.link}>{point.name}</a></span>
          }
            
        });
        var Totalmedia = work.media_coverage.length > 0 ? <span>Media Coverage: {media}</span> :<span></span>;
        return <div key={work.company}>
                  <a target="_blank" href={work.website}><h3>{work.company}</h3></a>
                  <p className="description-company" >{work.companyDescription}</p>
                  <hr></hr>
                  <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em> <span>&bull;</span><em className="date">{work.location}</em></p>
                  <p className="work-description"><ul>{pointer}</ul></p>
                  <p className="work-description">{Totalmedia}</p>
                </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {worknew}
        </div>
    </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Tools</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
