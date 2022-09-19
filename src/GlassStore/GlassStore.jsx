import React, { Component } from 'react'
import data from '../data/dataGlasses.json'

export default class GlassStore extends Component {
    state = {
        arrGlass: data,
        glass: '',
        name:'',
        desc:"",
        display:"none"
    }

    renderArrGlass = () => {
        return this.state.arrGlass.map((glass, index) => {
            return (
                <div className="col-2 mt-3">
                    <a onClick ={() =>{
                      this.showGlass(glass)
                    }}>
                        <img src={glass.url} width={100}></img>
                    </a>
                </div>
            )
        })
    }
     showGlass = (glass) =>{
      this.setState({
        glass:glass.url,
        name:glass.name,
        desc:glass.desc,
        display:"block"
      })

      document.getElementById("text").style.display="block";
     }
    render() {
        console.log(this.state.arrGlass)
        return (
            <div className="container px-5 ">
                <div className="row mt-5">
                    <div style={{
                                position: 'relative',
                            }} className="col-6">
                        <div>
                        <img      
                            src="./glassesImage/model.jpg"
                            className="w-50 d-block mx-auto"
                        ></img>
                        </div>
                        <div style={{
                                position: 'absolute',
                                top: '90px',
                                left: '235px',
                                width:"100%",
                                height:"100%"
                            }}>
                        <img
                            src={this.state.glass}
                            style={{
                                width: '25%',
                                opacity: '0.7',
                               
                            }}
                        />
                        </div>
                        <div id='text' style={{
                          position:"absolute",
                          top:"230px",
                          left:"160px",
                          backgroundColor:"lightpink",
                          opacity:0.7,
                          display:"none"
                        }}>
                          <h2>{this.state.name}</h2>
                          <p style={{
                            width:"300px"
                          }}>{this.state.desc}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./glassesImage/model.jpg" className="w-50 d-block mx-auto"></img>
                    </div>
                </div>
                <div className="row px-5 bg-danger mt-5 p-5">{this.renderArrGlass()}</div>
            </div>
        )
    }
}
