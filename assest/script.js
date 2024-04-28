let key = "a234eb2a35a64164be825771754f8960";

const getData = async() =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=india&apiKey=${key}`);
    let jsonData =  await res.json();

    console.log(jsonData.articles[0].title);

} 
     getData();