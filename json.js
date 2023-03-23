const fs= require("fs");
const bioData={
    name:"Aashish mishra",
    age:22,
    vill:"Janta bazzar"
};
// //it is json formate.
// const jsonData=JSON.stringify(bioData);
// console.log(jsonData);
// //if is object formate.
// const objData= JSON.parse(jsonData);
// console.log(objData);


// const jsonData=JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("Done");
// } );

fs.readFile("json1.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData);
})
