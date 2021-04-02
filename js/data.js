// const data = [];

// const toJSON = csv => {
//     const lines = csv.split('\n')
//     const result = []
//     const headers = lines[0].split(',')

//     lines.map(l => {
//         const obj = {}
//         const line = l.split(',')

//         headers.map((h, i) => {
//             obj[h] = line[i]
//         })

//         result.push(obj)
//     })

//     return JSON.stringify(result)
// }


// const fileInput = document.getElementById("data-button")

// fileInput.addEventListener("change", handleFileSelect, false)

// // const inputElement = document.getElementById("input");
// // inputElement.addEventListener("change", handleFiles, false);
// function handleFileSelect(event){
//     const reader = new FileReader()
//     reader.onload = handleFileLoad;
//     reader.readAsText(event.target.files[0])
//   }

//   function handleFileLoad(event){
//     const csv = JSON.stringify(event.target.result);
//     console.log(csv)
//     const json = toJSON(csv)
//     console.log(JSON.parse(json))
//     // document.getElementById('fileContent').textContent = event.target.result;
//   }



console.log(data)