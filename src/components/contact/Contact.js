import React, { Component } from 'react';
import './Contact.css';


 class Contact extends Component {
  render() {
    return (
       <div className="context_box">
      
<div class="card">
   <div class="banner">
      <div class="avatar"></div>
   </div>
	<h3>April Martinez</h3>
   <a href="mailto:martinezapril56@yahoo.com">📧martinezapril56@yahoo.com</a>
   <a href="">📱 +1 800-300-0396</a>
	<ul>
      <a href="https://www.twitter.com/___cbrown___" target="_blank"><i class="fa fa-twitter" ></i></a>
	   <a href="https://www.linkedin.com/in/-cbrown-" target="_blank"><i class="fa fa-linkedin"></i></a>
      <a href="https://www.codepen.io/___cbrown___" target="_blank"><i class="fa fa-codepen"></i></a>
      <a href="https://dribbble.com/___cbrown___" target="_blank"><i class="fa fa-dribbble" ></i></a>
	</ul>
</div>

{/* <div class="card">
   <div class="banner">
	   <div class="avatar"></div>
	</div>
	<h3>Name</h3>
   <a href="">📧 martinezapril56@yahoo.com</a>
   <a href="">🌐 www.martinezmanagement.com</a>
	<ul>
	   <a href=""><i class="fa fa-github" style="font-size:16px"></i></a>
		<a href=""><i class="fa fa-codepen" style="font-size:16px"></i></a>
		<a href=""><i class="fa fa-spotify" style="font-size:16px"></i></a>
   </ul>
</div> */}
       </div>
    
    );
  }
}


export default Contact;