
import './App.css';
import Counter from './Components/Counter';
import ShowHide from './Components/ShowHide';
import { useState } from 'react';
import ImageSlider from './Components/ImageSlider';

import ChangeColor from './Components/ChangeColor';

function App() {
  
  const [counterVisiblity , setCounterVisiblity] = useState(false);

  function showCounter (){
    setCounterVisiblity(!counterVisiblity);
  }

  const [showhideVisiblity , setShowhideVisiblity] = useState(false);

  function showShowhide(){
    setShowhideVisiblity(!showhideVisiblity);
  }
  
  const [imgsliderVisiblity , setImgsliderVisiblity] = useState(false);

  function showImgSlider(){
    setImgsliderVisiblity(!imgsliderVisiblity)
  }

  const [changecolorVisiblity , setChangeColorVisiblity] = useState(false)

  function showChangeColor(){
    setChangeColorVisiblity(!changecolorVisiblity)
  }
  
    
      
     
      
      
      if(counterVisiblity)
        {
          return(<div className='bg'><div className='App'>
            <Counter> </Counter>
            <br></br>
            <button className='btn' onClick={()=>{showCounter()}}>Back</button>

          
          </div></div>)
        }
        else if(showhideVisiblity)
        {
          return(<div className='bg'><div className='App'>
            <ShowHide></ShowHide>
            <br></br>
            <button className='btn' onClick={()=>{showShowhide()}}>Back</button>

          
          </div></div>)
        }
        else if(imgsliderVisiblity)
          {
            return(<div className='bg'><div className='App'>
              <ImageSlider></ImageSlider>
              
              <button className='btn'  onClick={()=>{showImgSlider()}}>Back</button>
  
            
            </div></div>)
          }

          else if(changecolorVisiblity)
            {
              return(<div className='bg'><div className='App'>
                <ChangeColor></ChangeColor>
                
                <button className='btn'  onClick={()=>{showChangeColor()}}>Back</button>
    
              
              </div></div>)
            }


        else{
           return(<div className='bg'><div className='App'>
            <button className='btn' onClick={()=>{showCounter()}}>Counter</button>
            <button className='btn' onClick={()=>{showShowhide()}}>ShowHide</button>
            <button className='btn' onClick={()=>{showImgSlider()}} >Image Slider</button>
            <button className='btn'  onClick={()=>{showChangeColor()}}>Change Color</button>
            </div></div>)
        }

      
          

    
  
}

export default App;
