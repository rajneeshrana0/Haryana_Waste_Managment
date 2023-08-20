/*side navigation*/
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}
.sidebar{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: rgb(92 199 71);
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open{
  width: 250px;
}
.sidebar .logo-details{
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logo-details .icon{
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar .logo-details .logo_name{
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name{
  opacity: 1;
}
.sidebar .logo-details #btn{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details #btn{
  text-align: right;
}
.sidebar i{
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar .nav-list{
  margin-top: 20px;
  height: 100%;
  margin-right: 5px;
  margin-left: -45px;
}
.sidebar li{
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li .tooltip{
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgb(92 199 71);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}
.sidebar li:hover .tooltip{
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar.open li .tooltip{
  display: none;
}
.sidebar input{
  font-size: 15px;
  color: #FFF;
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: #444181;
}
.sidebar.open input{
  padding: 0 20px 0 50px;
  width: 100%;
}
.sidebar .bx-search{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  background: #444181;
  color: #FFF;
}
.sidebar.open .bx-search:hover{
  background: #444181;
  color: #FFF;
}
.sidebar .bx-search:hover{
  background: #FFF;
  color: #444181;
}
.sidebar li a{
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #444181;
}
.sidebar li a:hover{
  background: #FFF;
}
.sidebar li a .links_name{
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .links_name{
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .links_name,
.sidebar li a:hover i{
  transition: all 0.5s ease;
  color: #444181;
}
.sidebar li i{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.sidebar li.profile{
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: #444181;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar.open li.profile{
  width: 250px;
}
.sidebar li .profile-details{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.sidebar li img{
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}
.sidebar li.profile .name,
.sidebar li.profile .job{
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}
.sidebar li.profile .job{
  font-size: 12px;
}
.sidebar .profile #log_out{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #444181;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}
.sidebar.open .profile #log_out{
  width: 50px;
  background: none;
}

 .sidebar.open ~ .home-section{
  left: 250px;
  width: calc(100% - 250px);
}
.home-section .text{
  display: inline-block;
  color: #444181;
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
  text-align: center;
}
#showcase {
    min-height: 450px;
color: #fff;
text-align: center;
}

@media (max-width: 420px) {
  .sidebar li .tooltip{
    display: none;
  }
}

/*main body*/

body {
    color: rgb(92 199 71);
          margin-bottom: 280px;
      background: #fff;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        font-style: normal;
        display: fixed;

    } 
   .main h1{
      text-align: center;
      color: #444181;
      text-decoration: solid;
      font-weight: 700;
    }
    
    .home,
.reports,
.products {
  /* display: flex; */
  height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}
/* start slide show*/  
    /* Position the image container (needed to position the left and right arrows) */
    .container {
      position: relative;
      width: 80%;
      margin: 30px auto;
    }
    
        /* end slide show*/
    .frames{
      display: flex;
      padding: 20px;
       
    }
    .frames img{
      border: 5px solid black;
    }
    .Swachh-pledge{
      color: white;
      border-radius: 10px;
    padding: 10px;
    background-color: rgb(92 199 71);
    margin: 20px;
      font-weight: bold;
      font-size: 20px;
      
    text-align: center;
   }
   .Pledge-to-segregate{
    color: white;
    border-radius: 10px;
    padding: 10px;
    background-color: rgb(92 199 71);
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
 }
 .row1{
  margin-top: 10px;
  margin-bottom: -65px
 }
 .row2{
  
    margin-top: -25px;
    margin-bottom: -25px
 }
 p{
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style:italic;
  text-align: justify;
  padding: 10px;
  color: #444181;
 }
 .main{
  margin-left: 100px;
  margin-right: 15px;
 }
 section nav{
  color: white;
    padding: 20px;
    background-color: #444181;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    }
 section nav .total3 i{
  font-size: 20px;
  }
  

  .products {
    width: 80%;
    height: 140vh;
    padding: 15px 0;
    margin-left: -25px;
}
.products h1 {
    margin: 15px 0;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: right;
    text-transform: uppercase;
    background: linear-gradient(to right, #444181,#ab89d3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.products .box {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px 25px;
}
.products .box .card {
  width: 250px;
  height: 400px;
    box-shadow: 0 0 8px #af76f0;
    border-radius: 5px;
    text-align: center;
    padding: 10px 20px;
    background: #f6f6f6;
}

.products .box .card .image {
    display: flex;
    align-items: center;
    justify-content: center;
}
.products .box .card .image img {
    width: 200px;
    margin: 15px 0;
    transition: 0.3s;
    height:200px;
}
.products .box .card .products_text p {
    color: #444181;
    line-height: 21px;
    margin: 8px 0;
}
.products .box .card .products_text h3 {
    margin: 7px 0;
    text-align: left;
    color: rgb(92 199 71);
    text-decoration: solid;
    font-weight: 800;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    ;
}
.products .box .card .products_text .products_star {
    color: orange;
    margin-bottom: 19px;
    cursor: pointer;
}
.products .box .card .products_text .btn {
    text-decoration: none;
    padding: 5px 5px;
    background: linear-gradient(to right, #e961be , #af76f0);
    color: white;
    border-radius: 20px;
    font-size: 15px;
}
        
    /* multiple pages */

    .upload h1{
      text-align: center;
      color: #444181;
      margin: 10px;
      font-weight: 800;
      font-size: 30px;
padding: 10px;
    }
.uploadForm{
  text-align:center;
  margin: 10px;
  padding: 10px;
  color: #444181;

}
/* play/pause */
.play,.pause {
  max-width: 400px;
  margin: 75px 30px;
  text-align: center;
  display: flex;
  height: 40px;
  width: 40px;
}
#btn1{
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
 #btn_pause{
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
#btn1:hover {
  background-color: #0056b3;
}
#btn_pause:hover {
  background-color: #0056b3;
}
/* comments likes*/

.comments-section {
  max-width: 600px;
  margin: 20px auto;
}
.comments-likes{
  display: flex;
}
#comments-list {
  list-style: none;
  padding: 0;
}

#comments-list li {
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

/* Styling for the comment form */
#comment-form {
  display: flex;
  margin-top: 10px;
}

#comment-input {
  flex-grow: 1;
  padding: 5px;
}

#comment-input::placeholder {
  color: #999;
}

#comment-form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

#comment-form button:hover {
  background-color: #0056b3;
}

/* Styling for the likes section */
.likes-section {
  max-width: 200px;
  margin: 20px auto;
  text-align: center;
  
}

#like-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

#like-button:hover {
  background-color: #0056b3;
}

#like-count {
  font-size: 18px;
}
