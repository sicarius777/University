import React,  {useRef} from 'react' ;
import './Testimonials.css';
import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back_icon.png';
import user_1 from '../../assets/user1.jpg'; // Uncommented import
import user_2 from '../../assets/user2.jpg';
import user_3 from '../../assets/user3.jpg';
import user_4 from '../../assets/user4.jpg';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt="" />
                <div>
                  <h3>Brandon Sanderson</h3>
                  <span>The Cosmere</span>
                </div>
              </div>
              <p>Sanderson's First Law: An author's ability to solve conflict with magic is DIRECTLY 
                proportional to how well the reader understands said magic.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt="" />
                <div>
                  <h3>J.R.R. Tolkien</h3>
                  <span>Middle Earth</span>
                </div>
              </div>
              <p>All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, 
                deep roots are not reached by the frost. Not all those who wander are lost.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt="" />
                <div>
                  <h3>Nicholas Eames</h3>
                  <span>Kings of the wyald & The bloody rose</span>
                </div>
              </div>
              <p>“Or not lost, he considered, since they lingered on in the hearts of those who loved them, 
                who love them still, their memory nurtured like a sprig of green in an otherwise desolate soul. 
                Which was, he supposed, a kind of immortality, after all.”</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt="" />
                <div>
                  <h3>George R.R. Martin</h3>
                  <span>Song of ice and fire.</span>
                </div>
              </div>
              <p> A reader lives a thousand lives before he dies. The man who never reads lives only once.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
