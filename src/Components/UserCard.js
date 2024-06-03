const userData=[
    {name:"Jeromi",
    city:"Colombo",
    work:"Front-end Developer",
    skills:['Html','CSS','Bootstrap','JavaScript','TypeScript','React','MongoDB'],
    online:false,
    profile:"images/1.jpg"
},

{name:"Sonia",
    city:"Jaffna",
    work:"Back-end Developer",
    skills:['Vue.js','Express','Node.js','JavaScript','TypeScript','React','MongoDB'],
    online:true,
    profile:"images/2.jpg"
},

{
    name:"Alexa",
    city:"Kandy",
    work:"UI-UX Designer",
    skills:['Html','CSS','Bootstrap','Tailwind.css','Material UI','Angular','Adobe'],
    online:false,
    profile:"images/3.jpg"
}

]


function User(props) {
  return (
    <div className="card-container">
      <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
      <img src={props.profile}className="img" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.work}</p>
      <div className='buttons'>
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skills,index) => (
            <li key={index}>{skills}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const UserCard = () => {
   return( <>
   {
    userData.map((user,index) => (
        <User key={index} 
        name={user.name}
        city={user.city}
        work={user.work}
        skills={user.skills}
        online={user.online}
        profile={user.profile}

        />
        ))
   }
    </>
    )
};

// return <User name="Jeromi" city="Colombo" work="Front-end Developer" skills={['Html','CSS','Bootstrap','JavaScript','TypeScript','React','MongoDB']} online={true} profile="images/1.jpg" />;

