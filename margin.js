pdf = {
    printBackground: true,
    margin: {
        top: "30px",
        right: "0px",
        bottom: "30px",
        left: "0px"
    }
};



const parseMargin = () => {
    if (pdf.margin === null) {
        pdf.margin = '0px'
    }
}


console.log(!pdf.margin)