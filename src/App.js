import './App.scss';
import Logo from './assets/images/logo.png';
import { TypeAnimation } from 'react-type-animation';
import corner from './assets/images/corner.png';
import snapchef from './assets/images/snapchef.png'
import upn from './assets/images//upn.png'
import gabbys from './assets/images/gabbys.png'
import mind from './assets/images/mind.png'
import cfs from './assets/images/cfs.png'
import church from './assets/images/church.png'
import insta from './assets/images/instagram.png'
import github from './assets/images/github.png'
import linkedin from './assets/images/linkedin.png'
import resume from './assets/Wei_Jeffery_Resume.pdf'
import { Grid } from '@mui/material';

function App() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <div className="container">
      <div className='home'>
        <div className='flex'>
          <div className='text-button'>
            <div className='text-zone'>
              <TypeAnimation className='large'
              style={{ whiteSpace: 'pre-line'}}
              sequence={[
                'Hi,\nI\'m Jeffery.',
              ]}
              speed={30}
              />
              <br/>
              <TypeAnimation className='small'
              sequence={[
                'Student',
                1000,
                'Full Stack Developer',
              ]}
              repeat={Infinity}
              speed={50}
              />
              <br />
              <div className='button-container'>
                <button onClick={handleScroll}> Contact Me</button>
                <a href={resume} without rel="noopener noreferrer" target="_blank"><button> Resume</button></a>
              </div>
            </div>
          </div>
          <div className='image-zone'>
            <img className = "logo" src = {Logo} />
          </div>
          <img src = {corner} className='scroll'/>
        </div>
        <img src = {corner} className='top-right'/>
        <img src = {corner} className='bottom-left'/>
      </div>

      <div className='projects'>
        <h1>Projects</h1>
        <Grid className='cards' container rowSpacing={{ xs: 4, sm: 6, md: 8 , lg:14}} columnSpacing={{ xs: 2, sm: 3, md: 3 , lg:6}}>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <div className='card'>
              <a href='https://jwei.pythonanywhere.com/' target='blank'><img src = {snapchef}/></a>
              <div className='card-flex'>
                <a className = 'link' href='https://jwei.pythonanywhere.com/' target='blank'>SnapChef</a>
                <a target = 'blank' href = "https://github.com/BotDestroyer/SnapChef"><img className='git-icon' src={github}/></a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <div className='card'>
              <a href='https://www.upcountypreventionnetwork.org' target='blank'><img src = {upn}/></a>
              <div className='card-flex'>
                <a className = 'link' href='https://www.upcountypreventionnetwork.org' target='blank'>Upcounty Prevention Network</a>
                <a target = 'blank' href = "https://github.com/gurujaya/UPN-VersionGuru"><img className='git-icon' src={github}/></a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}md={4} sm={6} xs={6}>
            <div className='card'>
              <a href='https://www.thesweetlifetruck.com' target='blank'><img src = {gabbys}/></a>
              <div className='card-flex'>
                <a className = 'link' href='https://www.thesweetlifetruck.com' target='blank'>Gabby's Sweet Treats</a>
                <a target = 'blank' href = "https://github.com/BotDestroyer/foodtruck"><img className='git-icon' src={github}/></a>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4}sm={6} xs={6}>
            <div className='card'>
              <a href='https://www.mindlab.cs.umd.edu' target='blank'><img src = {mind}/></a>            
              <a className = 'link' href='https://www.mindlab.cs.umd.edu' target='blank'>MIND Lab</a>
            </div>
          </Grid>
          
          <Grid item lg={4}md={4} sm={6} xs={6}>
            <div className='card'>
              <a href='https://www.communityfarmshare.org' target='blank'><img src = {cfs}/></a>
              <a className = 'link' href='https://www.communityfarmshare.org' target='blank'>Community Farm Share</a>
            </div>
          </Grid>

          <Grid item lg={4} md={4}sm={6} xs={6}>
            <div className='card'>
              <a href='https://www.churchingaithersburg.org' target='blank'><img src = {church}/></a>
              <div className='card-flex'>
                <a className = 'link' href='https://www.churchingaithersburg.org' target='blank'>Church In Gaithersburg</a>
                <a target = 'blank' href = "https://github.com/BotDestroyer"><img className='git-icon' src={github}/></a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className='contact'>
        <h1>Reach Out</h1>
        <h2><a className = 'email' href="mailto:jefferywei05@gmail.com">jefferywei05@gmail.com</a></h2>
        <div className='icons-container'>
            <div className='card'>
              <a target = 'blank' href = "https://www.instagram.com/jefferywei_"><img src={insta}/></a>
            </div>
            <div className='card'>
              <a target = 'blank' href = "https://github.com/BotDestroyer"><img src={github}/></a>
            </div>
            <div className='card'>
              <a target = 'blank' href = 'https://www.linkedin.com/in/jefferywei/'><img src={linkedin}/></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;