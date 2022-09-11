const nodemailer = require('nodemailer');



let rec = {
    FIRST_NAME: 'John',
    LAST_NAME: 'Smith',
    EMAIL: 'john@example.com',
    PHONE_NUMBER: '888-777-6666',
    STREET: '1234 Ohio St.',
    CITY: 'Evansville',
    STATE: 'IN',
    POSTAL_CODE: '47701',
    COUNTRY: 'US'
};




const transporter = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
    auth:{
        user: "fd21f54b7e7438",
        pass: "8e4c667568b312"
    }
})


const mailOptions = {
    from: 'drfrankenstein123@gmail.com',
    to: 'rtrevino@instructors.2u.com',
    subject: 'mailing list',
    html: `
    <div class="card email-card">
         <div class="card-header">
         <h2 class="name">${rec.FIRST_NAME}</h2>
         <h3 class="name">${rec.LAST_NAME}</h3>
      <div class="card-body">
         <ul class="list-group">       
         <li class="list-group-item">${rec.PHONE_NUMBER}</li>
         <li class="list-group-item">${rec.STREET}</li>
         <li class="list-group-item">${rec.CITY}</li>
         <li class="list-group-item">${rec.STATE}</li>
         <li class="list-group-item">${rec.POSTAL_CODE}</li>
         <li class="list-group-item">${rec.COUNTRY}</li>
         </ul>     
      </div>   
         
      </div>
    </div>    
     `
}


transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }else {
        console.log('Email sent: ' + info.response);
    }
})
