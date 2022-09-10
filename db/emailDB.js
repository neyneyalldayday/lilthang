

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

function generateEmail(data) {
    return `
   <div class="card email-card">
        <div class="card-header">
        <h2 class="name">${data.FIRST_NAME}</h2>
        <h3 class="name">${data.LAST_NAME}</h3>
     <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">${data.EMAIL}</li>
        <li class="list-group-item">${data.PHONE_NUMBER}</li>
        <li class="list-group-item">${data.STREET}</li>
        <li class="list-group-item">${data.CITY}</li>
        <li class="list-group-item">${data.STATE}</li>
        <li class="list-group-item">${data.POSTAL_CODE}</li>
        <li class="list-group-item">${data.COUNTRY}</li>
        </ul>     
     </div>   
        
     </div>
   </div>

    
    `;
}

function writeHtmlToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
const sendEmail = (email) => fs.writeTofile('index.html', generateEmail({...rec}))