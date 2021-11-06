import './App.css';
import React from 'react';


class Profil extends React.Component{

  //Le compteur de secondes 
  state = {
    seconds: 1
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  //Pour afficher - masquer les infos de profil
  state = {
     isActive:false,
     
  }

  showHandler = ()=>{
      this.setState({
          isActive: true
      })
  }

  hideHandler = () =>{
      this.setState({
          isActive: false
      })
  }


  //Les infos du profil
  state = {

    fullName: "Je m'appelle Adama",
      bio: "Je suis apprenant à Gomycode",
      profession: "Web developer",
      imgSrc: [
        "/profilepic.png"
      ]

  }

   render(){
       return(
           <div>
           
              {
                this.state.isActive ?
                <>
                  <h1>hello {this.state.fullName}</h1> <br></br> 
                  <h3>Un petit bio : </h3> 
                  <p>{this.state.bio}</p> <br></br> 
                  <h3>Profession : </h3> 
                  <p>{this.state.profession}</p>
                  <img src={this.state.imgSrc}></img> <br></br> 

                  <p>Le compteur en secondes : {this.state.seconds}</p>
    
                </>

                :null
              }
             
              <button onClick={this.showHandler}>Afficher le profil</button>
              <button onClick={this.hideHandler}>Masquer</button>
           </div>
       )
   }
}

export default Profil;
